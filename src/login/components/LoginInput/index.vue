<template>
    <input :type="type"
           :placeholder="placeholder"
           @change="$emit('change',$event.target.value)"
           class="login-input"
    >
</template>
<script type="text/ecmascript-6">
    export default {
        props:{
            type:{
                type:String,
                default:'text'
            },
            placeholder:String
        }
    };
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
    .login-input
        width: 100%
        padding: 1rem 0
        line-height: normal
        display: block
        font-size: 1.2rem
        outline:none
        color: #4a4a4a
        border:none
        text-indent :1rem
        background: 0
        border-bottom: 1px solid #d3d3d3
</style>
