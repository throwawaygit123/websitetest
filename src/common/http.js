import axios from "axios";
// import { Message } from "element-ui";
import { $Message } from "./untils";
import {baseURLO,bro_baseURL} from './lapiUrl'

let baseURL = '';
if (process.env.NODE_ENV == "development") {    //开发环境
    baseURL = baseURLO
} else {  //生产环境
    baseURL = bro_baseURL
}

//创建axios实例
const $axios = axios.create({
    baseURL,
    timeout: 5000
});

// 添加请求拦截器
$axios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    // 登录路由  不需要token 其他都需要
    //权限的管理   token的设置  头信息的设置
    // 注意：在哪个地方添加token   将token保存到哪个字段中
    // console.log(config);
    return config;
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 添加响应拦截器
$axios.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    // return response;
    // console.log('接收到后台的数据：',response);
    if (response.data.code != 200) {//服务器请求 ---业务未成功
        $Message("error","请求失败" +response.data.msg)
        // Message({
        //     type: "error",
        //     message: "请求失败" +response.data.msg
        // })        
    }
    return response.data;
}, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
});


export default $axios;