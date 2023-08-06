import Mock from "mockjs";
import focusList from "./focus.json";
import floorList from "./floor.json";
import rankList from "./rank.json";

//轮播图后台请求接口
Mock.mock("http://mock.com/adv/focus","get",{
    ok:200,
    msg:"my->get->success",
    data:focusList
})

//今日推荐后台请求接口
Mock.mock("http://mock.com/adv/topToday","get",{
    ok:200,
    data:[
        {
            id:1,
            imgUrl:"https://img11.360buyimg.com/seckillcms/s280x280_jfs/t20260730/107034/32/42198/13024/64c75937F2bbea615/825e055ef26f405d.jpg.avif"
        },
        {
            id:2,
            imgUrl:"https://img11.360buyimg.com/seckillcms/s280x280_jfs/t20260730/104767/39/41256/128229/64c77277Faed7d7e9/e85df350c82b27aa.png.avif"
        },
        {
            id:3,
            imgUrl:"https://img30.360buyimg.com/seckillcms/s280x280_jfs/t1/208125/39/17468/180472/62108b9cE27e4cf91/dc8ee3133bcdf855.jpg.avif"
        },
        {
            id:4,
            imgUrl:"https://img10.360buyimg.com/seckillcms/s280x280_jfs/t1/175349/19/38024/99658/645b5f6fF3a8b7188/f356211c15cb66af.jpg.avif"
        }
    ]
})

//品牌标签后台请求接口
Mock.mock("http://mock.com/adv/brand","get",{
    ok:200,
    data:[
        {
            id:"1",
            imgUrl:"https://img1.baidu.com/it/u=680761168,3465514815&fm=253&fmt=auto&app=138&f=JPEG?w=628&h=500"
        },
        {
            id:"2",
            imgUrl:"https://img1.baidu.com/it/u=1031608824,36587599&fm=253&fmt=auto&app=138&f=JPEG?w=707&h=500"
        },
        {
            id:"3",
            imgUrl:"https://www.wikicleta.com/uploads/allimg/20220325/1-220325104114411.jpg"
        },
        {
            id:"4",
            imgUrl:"https://img5.k68.cn/k68over2008-10/87660/k68_cn_200935101828_01.jpg"
        },
        {
            id:"5",
            imgUrl:"https://img1.baidu.com/it/u=4051724957,265019386&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=375"
        },
        {
            id:"6",
            imgUrl:"/images/brand_11.png"
        },
        {
            id:"7",
            imgUrl:"https://img2.baidu.com/it/u=1163076113,277880311&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500"
        },
        {
            id:"8",
            imgUrl:"https://zhengxin-pub.cdn.bcebos.com/mark/c589da8f3d5d17ed357216a6096e6e1a_fullsize.jpeg"
        },
        {
            id:"9",
            imgUrl:"https://www.guigood.com/Uploads/2021-11-29/61a472ca8d797.jpg"
        },
        {
            id:"10",
            imgUrl:"https://5b0988e595225.cdn.sohucs.com/images/20180904/ca11a84f36594494b3a60caa4732682b.jpeg"
        },
    ]
})

//楼层数据
Mock.mock("http://mock.com/product/floorList","get",{
    ok:200,
    data:floorList
})

//排行榜数据
Mock.mock("http://mock.com/product/rankList","get",{
    ok:200,
    data:rankList
})

//猜你喜欢
Mock.mock("http://mock.com/product/like",)