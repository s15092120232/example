<template>
    <div class="code-login">
        <div class="phone-title">
            <span>+86<i class="icon-right"></i></span>
        </div>
        <LoginInput placeholder="手机号码" @change="phone = $event" style="text-indent:4em"></LoginInput>
        <LoginInput placeholder="短信验证码" @change="code = $event"></LoginInput>
        <button class="get-code" @click="getCode" :disabled="codeFlag">
            <span class="aaa" v-text="text"></span>
        </button>
        <LoginButton text="立即登录/注册" :handler="login"></LoginButton>
        <button class="btn-tab">
            <router-link to="/password">用户名密码登录</router-link>
        </button>
        <router-view></router-view>
    </div>
</template>
<script type="text/ecmascript-6">
    import LoginInput from '../LoginInput';
    import LoginButton from '../LoginButton';
    import axios from 'axios';

    export default {
        data(){
            return {
                phone:'',
                code:'',
                text:'获取验证码',
                codeFlag:false, //标识获取验证码按钮是否处于禁用
                loginFlag:false //标识登录按钮是否处于禁用
            }
        },
        methods:{
            login(){
                this.loginFlag = true;
                axios.post(
                    'http://localhost:3000/login/message',
                    { phone: this.phone, code: this.code }
                    )
                    .then(result => {
                        if(result.data = 1)
                            window.location.href = 'http://localhost:8080/index.html';
                        else {
                            alert(result.data);
                            this.loginFlag = false;
                        }
                    })
                    .catch(err => {
                        alert(err);
                        this.loginFlag = false;
                    });
            },
            getCode(){
                this.codeFlag = true;
                axios.post('http://localhost:3000/login/getcode',{phone:this.phone})
                    .then(result => {
                        if(result.data === 1){
                            // 开始倒计时
                            var second = 30;
                            this.interval = setInterval(() => {
                                if(second>0)
                                    this.text = (--second) +'秒';
                                else{
                                    this.text = '获取验证码';
                                    this.codeFlag = false;
                                    clearInterval(this.interval);
                                }
                            },1000);
                        }else{
                            alert(result.data);
                            this.codeFlag = false;
                        }
                    })
                    .catch(err => {
                        alert(err);
                        this.codeFlag = false;
                    })
            }
        },
        components: {
            LoginInput,
            LoginButton
        }
    };
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
    .code-login
        position :relative
        .phone-title
            margin-right: 2px
            color: #9b9b9b
            font-size: 1.2rem
            line-height: .2rem
            position absolute
            left:1.5rem
            top:1.5rem
            .icon-right
                position absolute
                top: -.3rem
                left:2rem
                display: block
                width: .5rem
                height: .5rem
                border-width: .1rem
                border-style: solid
                border-color: transparent transparent #9b9b9b #9b9b9b
                transform: rotate(-135deg)
        .get-code
            position :absolute
            top:4.5rem
            right:0
            border:none
            background:none
            padding: .1rem 20px
            color: #333
            .aaa
                color:#2ea5e5
        .btn-tab
            width:100%
            background: #fff
            margin-top: 10px
            border: 1px solid #d3d3d3
            padding: .7rem 0
            display: block
            margin-bottom: 14px
            text-align: center
            font-size: 1.2rem
            border-radius: 6px
            overflow: hidden
</style>
