// 根实例
import Vue from 'vue';
import App from './App';
import router from './router';

import '../common/css/reset2.styl';

var vm = new Vue({
    el:'#app',
    router:router,
    components:{App},
    template:'<App />'
});