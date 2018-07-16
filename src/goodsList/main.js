// 根实例
import Vue from 'vue';
import App from './App';

import '../common/css/reset3.styl';

var vm = new Vue({
    el:'#app',
    components:{App},
    template:'<App />'
});