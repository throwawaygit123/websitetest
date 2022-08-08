import ax from "axios"
// import {$Message} from "./untils"
 import store from "@/store"
import router from "../router";

let baseURL = '';
if (process.env.NODE_ENV == "development") {    //开发环境
    baseURL = "https://java.quancardio.com/api/"
} else {  //生产环境
    baseURL = "http:xxx.com/api"
}
// console.log(process.env.NODE_ENV)

// console.log(process);
// let baseURL="";
// if(process.env.NODE_ENV)
//创建axios实例
const axios =ax.create({
    baseURL,
    timeout: 5000
});

// 添加请求拦截器
axios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    //权限的管理   token的设置  头信息的设置
    config.headers.authorization=store.getters.token
   //console.log(store.getters.token)
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});
// 添加响应拦截器
axios.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    // return response;
    // console.log(response);
    // if (response.status!=200) {
    //     $Message("error","请求失败"+response.data.msg)
    // }
    // console.log(response);
    if(response.data.code !== 200){
        router.push("/login")
    }
    return response.data;
}, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
});


export default axios;