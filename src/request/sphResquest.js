import axios from "axios";
import nprogress from "nprogress";
import "nprogress/nprogress.css";

const sphRequest = axios.create({
    baseURL:"/api",
    timeout: 5000,    
});

//请求拦截
sphRequest.interceptors.request.use(config=>{
    nprogress.start();
    return config;
});

//响应拦截
sphRequest.interceptors.response.use(response=>{
    nprogress.done();
    return response.data;
},(err)=>{
    nprogress.done();
    alert(err);
    return new Promise(()=>{})
})

export default sphRequest;