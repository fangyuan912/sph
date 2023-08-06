//提供广告相关接口
import { mockRequest } from "@/request";

//获取今天推荐的图片列表
export const getTopTodayList = ()=>mockRequest("adv/topToday");
//获取首页中轮播图的图片列表
export const getFocusList = ()=>mockRequest("/adv/focus");

//获取底部商标的图片列表
export const getBrandsList = ()=>mockRequest("/adv/brand");