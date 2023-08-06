import Vue from "vue";
import VueRouter from "vue-router";
import { enVueRouter } from "@/utils/enhance";
import Home from "@/pages/Home";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import Search from "@/pages/Search";
//设置为全局组件
// Vue.component("TypeNav", TypeNav);
Vue.use(VueRouter);


enVueRouter("push")
enVueRouter("replace")


const routes = [
    {
        path: "/",
        component: Home,
        meta:{
            //是否使用导航
            isTypeNav: true
        }
    },
    {
        path: "/login",
        component: Login,
        meta:{
            //是否隐藏底部信息
            isHideFooter:true
        }
    },
    {
        path: "/register",
        component: Register,
        meta:{
            //是否隐藏底部信息
            isHideFooter:true
        }
    },
    {
        path: "/search",
        component: Search,
        meta:{
            //是否使用导航
            isTypeNav: true
        }
    }
];

const router = new VueRouter({
    routes,
    mode: "history"
});
export default router;