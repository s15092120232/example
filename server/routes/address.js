var express = require('express');
var MongoClient = require('mongodb').MongoClient;
var DB_STR = 'mongodb://localhost:27017/mi';
var router = express.Router();


router.post('/getAddress', function(req, res, next){
    var callback = function(result){ res.send(result) };
    MongoClient.connect(DB_STR, function(err, db){    //打开连接
        if(err){ callback('数据库连接失败..');return; }
        db.collection('col_address')
            .find()
            .toArray(function(err,arr){
                db.close();         //关闭数据库连接
                callback(arr);         //返回响应信息
            });
    });// end connect function
});
module.exports = router;