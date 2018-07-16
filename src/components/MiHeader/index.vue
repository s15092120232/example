<template>
    <div class="root">
        <header>
            <div class="header-left">
                <a class="header-item"><i></i></a>
            </div>
            <div class="header-middle">
                <slot name="middle"></slot>
            </div>
            <div class="header-right">
                <a class="header-item"><i></i></a>
            </div>
        </header>
    </div>
</template>
<script type="text/ecmascript-6">
    export default {};
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
    header
        position: fixed
        z-index: 9999
        top: 0
        left: 0
        right: 0
        background: #f2f2f2
        display: flex
        justify-content: space-between
        .header-left
            display: flex
            align-items: center
            height: 50px
            color: #666
            padding: 0
            .header-item
                display: block
                width: .6rem
                margin: 0 .2rem
                i
                    background:url('../images/left.png')
                    background-repeat no-repeat
                    background-size 100%
                    width: .5rem
                    height: .5rem
                    display: block
        .header-middle
            flex: 1
            width:100%
            text-align center
            line-height.6rem
            color: #666
            font-size: .3rem
        .header-right
            display: flex
            line-height: .5rem
            a
                display: block
                width: .6rem
                margin: 0 .2rem

                i
                    background:url('../images/find.png')
                    background-repeat no-repeat
                    background-size 100%
                    display: block
                    width: .6rem
                    height: .6rem

</style>
