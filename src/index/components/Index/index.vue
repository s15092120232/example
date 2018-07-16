<template>
    <div class="root">
        <header>
            <div class="header-top">
                <div class="header-left">
                    <img src="./images/logo.png" alt="">
                </div>
                <div class="header-center">
                    <i></i>
                    搜索商品名称
                </div>
                <a class="header-right" href="http://localhost:8080/login.html">
                    <i></i>
                </a>
            </div>
            <div class="header-down">
                <div @click="change=1" :class="{action:change===1}">
                    <span>推荐</span>
                </div>
                <div @click="change=2" :class="{action:change===2}">
                    <span>手机</span>
                </div>
                <div @click="change=3" :class="{action:change===3}">
                    <span>智能</span>
                </div>
                <div @click="change=4" :class="{action:change===4}">
                    <span>电视</span>
                </div>
                <div @click="change=5" :class="{action:change===5}">
                    <span>电脑</span>
                </div>
                <div @click="change=6" :class="{action:change===6}">
                    <span>游戏控</span>
                </div>
                <div @click="change=7" :class="{action:change===7}">
                    <span>双摄</span>
                </div>
                <div @click="change=8" :class="{action:change===8}">
                    <span>全面屏</span>
                </div>
                <div @click="change=9" :class="{action:change===9}">
                    <span>生活周边</span>
                </div>
            </div>
        </header>
        <div class="body">
            <div class="body-header">
                <a class="cells">
                    <img src="./images/a.jpg" alt="">
                </a>
                <div class="cells-nav">
                    <a href="">
                        <img src="./images/a1.jpg" alt="">
                    </a>
                    <a href="">
                        <img src="./images/a2.gif" alt="">
                    </a>
                    <a href="">
                        <img src="./images/a3.jpg" alt="">
                    </a>
                    <a href="">
                        <img src="./images/a4.jpg" alt="">
                    </a>
                    <a href="">
                        <img src="./images/a5.jpg" alt="">
                    </a>
                </div>
            </div>
            <div class="body-center" v-if="indexGoods!==null&&indexGoods.length>0">
                <div v-for="item in indexGoods" :key="item._id">
                    <div class="goods-title" v-if="item.type===0">
                        <img :src="item.img" alt="">
                    </div>
                    <div class="goods-body" v-if="item.type===1">
                        <div class="goods-img">
                            <img :src="item.img" alt="">
                            <div class="discount">
                                <img :src="item.discount" alt="">
                            </div>
                        </div>
                        <div class="info">
                            <div class="goods-header">
                                <div class="goods-name" v-text="item.name"></div>
                                <div class="goods-price">
                                    <span v-text="'￥'+item.price+'起'"></span>
                                    <del v-if="item.oldprice!==undefined" v-text="'￥'+item.oldprice"></del>
                                </div>
                            </div>
                            <div class="goods-footer">
                                <div class="goods-remark" v-text="item.remark"></div>
                                <div class="buy-btn">
                                    立即购买
                                </div>
                            </div>
                        </div>
                    </div>
                    <template v-if="indexGoods.pId!=0">
                        <div class="goods-foot"  v-for="i in getSubCategoryList(item._id)">
                            <div v-if="i.type===2">
                                <div class="footer-goods">
                                    <div class="footer-img">
                                        <img :src="i.img" alt="">
                                        <div class="footer-discount">
                                            <img :src="i.discount" alt="">
                                        </div>
                                    </div>
                                    <div class="footer-name" v-text="i.name"></div>
                                    <div class="footer-remark" v-text="i.remark"></div>
                                    <span class="footer-price" v-text="'￥'+i.price+'起'"></span>
                                    <del style="color:#666666" class="footer-oldprice" v-if="i.oldprice!==undefined" v-text="'￥'+i.oldprice"></del>
                                    <div class="buy-btn">
                                        立即购买
                                    </div>
                                </div>
                            </div>
                        </div>
                    </template>
                </div>
            </div>
            <footer>
                <div>
                    <img src="./images/footer.jpg" alt="">
                </div>
                <div>
                    <img src="./images/question.jpg" alt="">
                </div>
            </footer>
        </div>

    </div>
