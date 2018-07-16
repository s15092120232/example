<template>
    <div class="root">
        <div v-show="addType === 1">
            <MiHeader>
                <div slot="middle">收货地址</div>
            </MiHeader>
            <div class="address-manager" v-if="addressList!==null&&addressList.length>0">
                <div class="ui-card">
                    <ul v-for="item in addressList" :key="item._id">
                        <li class="name-line clearfix">
                            <a>删除</a>
                            <span class="name" v-text="item.name"></span>
                            <span class="phone" v-text="item.phone"></span>
                        </li>
                        <li class="address-line">
                            <p class="address" v-text="item.address"></p>
                            <p class="detailed" v-text="item.detailed"></p>
                        </li>
                    </ul>
                </div>
            </div>
            <footer class="add">
                <a @click="addType=2">
                    <span>新建地址</span>
                </a>
            </footer>
        </div>
        <div class="add-address" v-show="addType === 2">
            <MiHeader>
                <div @click="addType=1" slot="middle">新增地址</div>
            </MiHeader>
            <div class="add-body">
                <div class="add-list">
                    <ul>
                        <li>
                            <div class="label">收货人:</div>
                            <div class="ui-input">
                                <input type="text" placeholder="真实姓名" maxlength="15" autocomplete="off">
                            </div>
                        </li>
                        <li>
                            <div class="label">手机号码:</div>
                            <div class="ui-input">
                                <input type="text" placeholder="手机号" maxlength="15" autocomplete="off">
                            </div>
                        </li>
                        <li>
                            <div class="label">所在地区:</div>
                            <div class="ui-input">
                                <input type="text" placeholder="省 市 区 街道信息" autocomplete="off">
                            </div>
                        </li>
                        <li>
                            <div class="label">详细地址:</div>
                            <div class="ui-input">
                                <input type="text" placeholder="详细地址" autocomplete="off">
                            </div>
                        </li>
                        <li>
                            <div class="label">设置为默认地址</div>
                            <div class="ui-input">
                                <label class="ui-cell">
                                    <input name="is_default" type="checkbox">
                                </label>
                            </div>

                        </li>
                    </ul>
                </div>
            </div>
        </div>

    </div>

</template>
<script type="text/ecmascript-6">
    import MiHeader from '../components/MiHeader';
    import axios from 'axios';
    export default {
        data(){
            return {
                addressList: null,
                addType:1
            }
        },
        components:{
            MiHeader
        },
        created(){
            //去数据服务器请求信息
            axios.post('http://localhost:3000/address/getAddress')
                .then((result) => {
                    this.addressList = result.data;
                })
                .catch(() => {})
        },
    };
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
    .address-manager
        padding-top:52px
        font-size: .22rem
        color: #3c3c3c
        .ui-card
            border: 1px solid #f6f6f6
            overflow: hidden
            margin: .2rem
            border-radius: .06rem
            background: #fff
            text-align: left
            ul
                padding: .2rem
                padding-top: 0;
                padding-bottom: 0
                position relative
                li
                    border-bottom: 1px solid #f6f6f6
                    display: block
                    font-size: .28rem
                    overflow: hidden
                    background: #fff
                    padding: .2rem .3rem
                    a
                        float right
                        color: #999
                        font-size: 0.22rem
                    .name
                        margin-right: .6rem
                        font-size: .28rem
                        color: #f60
                li.address-line
                    position relative
                    p
                        line-height: .36rem
                        overflow: hidden
                        text-overflow: ellipsis
                        white-space: nowrap
                li.address-line:after
                    content: " "
                    position: absolute
                    width: .14rem
                    height: .14rem
                    right: .14rem
                    top: 50%
                    margin-top: -.07rem
                    border-right: 1px solid #999
                    border-bottom: 1px solid #999
                    -webkit-transform: rotate(-45deg)

    footer
        position: fixed
        bottom: 0
        left: 0
        right: 0
        background: #fff
        z-index: 1
        a
            display: block
            outline: 0
            background: #ff6700
            color: #fff
            text-align: center
            width: 100%
            height: 1rem
            line-height: 1rem
            font-size: .28rem
            span
                font-size: .3rem
                color: #fff
    .add-address
        display flex
        bottom:0
        left:0
        width:100%
        height:100%
        background:white
        font-size: .28rem
        .add-body
            padding-top 52px
            width:100%
            .add-list
                ul
                    position: relative
                    width:100%
                    li
                        border-bottom: 1px solid #f6f6f6
                        font-size: .28rem
                        overflow: hidden
                        background: #fff
                        padding: .2rem .3rem
                        display: box
                        box-align: center
                        width:100%
                        div
                            border: 0
                            box-flex: 1
                            overflow: hidden
                            font-size: .24rem
                            input
                                padding: .18rem .3rem
                                width: 100%
                                -webkit-box-flex: 1
                                box-sizing: border-box
                                font-size: .28rem
                                border: 0
                                text-decoration: none
                                outline: 0
                                vertical-align: middle
                        div.ui-input
                            width:70%
                            display inline-block
                            vertical-align middle
                        div.label
                            display inline-block


</style>
