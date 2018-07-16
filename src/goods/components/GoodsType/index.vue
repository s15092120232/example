<template>
    <div class="shade">
        <div class="shade-box">
            <div class="shade-header" v-if="goods!==null&&goods._id===1">
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
                <div class="shade-price" v-for="a in goods" :key="a._id">
                    <p v-text="'￥'+a.price"></p>
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
            </div>
        </div>
    </div>
</template>
<script type="text/ecmascript-6">
    import axios from 'axios';
    export default {
        data(){
            return {
                typeId:1,
                number:1
            }
        },
        created(){
            //去数据服务器请求信息
            axios.post('http://localhost:3000/details/getGoodsDetails')
                .then((result) => {
                    this.goods = result.data[0];
                })
                .catch(() => {})
        },
    };
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
    .shade
        width:100%
        height:100%
        position fixed
        bottom:0
        left:0
        background:rgba(0,0,0,0.5)
        z-index:99
        div.shade-box
            position: fixed
            bottom: 0
            left: 0
            right: 0
            width: 7.2rem
            background-color: #fff
            color: #000
            padding: .32rem .32rem 1.27rem
            z-index: 110
            min-height: 5rem
            max-height: 9.6rem
            text-align: left
            div.shade-header
                background:white
                width:100%
                height:2rem
                .del
                    float right
                    width: .4rem
                    height: .4rem
                    background-image url("../../images/del.png")
                    background-size 100% 100%
                .pro-info
                    position: relative
                    width: 2rem
                    height: 2rem
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
                        font-size: .48rem
                        line-height: .38rem
                    div.shade-type
                        font-size: .28rem
                        color: rgba(0,0,0,.87)
                        line-height: .4rem
            div.shade-body
                max-height: 6rem
                overflow-x: hidden
                overflow-y: scroll
                .option-title
                    position: relative
                    padding-bottom: .16rem
                    line-height: .24rem
                    font-size: .24rem
                    margin-left .5rem
                    color: rgba(0,0,0,.87)
                .options-group
                    display flex
                    width:100%
                    flex-wrap: wrap
                    padding:.5rem
                    flex: 1 1 auto
                    padding-bottom: .32rem
                    div
                        border: 1px solid
                        border-color: rgba(0,0,0,.15);
                        border-radius: 2px
                        height: .72rem
                        line-height: .72rem
                        min-width: 1.45rem
                        box-sizing: border-box
                        padding: 0 .08rem
                        text-align: center
                        margin: .16rem 0 0 .16rem
                        font-size: .22rem
                    div.show
                        color: #f56600
                        border-style: dotted
                        border-color:#f56600
                .option-capacity
                    font-size: .22rem
                    .capacity-title
                        margin-left .5rem
                        color:black
                    .capacity
                        height: .72rem
                        display inline-block
                        text-align center
                        border: 1px
                        border-style: dotted
                        border-color:#f56600
                        color: #f56600
                        line-height: .72rem
                        min-width: 1.45rem
                        box-sizing: border-box
                        padding: 0 .08rem
                        margin: .16rem 0 0 .7rem
                        overflow: visible
                .number
                    font-size: .22rem
                    margin-top .5rem
                    padding: .32rem 0
                    display flex
                    flex-wrap: nowrap
                    align-items: center
                    justify-content: space-between
                    .number-title
                        margin-left .5rem
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
                            background-image url("../../images/reduce.png")
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
                            background-image url("../../images/add.png")
                            opacity: .3
                            width: .6rem
                            height: .6rem
                            background-color: transparent
                            background-repeat: no-repeat
                            background-position: 50%
                            background-size: .3rem .3rem



</style>
