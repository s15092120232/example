<template>
    <div class="root" v-if="goodsDetails!==null&&goodsDetails._id===1">
        <header class="clearfix">
            <div class="header-left">
                <a></a>
            </div>
            <div class="placeholder"></div>
            <div class="header-right">
                <a></a>
            </div>
        </header>
        <div v-if="showId!==1">
            <div ref="wrapper" class="goods-tab" v-if="goodsDetails!==null&&goodsDetails.image.length>0">
                <ul ref="slider">
                    <li v-for="(item,index) in goodsDetails.image" :key="index">
                        <img :src="item" alt=""/>
                    </li>
                </ul>
            </div>
            <div class="top-banner">
                <img src="https://i8.mifile.cn/b2c-mimall-media/a7e8113252750fb0f9bc1fb5695b4dc6.jpg" alt="">
            </div>
            <div class="down-banner clearfix">
                <div class="banner-left">
                    <div class="price">
                        <span v-text="goodsDetails.price"></span>
                    </div>
                </div>
                <div class="banner-right">
                    <span>据预约结束</span>
                    <div>
                        <div>00</div>:
                        <div>00</div>:
                        <div>00</div>
                    </div>
                </div>
            </div>
            <div class="overview">
                <div class="goods-name" v-text="goodsDetails.name"></div>
                <div class="goods-remark">
                    <font>「7月3日早10点开售」</font>
                    <span v-text="goodsDetails.remark"></span>
                </div>
                <div class="goods-price" v-text="'￥'+goodsDetails.price">

                </div>
            </div>
            <div class="product-section">
                <div class="align-start" @click="showId=1">
                    <div class="title">已选</div>
                    <div class="info">
                        小米8 6GB+128GB
                        <span v-show="typeId===1">黑色</span>
                        <span v-show="typeId===2">白色</span>
                        <span v-show="typeId===3">金色</span>
                        <span v-show="typeId===4">蓝色</span>
                        x<span v-text="number"></span>
                    </div>
                </div>
            </div>
            <div class="product-section">
                <div class="align-start">
                    <div class="title">送至</div>
                    <div class="info">
                        北京市 东城区
                    </div>
                </div>
            </div>
            <div class="product-down">
                <div>
                    <img data-v-7ab76df1="" src="./images/ok.png" class="mr1x img-icon">
                    <span data-v-7ab76df1="" class="fsc1">7天无理由退货</span>
                </div>
                <div>
                    <img data-v-7ab76df1="" src="./images/ok.png" class="mr1x img-icon">
                    <span data-v-7ab76df1="" class="fsc1">15天质量问题换货</span>
                </div>
                <div>
                    <img data-v-7ab76df1="" src="./images/ok.png" class="mr1x img-icon">
                    <span data-v-7ab76df1="" class="fsc1">365天保修</span>
                </div>
            </div>
            <div class="comment">
                <div class="comment-count">用户评价(<span v-text="goodsDetails.comment.length"></span>)</div>
                <div class="comment-content" v-for="(j,index) in goodsDetails.comment" :key="index">
                    <div class="user" v-if="j.pId===0">
                        <img class="comment-avatar" :src="j.avatar" alt="">
                        <p class="comment-name" v-text="j.cName"></p>
                        <p class="comment-time" v-text="j.time"></p>
                        <div class="like" v-if="j.praise===1">
                            <span>超爱</span>
                        </div>
                    </div>
                    <div class="user-text" v-if="j.pId===0">
                        <p class="comment-text" v-text="j.content"></p>
                    </div>
                    <div class="other-user" v-for="(j,index) in getSubCategoryList(j.cId)" :key="index">
                        <div class="other-avatar">
                            <img :src="j.avatar" alt="">
                        </div>
                        <span v-text="j.cName"></span>
                        <span v-text="j.content"></span>
                    </div>
                    <div class="more" v-if="j.pId===0">
                        查看全部7条评论
                    </div>
                </div>
                <div class="tab-header">
                    <a @click="curId=1" :class="{active:curId===1}">概述</a>
                    <a @click="curId=2" :class="{active:curId===2}">参数</a>
                </div>
                <div v-if="curId===1" class="summary">
                    <div v-for="(k,index) in goodsDetails.summary" :key="index">
                        <img :src="k" alt="">
                    </div>
                </div>
                <div v-if="curId===2" class="parameter">
                    <div v-for="(l,index) in goodsDetails.parameter" :key="index">
                        <img :src="l" alt="">
                    </div>
                </div>
            </div>
        </div>
        <footer>
            <a class="home" href="http://localhost:8080/index.html">
                <i></i>
                <span>首页</span>
            </a>
            <a class="cart">
                <i></i>
                <span>购物车</span>
            </a>
            <a class="buy">
                <span>立即预约</span>
            </a>
        </footer>
        <div class="shade" v-show="showId===1">
            <div class="shade-box">
                <div class="shade-header clearfix">
                    <div class="del" @click="showId=0"></div>
                    <div class="pro-info">
                        <img v-show="typeId===1"
                             src="//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/c64094a50574eb7d3c62261429e589de.jpg" alt="">
                        <img v-show="typeId===2"
                             src="//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/dd77dedbeb6efab39423570f48c24b15.jpg" alt="">
                        <img v-show="typeId===3"
                             src="//i8.mifile.cn/a1/pms_1527735163.02784072!720x7200.jpg" alt="">
                        <img v-show="typeId===4"
                             src="//cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/fbe2d87a66c9aa2e3f8e83e10bf0fe2d.jpg" alt="">
                    </div>
                    <div class="shade-price">
                        <p v-text="'￥' + goodsDetails.price"></p>
                        <div class="shade-type">
                            小米8 6GB+128GB
                            <span v-show="typeId===1">黑色</span>
                            <span v-show="typeId===2">白色</span>
                            <span v-show="typeId===3">金色</span>
                            <span v-show="typeId===4">蓝色</span>
                        </div>
                    </div>
                </div>
                <div class="shade-body">
                    <div class="option-title">
                        颜色
                    </div>
                    <div class="options-group">
                        <div @click="typeId=1" :class="{show:typeId===1}">黑色</div>
                        <div @click="typeId=2" :class="{show:typeId===2}">白色</div>
                        <div @click="typeId=3" :class="{show:typeId===3}">金色</div>
                        <div @click="typeId=4" :class="{show:typeId===4}">蓝色</div>
                    </div>
                    <div class="option-capacity">
                        <div class="capacity-title">
                            容量
                        </div>
                        <div class="capacity">
                            128GB
                        </div>
                    </div>
                    <div class="number">
                        <div class="number-title">
                            购买数量
                        </div>
                        <div class="number-content">
                            <button class="reduce" @click="number--" :disabled="number===1"></button>
                            <span v-text="number"></span>
                            <button class="add" @click="number++"></button>
                        </div>
                    </div>
                    <div class="ywb">
                        <div class="option-title">
                            保障服务
                            <a><img src="./images/wen.png" alt=""></a>
                        </div>
                        <div class="option-group">
                            <p>意外保障服务  249元</p>
                        </div>
                        <div class="option-group">

                        </div>
                    </div>
                </div>
                <footer class="btn">
                    <a class="buy-btn">
                        立即预约
                    </a>
                </footer>
            </div>
        </div>
    </div>
