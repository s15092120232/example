import Vue from 'vue';
import Router from 'vue-router';
import MessageLogin from '../components/MessageLogin';
import PasswordLogin from '../components/PasswordLogin';


Vue.use(Router);

export default new Router({
    routes:[
        {path:'/',redirect:'/message'},
        {path:'/message',component:MessageLogin},
        {path:'/password',component:PasswordLogin}
    ]
});