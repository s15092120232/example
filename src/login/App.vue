<template>
    <div class="app">
        <div class="header">
            <div class="header-logo">
                <img src="./assets/images/m-logo.png" alt="">
            </div>
            <div class="header-title">
                <span>小米帐号登录</span>
            </div>
        </div>
        <router-view></router-view>
        <div class="footer">
            <div class="foot-title">
                <span>其他方式登录</span>
            </div>
            <div class="foot-icon">
                <a class="qq">
                    <i></i>
                </a>
                <a class="wb">
                    <i></i>
                </a>
                <a class="ali">
                    <i></i>
                </a>
            </div>
            <div class="foot-list">
                <ul>
                    <li class="active"><a href="">简体</a></li>
                    <li><a href="">繁体</a></li>
                    <li><a href="">English</a></li>
                    <li><a href="">常见问题</a></li>
                    <li><a href="">隐私设置</a></li>
                </ul>
            </div>
        </div>

    </div>
</template>
<script type="text/ecmascript-6">
    export default {
        components:{}
    };
</script>
<style lang="stylus" rel="stylesheet/stylus" scoped>
    .app
        width: 350px
        margin:0 auto
    .header
        text-align:center
        padding: 30px 0 10px
        .header-title
            font-size: 1.2rem
            color: #000
            font-weight: normal
    .footer
        text-align center
        .foot-icon
            padding-top: 10px
            text-align: center
            a
                margin: 0 10px;
                width:30px
                height:30px
                display inline-block
                border-radius 50%
                text-align center
                line-height:35px

            a.qq
                background-color:#72c7db
                i
                    width:18px
                    height:18px
                    display inline-block
                    background-image:url('./assets/images/icons.png')
                    background-repeat no-repeat
                    background-position: -19px 0
            a.wb
                background-color:#ed9090
                i
                    width:18px
                    height:18px
                    display inline-block
                    background-image:url('./assets/images/icons.png')
                    background-repeat no-repeat
                    background-position: -38px 0
            a.ali
                background-color:#6bb6ea
                i
                    width:26px
                    height:18px
                    display inline-block
                    background-image:url('./assets/images/icons.png')
                    background-repeat no-repeat
                    background-position: -57px 0;
        .foot-list
            margin-top 6rem
            ul
                li
                    display inline-block
                    a
                        padding: 0 10px
                        color:#9b9b9b
                li.active
                    a
                        color:#4a4a4a





</style>
