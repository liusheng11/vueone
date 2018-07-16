import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);
//异步路由
const my_to = () =>  import(/* webpackChunkName: "my_to" */ './components/my_to.vue');
const home = () =>  import(/* webpackChunkName: "home" */ './components/home.vue');
const meidiy = () =>  import(/* webpackChunkName: "meidiy" */ './components/meidiy.vue');
const mei_list = () =>  import(/* webpackChunkName: "mei_list" */ './components/mei_list');
// const user_login = () =>  import(/* webpackChunkName: "user_login" */ './components/user_login.vue');
const user_register = () =>  import(/* webpackChunkName: "user_register" */ './components/user_register.vue');
// const user_index = () =>  import(/* webpackChunkName: "user_index" */ './components/user_index.vue');
const user_info = () =>  import(/* webpackChunkName: "user_info" */ './components/user_info.vue');
const tiediy = () =>  import(/* webpackChunkName: "tiediy" */ './components/tiediy.vue');
const tiediy_detail = () =>  import(/* webpackChunkName: "tiediy_detail" */ './components/tiediy_detail.vue');
const error = () =>  import(/* webpackChunkName: "error" */ './components/error.vue');

// import error from './components/error.vue';

const routes = [
    {path:'/',redirect: '/home'},
    {path:'/home',component:home},
    {path:'/my_to',component:my_to},
    {path:'/tiediy',component:tiediy},
    {path:'/tiediy_detail/:id',component:tiediy_detail},
    {path:'/meidiy',component:meidiy},
    {path:'/mei_list',component:mei_list},
    // {path:'/user_login',component:user_login},
    // {path:'/user_index',component:user_index},
    {path:'/user_register',component:user_register},
    {path:'/user_info',component:user_info},
    {path:'*',component:error}
];

export default new VueRouter({
    routes,
})
