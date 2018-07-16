<template>
    <div class="root">
        <MiHeader>
            <div slot="middle" class="title" style="font-size:.3rem;">商品列表</div>
        </MiHeader>
        <div>
            <ul class="good-list" v-if="goodsList!==null&&goodsList.length>0">
                <li v-for="(item,index) in goodsList" :key="index" v-if="item.pId===1">
                    <a href="http://localhost:8080/goods.html">
                        <img :src="'http://localhost:3000'+item.image" alt="">
                        <div>
                            <p v-text="item.name"></p>
                            <div>
                                <p v-text="item.remark"></p>
                            </div>
                            <span>￥<span v-text="item.price"></span></span>
                        </div>
                    </a>
                </li>
            </ul>
            <img src="./images/center.jpg" alt="">
            <ul v-if="goodsList!==null&&goodsList.length>0">
                <li class="like-goods" v-for="(item,index) in goodsList" :key="index" v-if="item.pId===2">
                    <a>
                        <img :src="'http://localhost:3000'+item.image" alt="">
                        <span v-text="item.name"></span>
                        <div v-text="item.price"></div>
                        <del v-show="item.oldprice" v-text="item.oldprice"></del>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</template>
<script type="text/ecmascript-6">
    import MiHeader from '../components/MiHeader';
    import axios from 'axios';

    export default {
        data(){
            return {
                goodsList: null
            }
        },
        components:{
            MiHeader
        },
        created(){
            //去数据服务器请求信息
            axios.post('http://localhost:3000/list/getGoodsList')
                .then((result) => {
                    this.goodsList = result.data;
                })
                .catch(() => {})
        }
    };
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
    .root
        font-size: .22rem
        box-sizing:border-box
        ul.good-list
            padding-top:50px
            li
                a
                    display: flex
                    img
                        width: 3rem
                        height: 3rem
                        text-align: center
                    div
                        display: block
                        padding: 0 .32rem .08rem
                        width: 4.2rem
                        box-sizing: border-box
                        text-align: left
                        flex: 1 1 auto
                        line-height:.8rem
                        p
                            font-size: .28rem
                            color: rgba(0,0,0,.87)
                            flex: 1 1 auto
                        div
                            font-size: .23rem
                            color: rgba(0,0,0,.54)
                            margin-bottom: .16rem
                            line-height: .3rem
                            padding:0
                            height: .6rem
                            overflow: hidden
                            flex: 1 1 auto
                            p
                                color: rgba(0,0,0,.54)
                                font-size: .23rem
                        span
                            font-size: .32rem
                            position: relative
                            color: #ff6000
        img
            width:100%
        ul
            width:100%
            li.like-goods
                width:50%
                display inline-block
                a
                    img
                        width:100%
                    span
                        font-size: .28rem
                        display block
                    div
                        font-size: .32rem
                        position relative
                        color: #ff6700
                        padding-left 1em
                        display inline-block
                    div:before
                        content: "\A5"
                        position: absolute
                        left: .5em
                        top: 0
                        font-size: .9em
                        text-decoration: none
                    del
                        display inline-block
                        position relative
                        padding-left 1em
                        font-size: .22rem;
                        color: rgba(0,0,0,.54);
                        text-decoration: line-through
                    del:before
                        content: "\A5"
                        position: absolute
                        left: .5em
                        top: 0
                        font-size: .9em
                        text-decoration: none

</style>
