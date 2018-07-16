// 根实例
import Vue from 'vue';
import App from './App';

import '../common/css/reset2.styl';

var vm = new Vue({
    el:'#app',
    components:{App},
    template:'<App />'
});