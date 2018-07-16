<template>
    <div class="root">
        <div class="content">
            <router-view></router-view>
        </div>
        <MiFooter></MiFooter>
    </div>
</template>
<script type="text/ecmascript-6">
    import MiHeader from '../components/MiHeader';
    import MiFooter from '../components/MiFooter';
    export default {
        components:{
            MiFooter,
            MiHeader
        }
    };
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
    .root
        display inline-block
        .content
            overflow auto
            position:fixed
            width: 100%
            top:0
            bottom:52px
            left:0
</style>
