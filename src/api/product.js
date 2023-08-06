import { sphRequest,mockRequest } from "@/request";

//首页三级分类get /api/product/getBaseCategoryList
export const getBaseCategoryList = ()=>sphRequest("/product/getBaseCategoryList");

export const getFloorList = ()=>mockRequest("/product/floorList");

//排行榜
export const getRankList = ()=>mockRequest("/product/rankList");

//搜索商品
export const postProductList = (body)=>sphRequest.post("/list",body);