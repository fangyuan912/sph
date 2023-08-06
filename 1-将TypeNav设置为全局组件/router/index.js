import Vue from "vue";
import VueRouter from "vue-router";
import { enVueRouter } from "@/utils/enhance";
import Home from "@/pages/Home";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import Search from "@/pages/Search";
import TypeNav from "@/components/TypeNav";
Vue.component("TypeNav", TypeNav);
Vue.use(VueRouter);
//实现加强（未优化）
//1-先将要加强的方法备份
// const nativePush = VueRouter.prototype.push;
// const nativeReplace = VueRouter.prototype.replace;
//2-重写方法：在重写的方法中调用备份方法
// VueRouter.prototype.push = function (location, onComplate, onAbort) {
//     return nativePush.call(this, location, onComplate, () => {})
// }
// VueRouter.prototype.replace = function (location, onComplate, onAbort) {
//     return nativeReplace.call(this, location, onComplate, () => {})
// }

//优化版  定义一个方法enhance
// function enhance(props) {
//     const nativeFn = VueRouter.prototype[props];
//     VueRouter.prototype[props] = function (location, onComplate, onAbort) {
//         return nativeFn.call(this, location, onComplate, ()=>{})
//     }
// }

enVueRouter("push")
enVueRouter("replace")


const routes = [
    {
        path: "/",
        component: Home
    },
    {
        path: "/login",
        component: Login
    },
    {
        path: "/register",
        component: Register
    },
    {
        path: "/search",
        component: Search
    }
];

const router = new VueRouter({
    routes,
    mode: "history"
});
export default router;