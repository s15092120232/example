import Vue from 'vue';
import Router from 'vue-router';
import Index from '../components/Index';
import List from '../components/List';
import Cart from '../components/Cart';
import User from '../components/User';


Vue.use(Router);

export default new Router({
    routes:[
        {path:'/',redirect:'/Index'},
        {path:'/Index',component:Index},
        {path:'/List',component:List},
        {path:'/Cart',component:Cart},
        {path:'/User',component:User}
    ]
});