</template>
<script type="text/ecmascript-6">
    import BScroll from 'better-scroll';
    import axios from 'axios';
    export default {

        data(){
            return {
                goodsDetails: null,
                curId:1,
                showId:0,
                typeId:1,
                number:1
            }
        },
        created(){
            //去数据服务器请求信息
            axios.post('http://localhost:3000/details/getGoodsDetails')
                .then((result) => {
                    this.goodsDetails = result.data[0];
                })
                .catch(() => {})
        },
        methods:{
            getSubCategoryList(id){
                return this.goodsDetails.comment.filter(j => j.pId === id);
            }
        },
        watch:{
            goodsDetails(newValue,oldValue){
                this.$nextTick(
                    () => {
                        this.$refs.slider.style.width = (100 *newValue.image.length) + '%';
                        this.goodsScroll = new BScroll(this.$refs.wrapper,{
                            click:true,
                            scrollX:true,
                            bounce: false,
                            resizePolling: 60,
                            momentum: false,
                            deceleration: 0,
                            snap:{
                                stepX:416,
                                stepY:414,
                                threshold:1

                            }
                        });
                    }
                );
            }
        },
    };
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
    .root
        position relative
        font-size 0
        background #efefef
        width:100%
        header
            margin-top .1em
            height: 50px
            background: transparent
            width:100%
            position: absolute
            top: 0
            left: 0
            right: 0
            z-index: 99
            display: flex
            flex-wrap: nowrap
            .header-left
                position relative
                display: inline-block
                width: .6rem
                height: .6rem
                color: #ddd
                background: rgba(0,0,0,.6)
                border-radius: 50%
                margin-left:.1em
                a
                    position absolute
                    left:0
                    top:0
                    display inline-block
                    width: .6rem
                    height: .6rem
                    background-image: url('./images/left.png')
                    background-size 100% 100%
                    transform: scale(.6)
            .placeholder
                flex: 1
                height:50px
            .header-right
                position relative
                display: inline-block
                width: .6rem
                height: .6rem
                color: #ddd
                background: rgba(0,0,0,.6)
                border-radius: 50%
                a
                    position absolute
                    right:0
                    top:0
                    display inline-block
                    width: .6rem
                    height: .6rem
                    background-image: url('./images/right.png')
                    background-size 100% 100%
                    transform: scale(.6)
        div
            /*height:7.92rem*/
            div.goods-tab
                overflow: hidden
                width:100%
                height:100%
                ul
                    display:flex
                    flex-wrap nowrap
                    li
                        width: 100vw
                        height:8rem
                        img
                            width: 100vw
                            height:100%
            div.top-banner
                margin-top:-5px
                display inline-block
                font-size 0
                img
                    width:100%
                    height:100%
            div.down-banner
                position relative
                display inline-block
                background-image url("./images/down-banner.jpg")
                width:100vw
                height: .97rem
                vertical-align top
                .banner-left
                    position relative
                    display inline-block
                    float left
                    width:50%
                    height:100%
                    vertical-align top
                    .price
                        display inline-block
                        height:100%
                        span
                            /*margin-left 1em*/
                            font-size: .48rem
                            font-weight: 700
                            padding-top .2rem
                            color:white
                            display inline-block
                            vertical-align top
                div.banner-left:before
                    margin-left 1em
                    vertical-align top
                    padding-top .2rem
                    content:'\A5'
                    text-decoration: none
                    font-size: .48rem
                    font-weight: 700
                    color:white
                    display inline-block
                .banner-right
                    position: absolute
                    top: 0
                    bottom: 0
                    right: 0
                    height: .97rem
                    width: 2.4rem
                    text-align center
                    background: url("./images/banner-right.png")
                    background-size: cover
                    font-size: .24rem
                    span
                        display inline-block
                        margin-top:.5em
                        color: #f56600
                    div
                        display inline-block

                        div
                            color: #fff
                            width: .36rem
                            padding: .05rem 0
                            border-radius: .02rem
                            background: rgba(0,0,0,.6)
                            text-align: center
            div.overview
                background: #fff
                text-align: left
                padding: .2rem .32rem 0
                div.goods-name
                    font-size: .36rem
                    line-height: 1.5em
                div.goods-remark
                    font-size: .24rem
                    line-height: 1.5em
                    color: rgba(0,0,0,.54)
                    font
                        color:#ff4a00
                div.goods-price
                    color: #ff6700
                    font-size: .48rem
                    font-weight: 700
            div.product-section
                margin-top: .08rem
                background:white
                padding: .16rem .32rem
                div.align-start
                    position relative
                    font-size: .24rem
                    display: flex
                    div.title
                        width: .82rem
                        font-size: .24rem
                        color: rgba(0,0,0,.54)
                        line-height: .4rem
                    div.info
                        font-size: .24rem
                        color: rgba(0,0,0,.87)
                        line-height: .4rem
                        padding-right: .2rem
                div.align-start:before
                    content: ""
                    position: absolute
                    right: .32rem
                    top: 50%
                    width: .2rem
                    height: .2rem;
                    border-left: 1px solid currentColor
                    border-top: 1px solid currentColor
                    transform: translate3d(0,-50%,0) rotate(135deg)


            div.product-down
                display flex
                padding: .16rem .32rem
                position: relative
                background: #fff
                border-top: 1px
                text-align: left
                font-size: .22rem
                div
                    margin-right .2rem
                    img
                        height: .2rem
                        width: auto
            div.comment
                margin-top .2rem
                font-size .22rem
                background white
                div.comment-count
                    padding: .24rem .32rem .32rem
                div.comment-content
                    padding: .24rem .32rem .32rem
                    div.user
                        display inline-block
                        position relative
                        width:100%
                        img.comment-avatar
                            margin-right: .24rem
                            width: .8rem
                            height: .8rem
                            overflow: hidden
                            border-radius: 100%
                        p.comment-name
                            font-size: .26rem
                            display inline-block
                            vertical-align top
                        p.comment-time
                            position absolute
                            left:1rem
                            bottom:.2rem
                            margin-top: .05rem
                            color: rgba(0,0,0,.54)
                        div.like
                            float:right
                            margin-right 0
                            padding-left: .5rem
                            background:transparent url("./images/like.png")no-repeat 0
                            background-size: auto 100%
                            width: 1rem
                            height: .36rem
                            line-height: .36rem
                            color: #ff6700
                    div.user-text
                        p.comment-text
                            padding: .12rem 0
                            line-height: 1.5em
                            font-size: .26rem


                    div.other-user
                        background:#efefef
                        div.other-avatar
                            float: left
                            width: .32rem
                            height: .32rem
                            overflow: hidden
                            border-radius: 100%
                            margin-right: .2rem
                            img
                                width:100%
                                height:100%
                    div.more
                        font-size: .28rem
                        color: #ff6700
                        text-align: center
                        margin-top: .24rem
                        padding: .32rem 0 .16rem
                        position relative
                    div.more:after
                        content: ""
                        position: absolute
                        right:2.2rem
                        top: 60%
                        width: .15rem
                        height: .15rem
                        border-left: 1px solid currentColor
                        border-top: 1px solid currentColor
                        transform: translate3d(0,-50%,0) rotate(135deg)
                div.tab-header
                    height: .88rem
                    background: #fff
                    display flex
                    text-align center
                    a
                        display: block
                        font-size: .26rem
                        width: 100%
                        border-right: 1px solid #f4f4f4
                    a.active
                        color: #ff6700
                div.summary
                    img
                        width:100vw
                div.parameter
                    img
                        width:100vw

        footer
            width:100%
            height: 52px
            background: #fff
            box-shadow: 0 3px 14px 2px rgba(0,0,0,.12)
            position: fixed
            bottom: 0
            left: 0
            right: 0
            z-index: 102
            display flex
            text-align center
            a.home
                display: block
                text-decoration: none
                width: 2.5rem
                color: rgba(0,0,0,.54)
                font-size: .22rem
                i
                    display: block
                    width: .4rem
                    height: .4rem
                    margin: 0 auto .1rem
                    background:url("./images/home.png")
                    background-size 100% 100%
            a.cart
                display: block
                text-decoration: none
                width: 2.5rem
                color: rgba(0,0,0,.54)
                font-size: .22rem
                i
                    display: block
                    width: .4rem
                    height: .4rem
                    margin: 0 auto .1rem
                    background:url("./images/cart.png")
                    background-size 100% 100%
            .buy
                display: block
                outline: 0
                background: #ff6700
                color: #fff
                text-align: center
                width: 100%
                height: 1rem
                line-height: 1rem
                font-size: .28rem

        .shade
            width:100%
            height:100%
            box-sizing border-box
            position fixed
            overflow: auto
            bottom:0
            left:0
            right:0
            background:rgba(0,0,0,0.5)
            z-index 500
            div.shade-box
                padding: .32rem .32rem 1.27rem
                position: fixed
                box-sizing border-box
                bottom: 0
                left: 0
                width:100%
                background-color: #fff
                color: #000
                z-index: 501
                height:70%
                padding-bottom 1rem
                div.shade-header
                    background:white
                    width:100%
                    display inline-block
                    margin:0
                    height:2rem
                    .del
                        float right
                        width: .4rem
                        height: .4rem
                        background-image url("./images/del.png")
                        background-size 100% 100%
                    .pro-info
                        position: relative
                        width: 1.5rem
                        height: 1.5rem
                        text-align: center
                        background: #fff
                        display inline-block
                        img
                            width:100%
                            height:100%
                            display inline-block
                    .shade-price
                        vertical-align top
                        display inline-block
                        p
                            display: inline
                            color: #ff6700
                            font-size: .4rem
                            line-height: .38rem
                        div.shade-type
                            font-size: .28rem
                            color: rgba(0,0,0,.87)
                            line-height: .4rem
                div.shade-body
                    height: 4rem
                    overflow-x: hidden
                    overflow-y: scroll
                    .option-title
                        position: relative
                        padding-bottom: .16rem
                        line-height: .24rem
                        font-size: .24rem
                        color: rgba(0,0,0,.87)
                    .options-group
                        display flex
                        width:100%
                        flex-wrap: wrap
                        flex: 1 1 auto
                        padding-bottom: .32rem
                        div
                            border: 1px solid
                            border-color: rgba(0,0,0,.15);
                            border-radius: 2px
                            width:1.15rem
                            height: .6rem
                            line-height .6rem
                            box-sizing: border-box
                            padding: 0 .08rem
                            text-align: center
                            margin: .16rem 0 0 .16rem
                            overflow: visible
                            font-size: .22rem
                        div.show
                            color: #f56600
                            border-style: dotted
                            border-color:#f56600
                    .option-capacity
                        font-size: .22rem
                        .capacity-title
                            position: relative
                            padding-bottom: .16rem
                            line-height: .24rem
                            font-size: .24rem
                            color: rgba(0,0,0,.87)
                        .capacity
                            border: 1px
                            color: #f56600
                            border-style: dotted
                            border-color:#f56600
                            border-radius: 2px
                            width:1.15rem
                            height: .6rem
                            line-height 37px
                            box-sizing: border-box
                            padding: 0 .08rem
                            text-align: center
                            margin: .16rem 0 0 .16rem
                            overflow: visible
                            font-size: .22rem
                    .number
                        font-size: .2rem
                        margin-top .5rem
                        padding: .32rem 0
                        width:100%
                        display flex
                        flex-wrap: nowrap
                        align-items: center
                        justify-content: space-between
                        padding-right .5rem
                        .number-title
                            position: relative
                            padding-bottom: .16rem
                            line-height: .24rem
                            font-size: .24rem
                            color: rgba(0,0,0,.87)
                        .number-content
                            display: inline-block
                            border: 1px solid #eee
                            .reduce
                                outline:none
                                border:none
                                background-image url("./images/reduce.png")
                                opacity: .3
                                width: .6rem
                                height: .6rem
                                vertical-align: middle
                                background-size: .3rem .3rem
                                background-color: transparent
                                background-repeat: no-repeat
                                background-position: 50%
                            span
                                display: inline-block
                                vertical-align: middle
                                min-width: .6rem
                                padding: 0 .12rem
                                text-align: center
                                font-size: .32rem
                            .add
                                outline:none
                                vertical-align: middle
                                border:none
                                background-image url("./images/add.png")
                                opacity: .3
                                width: .6rem
                                height: .6rem
                                background-color: transparent
                                background-repeat: no-repeat
                                background-position: 50%
                                background-size: .3rem .3rem



                    .ywb
                        font-size: .22rem
                        .option-title
                            position: relative
                            padding-bottom: .16rem
                            line-height: .24rem
                            font-size: .24rem
                            color: rgba(0,0,0,.87)
                            a
                                display: inline-block
                                width: .28rem
                                height: .28rem
                                margin-left: .1rem
                                vertical-align: middle
                                img
                                    width:100%
                                    height:100%
                        .option-group
                            height: .72rem
                            width:49%
                            line-height: .72rem
                            min-width: 1.45rem
                            box-sizing: border-box
                            padding: 0 .08rem
                            text-align: center
                            margin: .16rem 0 0 .16rem
                            overflow: visible

                footer.btn
                    position fixed
                    bottom:0
                    left:0
                    a.buy-btn
                        display: block
                        outline: 0
                        background: #ff6700
                        color: #fff
                        text-align: center
                        width: 100%
                        height: 1rem
                        line-height: 1rem
                        font-size: .28rem
</style>
