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
        <div class="order clearfix">
            <div class="order-left">我的订单</div>
            <div class="order-right">全部订单</div>
        </div>
        <div class="user-nav">
            <ul>
                <li>
                    <div></div>
                    <span>待付款</span>
                </li>
                <li>
                    <div></div>
                    <span>待收货</span>
                </li>
                <li>
                    <div></div>
                    <span>退换修</span>
                </li>
            </ul>
        </div>
        <div class="ui-line"></div>
        <ul class="items item1">
            <li>
                <a>会员中心</a>
            </li>
            <li>
                <a>我的优惠</a>
            </li>
        </ul>
        <div class="ui-line"></div>
        <ul class="items item2">
            <li>
                <a>服务中心</a>
            </li>
            <li>
                <a>小米之家</a>
            </li>
        </ul>
        <div class="ui-line"></div>
        <ul class="items item3">
            <li>
                <a>F码通道</a>
            </li>
        </ul>
        <div class="ui-line"></div>
        <ul class="items item4">
            <li>
                <a>设置</a>
            </li>
        </ul>
    </div>
</template>
<script type="text/ecmascript-6">
    export default {};
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
    .app
        overflow auto
        header
            background: url(./images/bg.63c8e19851.png) center 0 #f37d0f
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
                        vertical-align top
                        width: 100%
                        height: 110%
                .user-name
                    color: #fff
                    font-size: .24rem
                    text-align: left
                    div
                        color: hsla(0,0%,100%,.6)
        .order
            background-color: #fff
            height: .8rem
            border-bottom: 1px solid rgba(0,0,0,.15)
            color: rgba(0,0,0,.54)
            position: relative
            padding-right: .56rem
            display: flex
            justify-content: space-between
            align-items: center
            .order-left
                font-size: .25rem
                padding: 0 0 0 .32rem
                color: rgba(0,0,0,.87)
            .order-right
                font-size:.23rem
                color: rgba(0,0,0,.87)
        .order:after
            content: ""
            position: absolute
            right: .32rem
            top: 50%
            width: .15rem
            height: .15rem
            border-left: 1px solid currentColor
            border-top: 1px solid currentColor
            transform: translate3d(0,-50%,0) rotate(135deg)

        .user-nav
            ul
                display: flex
                font-size: .22rem
                justify-content: space-between
                padding: 0 .8rem
                background-color: #fff
                li
                    position: relative
                    padding: .4rem 0
                li:nth-child(1)
                    div
                        width: .48rem
                        height: .48rem
                        margin: 0 auto .16rem
                        background-image url("./images/pay.png")
                        background-size 100% 100%
                    span
                        color:black
                li:nth-child(2)
                    div
                        width: .48rem
                        height: .48rem
                        margin: 0 auto .16rem
                        background-image url("./images/collect.png")
                        background-size 100% 100%
                    span
                        color:black
                li:nth-child(3)
                    div
                        width: .48rem
                        height: .48rem
                        margin: 0 auto .16rem
                        background-image url("./images/repair.png")
                        background-size 100% 100%
                    span
                        color:black
        .ui-line
            height: .2rem
            background: #f5f5f5
            overflow: hidden
            clear: both
        ul.items
            font-size: .28rem
            line-height: 0
            li
                position: relative
                color: rgba(0,0,0,.54)
                line-height: 0

                a
                    border-bottom: 1px solid rgba(0,0,0,.15)
                    padding-right: .56rem
                    margin-left: 1.12rem
                    height: 1.04rem
                    display: block
                    line-height 1.04rem
                    box-align: center
                    -webkit-box-align: center
                    box-pack: justify
                    -webkit-box-pack: justify
                    color: currentColor
                    color:black
                a:after
                    content: ""
                    position: absolute
                    right: .32rem
                    top: 50%
                    width: .2rem
                    height: .2rem
                    border-left: 1px solid currentColor
                    border-top: 1px solid currentColor
                    transform: translate3d(0,-50%,0) rotate(135deg)

        ul.item1
            li:nth-child(1)
                background url("./images/a1.png") no-repeat .32rem
                background-size: .48rem auto
            li:nth-child(2)
                background url("./images/a2.png") no-repeat .32rem
                background-size: .48rem auto
        ul.item2
            li:nth-child(1)
                background url("./images/b1.png") no-repeat .32rem
                background-size: .48rem auto
            li:nth-child(2)
                background url("./images/b2.png") no-repeat .32rem
                background-size: .48rem auto
        ul.item3
            li
                background url("./images/c1.png") no-repeat .32rem
                background-size: .48rem auto
        ul.item4
            li
                background url("./images/d1.png") no-repeat .32rem
                background-size: .48rem auto

</style>