</template>
<script type="text/ecmascript-6">
    import axios from 'axios';
    export default {
        data(){
            return {
                change:1,
                indexGoods:null
            }
        },
        methods:{
            getSubCategoryList(id){
                return this.indexGoods.filter(item => item.pId === id);
            },
        },
        created(){
            //去数据服务器请求信息
            axios.post('http://localhost:3000/indexGoods/getIndexGoods')
                .then((result) => {
                    this.indexGoods = result.data;
                })
                .catch(() => {})
        },
    };
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
    img
        width:100%
        height:100%
    .root
        position relative
        font-size .22rem
        display inline-block
        header
            font-size .22rem
            position: fixed
            top: -1px
            left: 0
            right: 0
            z-index: 99
            box-shadow: 0 2px 4px -1px rgba(0,0,0,.2)
            background: #f2f2f2
            .header-top
                display: flex
                justify-content: space-between;
                height: 50px
                background: #f2f2f2
                color: #666
                padding: 0
                align-items: center
                .header-left
                    display: inline-block
                    width: .6rem
                    margin: 0 .2rem
                    img
                        width:80%
                .header-center
                    display flex
                    font-size: .3rem
                    justify-content: flex-start
                    align-items: center
                    border: 1px solid #e5e5e5
                    text-align: left
                    width: 100%
                    color: rgba(0,0,0,.3)
                    background-color: #fff
                    border-radius: .04rem
                    i
                        display: block
                        width: .5rem
                        height: .5rem
                        background-image url("./images/find.png")
                        background-size: .5rem .5rem

                .header-right
                    align-items: center
                    display: block
                    width: .6rem
                    margin: 0 .2rem
                    i
                        display: block
                        background-repeat: no-repeat;
                        background-position: 50%
                        width: .6rem
                        height: .6rem
                        background-image url("./images/user.png")
                        background-size .4rem .4rem
            .header-down
                overflow-x: auto
                background: #f2f2f2
                font-size: .26rem
                white-space: nowrap
                div
                    display: inline-block
                    padding: 0 .25rem
                    text-align: center
                    span
                        display: inline-block
                        line-height: 32px
                        border-bottom: 2px solid rgba(237,91,0,0)
                div.action
                    span
                        color: rgb(237, 91, 0);
                        border-color: rgb(237, 91, 0)
            .header-down::-webkit-scrollbar
                display none
        .body
            position: absolute
            top: .3rem
            left: 0
            right: 0
            background: #fff
            width:100vw
            .body-header
                background-color: rgb(255, 63, 0)
                a.cells
                    display inline-block
                .cells-nav
                    display inline-block
                    font-size 0
                    a
                        display:inline-block
                        width: 20%
                        box-sizing border-box
                        img
                            width:100%
                            height:100%

            .body-center
                div
                    .goods-title
                        font-size 0
                    .goods-body
                        .goods-img
                            position relative
                            div.discount
                                position absolute
                                right:0
                                bottom:0
                                display: inline-block
                                width: 1rem
                                height: auto
                        .info
                            padding: .2rem .27rem
                            text-align: left
                            background-color: #fff
                            .goods-header
                                display: flex
                                overflow: hidden
                                justify-content: space-between
                                .goods-name
                                    font-size: .32rem
                                .goods-price
                                    span
                                        color:red
                                    del
                                        font-size: .2rem
                                        color: rgba(0,0,0,.54)
                            .goods-footer
                                display flex
                                justify-content: space-between
                                .goods-remark
                                    margin-top: .09rem
                                    font-size: .2rem
                                    line-height: .3rem
                                    color: rgba(0,0,0,.54)
                                    white-space: nowrap
                                    overflow: hidden
                                    text-overflow: ellipsis
                                .buy-btn
                                    width: 2rem
                                    background: #ea625b
                                    border-radius: .05rem
                                    text-align: center
                                    color: #fff
                                    font-size: .24rem
                                    padding: .16rem 0
                                    font-weight: 700
                .goods-foot
                    display inline-block
                    width:50%
                    box-sizing border-box
                    div
                        div.footer-goods
                            text-align center
                            .footer-img
                                position relative
                                .footer-discount
                                    position absolute
                                    bottom:0
                                    right:0
                                    display: inline-block
                                    width: 1rem
                                    height: auto
                            .footer-remark
                                margin-top: .06rem
                                font-size: .22rem
                                line-height: .3rem
                                color: rgba(0,0,0,.54)
                            .footer-price
                                color:red
                            .buy-btn
                                width: 2rem
                                background: #ea625b
                                border-radius: .05rem
                                text-align: center
                                color: #fff
                                font-size: .24rem
                                padding: .16rem 0
                                font-weight: 700
                                margin:0 auto





            footer
                width:100%
                div
                    width:100%
</style>
