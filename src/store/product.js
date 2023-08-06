import { getBaseCategoryList,getFloorList,getRankList,postProductList } from "@/api/product";

const state = {
    //首页分类列表
    categoryList:[],
    //楼层数据信息
    floorList:[],
    rankList:[],
    //搜索商品
    searchProductResult:[],
}

const mutations = {
    //更新首页分类列表
    UP_CATEGORY_LIST(state,categoryList){
        state.categoryList = categoryList;
    },
    //更新楼层数据
    SAVE_FLOOR_LIST(state,floorList){
        state.floorList = floorList;
    },
    SAVE_RANK_LIST(state,rankList){
        state.rankList = rankList;
    },
    //更新搜索商品数据
    SAVE_SEARCH_PRODUCT_RESULT(state,result){
        state.searchProductResult = result;
    }
}

const actions = {
    async getBaseCategoryListAsync({commit},num=1){
        const {data} = await getBaseCategoryList();
        commit("UP_CATEGORY_LIST",data.splice(0,num));
    },
    async getFloorListAsync({commit}){
        const {data} = await getFloorList();
        commit("SAVE_FLOOR_LIST",data);
        console.log(data);
    },
    async getRankListAsync({commit}){
        const {data} = await getRankList();
        commit("SAVE_RANK_LIST",data);
    },
    //搜索商品，发送异步请求，传递数据
    async searchProductAsync({commit},body){
        const {data} = await postProductList(body);
        commit("SAVE_SEARCH_PRODUCT_RESULT",data);
    }
}

export default {
    namespaced:true,
    state,
    mutations,
    actions
}