import Vue from "vue";
import Vuex from "vuex";
import product from "@/store/product.js";
import adv from "@/store/adv.js";
Vue.use(Vuex);

const store = new Vuex.Store({
    modules:{
        product,
        adv,
    }
});
export default store;