<template>
    <div class="root">
        <footer>
            <div>
                <div>
                    <router-link to="/Index">
                        <a @click="changeFocus = 1" :class="{active:changeFocus === 1}">
                            <i class="image-icons app-bottom-icon icon-home"></i>
                            <span>首页</span>
                        </a>
                    </router-link>
                </div>
                <div>
                    <router-link to="/List">
                        <a @click="changeFocus = 2" :class="{active:changeFocus === 2}">
                            <i class="image-icons app-bottom-icon icon-category"></i>
                            <span>分类</span>
                        </a>
                    </router-link>
                </div>
                <div>
                    <router-link to="/Cart">
                        <a @click="changeFocus = 3" :class="{active:changeFocus === 3}">
                            <i class="image-icons app-bottom-icon icon-cart"></i>
                            <span>购物车</span>
                        </a>
                    </router-link>
                </div>
                <div>
                    <router-link to="/User">
                        <a @click="changeFocus = 4" :class="{active:changeFocus === 4}">
                            <i class="image-icons app-bottom-icon icon-user"></i>
                            <span>我的</span>
                        </a>
                    </router-link>
                </div>
            </div>
        </footer>
    </div>
</template>
<script type="text/ecmascript-6">
    import axios from 'axios';
    export default {
        data(){
            return {
                changeFocus:1
            }
        }
    };
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
    footer
        font-size: .22rem
        position: fixed
        z-index: 9999
        bottom: 0
        left: 0
        height: 52px
        width:100%
        background: #fff
        box-shadow: 0 3px 14px 2px rgba(0,0,0,.12)
        div
            height: 100%
            display: flex
            text-align center
            div
                display: block
                color: #999
                flex: 1 1 auto
                position relative
                a
                    width:100%
                    height:100%
                    position absolute
                    bottom:0
                    left:0
                    i
                        display: block
                        width: .4rem
                        height: .4rem
                        margin: 0 auto .1rem
                        background-size 100% 100%
                    .icon-home
                        background-image:url("../images/home.png")
                    .icon-category
                        background-image:url("../images/category.png")
                    .icon-cart
                        background-image:url("../images/cart.png")
                    .icon-user
                        background-image:url("../images/user.png")
                a.active
                    .icon-home
                        background-image:url("../images/home2.png")
                    .icon-category
                        background-image:url("../images/category2.png")
                    .icon-cart
                        background-image:url("../images/cart2.png")
                    .icon-user
                        background-image:url("../images/user2.png")
                    span
                        color:#f56c02

</style>
