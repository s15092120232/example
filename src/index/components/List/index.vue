<template>
    <div class="root">
        <div class="header">
            <MiHeader>
                <div slot="middle" class="title" style="font-size:.3rem;">分类</div>
            </MiHeader>
        </div>
        <div class="body">
            <div class="left" ref="menu">
                <ul v-if="mainCategoryList!==null&&mainCategoryList.length>0">
                    <li v-for="(item,index) in mainCategoryList" :key="index" v-if="item.pId===0">
                        <a @click='changeType(index)' :class='{active:curIndex === index}' v-text="item.name"></a>
                    </li>
                </ul>
            </div>
            <div class="right" v-if="typeList!==null&&typeList.length>0" ref="goods">
                <ul>
                    <li v-for="outerItem in mainCategoryList" :key="outerItem._id" class="good-list-item-hook">
                        <img :src="outerItem.image" alt="">
                        <ul :key="outerItem._id">
                            <li v-for="item in getSubCategoryList(outerItem._id)" :key="item._id">
                                <h3 v-text="item.name"></h3>
                                <ul>
                                    <li v-for="item2 in getSubCategoryList(item._id)" :key="item2._id">
                                        <a href="http://localhost:8080/goodsList.html">
                                            <img :src="'http://localhost:3000'+item2.image" alt="">
                                            <p v-text="item2.name"></p>
                                        </a>
                                    </li>
                                </ul>
                            </li>
                         </ul>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    import BScroll from 'better-scroll';
    import MiHeader from '../../../components/MiHeader';
    import axios from 'axios';


    export default {
        data(){
            return {
                typeList: null,
                heightList:[],
                scrollY:0
            }
        },
        components:{
            MiHeader
        },
        methods:{
            getSubCategoryList(id){
                return this.typeList.filter(item => item.pId === id);
            },
            changeType(id){
                let goodsList = this.$refs.goods.getElementsByClassName('good-list-item-hook');
                let target = goodsList[id];
                this.goodsScroll.scrollToElement(target,400);
            },
            _initHeightList(){
                let goodsList = this.$refs.goods.getElementsByClassName('good-list-item-hook');
                let height = 0;
                this.heightList.push(height);
                for(let i = 0;i < goodsList.length;i++){
                    height += goodsList[i].clientHeight;
                    this.heightList.push(height);
                }
            }
        },
        created(){
            //去数据服务器请求信息
            axios.post('http://localhost:3000/type/getType')
                .then((result) => {
                    this.typeList = result.data;
                })
                .catch(() => {})
        },
        watch:{
            typeList(newValue,oldValue){
                this.$nextTick(
                    () => {
                        this._initHeightList();
                        this.menuScroll = new BScroll(this.$refs.menu,{
                            click:true
                        });
                        this.goodsScroll = new BScroll(this.$refs.goods,{
                            click:true,
                            probeType:3
                        });
                        this.goodsScroll.on('scroll',rect => {
                            this.scrollY = Math.abs(Math.round(rect.y));
                        })
                    }
                );
            }
        },
        computed:{
            mainCategoryList(){
                if(this.typeList === null) return [];
                return this.typeList.filter(item => item.pId ===0);
            },
            curIndex(){
                for(let i = 0;i < this.heightList.length;i++){
                    let begin = this.heightList[i];
                    let end = this.heightList[i+1];
                    if(!end || (this.scrollY >= begin && this.scrollY <end)){
                        return i;
                    }
                }
                return 0;
            }
        },

    };
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
    .root
        .header
            position:fixed
            top: 0
            left:0
            width:100%
            height:50px
        .body
            position:fixed
            top: 50px
            bottom:52px
            width:100%
            display:flex
            .left
                width: 1.52rem
                border-right: 1px solid #efefef
                height:100%
                text-align center
                overflow: hidden
                ul
                    z-index: 90
                    background: #fefefe
                    li
                        font-size: .34rem
                        height: .9rem
                        line-height: .9rem
                        overflow: hidden
                        text-align: center
                        a
                            font-size: .22rem
                            line-height: .9rem
                            text-align: center
                        a.active
                            font-size: .34rem
                            color: #fb7d34
            .right
                flex: 1 1 auto
                box-sizing:border-box
                text-align right
                overflow: hidden
                ul
                    li
                        img
                            display inline-block
                            width: 100%
                            height 100%
                        ul

                            li
                                h3
                                    background: #fff
                                    font-size: .28rem
                                    text-align: center
                                    font-weight: 400
                                    margin-top: .2rem
                                    height: 1.28rem
                                    line-height: 1.28rem
                                    overflow: hidden
                                ul

                                    width:80%
                                    overflow:hidden
                                    margin:0 auto
                                    text-align left
                                    li
                                        width:33.333%
                                        display:inline-block
                                        text-align center
                                        a
                                            width:1rem
                                            height:1rem
                                            margin: 0 auto

                                            img
                                                width:1rem
                                                height:100%
                                                margin 0 auto
                                                overflow: hidden
                                            p
                                                text-align center
                                                margin-top:-.1rem
                                                white-space: nowrap
                                                font-size: .23rem
                                                color: rgba(0,0,0,.54)

</style>
