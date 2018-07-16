<template>
    <div class="password">
        <LoginInput placeholder="邮箱/手机号码/小米ID" @change="count = $event"></LoginInput>
        <LoginInput placeholder="密码" type="password" @change="pwd = $event"></LoginInput>
        <i v-if="date === 1" @click="date = 2">
            <img src="./images/eye.png" alt="">
        </i>
        <i v-if="date === 2" @click="date = 1">
            <img src="./images/eyeopen.png" alt="">
        </i>
        <LoginButton text="登录" :handler="login"></LoginButton>
        <button class="btn-tab">
            <router-link to="/message">手机短信登录/注册</router-link>
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
            return{
                count:'',
                pwd:'',
                date:1
            }

        },
        components:{
            LoginInput,
            LoginButton
        },
        methods:{
            login(){
                axios.post(
                    'http://localhost:3000/login/password',
                    { code: this.code, pwd:this.pwd})
                    .then(result => {
                        if(result.data === 1)
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
            }
        }
    };
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
    .password
        position :relative
        i
            position absolute
            top:4.5rem
            right:0
            width:20px
            height:20px
            display: block
            img
                width: 100%
                height:100%
                display: block
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
