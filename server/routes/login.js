var express = require('express');
var MongoClient = require('mongodb').MongoClient;
var SMSClient = require('@alicloud/sms-sdk');
var _ = require('lodash');

var smsClient = new SMSClient({
    accessKeyId:'LTAIujfYheOVL0Gy',
    secretAccessKey:'VdYAFm07WFNC2Wv21TI3hD79vlxMMy'
});
var DB_STR = 'mongodb://localhost:27017/mi';
var router = express.Router();

// 辅助数组:记录所有有效的手机号及对应验证码
var usercode = [
    // {phone:'???',code:'???'}
];

/* SMS发送验证码到指定手机 */
function _sendCode(phone, callback){
    var code = Math.floor(Math.random()*1000000);//产生6位随机验证码
    smsClient.sendSMS({
        PhoneNumbers:phone,
        SignName:'带带大师兄',
        TemplateCode:'SMS_135965001',
        TemplateParam:'{"code":"'+code+'"}'
    }).then(function(res){
        if(res.Code === 'OK') {
            callback('1'); 
            //把刚发的验证码放到usercode中，为登录验证做准备
            usercode.push({phone:phone, code:code});
            // 本次发送的验证码30秒后过期,自动从usercode中删除
            setTimeout(function(){
                _.remove(usercode,function(item){
                    return item.phone == phone;
                });
            },30000);
        }
        else callback('验证码发送失败..');
    },function(err){
        // console.log(err);
        callback('验证码发送失败..');
    });
}
/* 验证手机号和验证码是否有效并返回结果 */ 
function _validatePhoneCode(phone, code){
    var _usercode = usercode.slice(0);
    var length = _usercode.length;
    while(length--){
        if(_usercode[length].phone == phone){
            if (_usercode[length].code == code)  return '1';
            else return '验证码错误..'
        }
    }
    return '验证码过期..';
}

/* 获取验证码 */
router.post('/getcode', function(req, res, next){
    var phone = req.body.phone,
        callback = function(result){res.send(result);}
    _sendCode(phone, callback);
});
/* 验证码登录(暗含注册) */
router.post('/message', function(req, res, next) {
    //搜集客户传来的信息
    var phone = req.body.phone,
        code = req.body.code,
        callback = function(result){ res.send(result);}
    // 根据登录类型进行登录验证
    var result = _validatePhoneCode(phone, code);
    if(result !== '1') {callback(result);return;}
    // 命令数据执行注册操作
    var evalStr = 'register("' + phone + '")';
    MongoClient.connect(DB_STR, function(err, db){
        if(err){callback('数据库连接失败..');return;}
        db.eval(evalStr, function(err, msg){
            if(err) result = '数据库操作失败..';
            else result = msg;
            db.close();
            callback(result);
        });
    });
});
/* 密码登录 */
router.post('/password', function(req, res, next){
    var count = req.body.count,
        pwd = req.body.pwd,
        callback = function(result){ res.send(result) };
    MongoClient.connect(DB_STR, function(err, db){    //打开连接
        if(err){ callback('数据库连接失败..');return; }
        db.collection('col_user')
        .find({$or:[{name:count},{phone:count}]})
        .toArray(function(err,arr){
            var result = '';
            if(err) 
                result = '数据库操作失败..';
            else if(arr.length < 1) 
                result = '账号不存在..';
            else if(arr[0].pwd === pwd) 
                result = '1';
            else 
                result = '密码错误..';
            db.close();         //关闭数据库连接
            callback(result);         //返回响应信息
        });
    });// end connect function
});
module.exports = router;