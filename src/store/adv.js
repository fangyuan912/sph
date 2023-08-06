import { getFocusList,getBrandsList, getTopTodayList } from "@/api/adv";

const state = {
    //首页轮播图信息
    focusList:[],
    //底部商标
    brandsList:[],
    //今日推荐
    topTodayList:[],
};
const mutations = {
    SAVE_FOCUS_LIST(state,focusList){
        state.focusList = focusList;
    },
    SAVE_BRANDS_LIST(state,brandsList){
        state.brandsList = brandsList;
    },
    SAVE_TOP_TODAY_LIST(state,topTodayList){
        state.topTodayList = topTodayList;
    }
};

const actions = {
    async getFocusListAsync({commit}){
        const {data} = await getFocusList();
        commit("SAVE_FOCUS_LIST",data);
    },
    async getBrandsListAsync({commit}){
        const {data} = await getBrandsList();
        commit("SAVE_BRANDS_LIST",data);
        console.log(data);
    },
    async getTopTodayListAsync({commit}){
        const {data} = await getTopTodayList();
        commit("SAVE_TOP_TODAY_LIST",data);
        // console.log(data);
    }
}

export default {
    namespaced:true,
    state,
    mutations,
    actions
}