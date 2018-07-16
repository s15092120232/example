<template>
    <button :type="type" v-text="text" @click="handler" class="btn"></button>
</template>
<script type="text/ecmascript-6">
    export default {
        props:{
            text:{
                type:String,
                default:'确定'
            },
            type:{
                type:String,
                default:'button'
            },
            handler:Function
        }
    };
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
    .btn
        width: 100%
        padding: .7rem 0
        display: block
        margin-bottom: 14px
        text-align: center
        font-size: 1.2rem
        color: #fff
        cursor: pointer
        border-radius: 6px
        overflow: hidden
        background-color: #ff6700
        border:none
        margin-top:1em
</style>
