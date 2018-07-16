<template>
    <div class="app">
        <header>
            <div class="user">
                <div class="user-header">
                    <img src="//s1.mi.com/m/images/m/default.png" alt="">
                </div>
                <div class="user-name">
                    <p>..</p>
                    <div>1403859495</div>
                </div>
            </div>
        </header>
        <div class="order">

        </div>
    </div>
</template>
<script type="text/ecmascript-6">
    export default {};
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
    header
        background: url(../index/components/User/images/bg.63c8e19851.png) center 0 #f37d0f
        background-size: auto 100%
        padding: .32rem 0
        .user
            align-items: center
            display: flex
            .user-header
                margin: 0 .16rem 0 .32rem
                width: .96rem
                height: .96rem
                overflow: hidden
                box-sizing: border-box
                border-radius: 50%
                border: 3px solid hsla(0,0%,100%,.4)
                text-align: center
                img
                    width: 100%
                    height: 110%
            .user-name
                color: #fff
                font-size: .24rem
                text-align: left
                div
                    color: hsla(0,0%,100%,.6)

</style>
