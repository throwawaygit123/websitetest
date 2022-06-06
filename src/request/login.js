// import axios from "axios";//为了使用all
import $axios from "@/common/http.js";//请求实例
// import { Message } from "element-ui";
import router from "@/router"
// import { $Message } from "../common/untils";

export const Login = async data => {
    let rst = await $axios.post('/userlogin/login', data)

    if (rst.code == 200) {
        console.log(rst)

        // 2.保存菜单信息// 存入vuex
        // store.commit("user/MENUS", rst.list.menus)
        // store.commit("user/MENU_URL", rst.list.menus_url)
        // store.commit("user/USERNAME", rst.list.username)
        // store.commit("user/SET_LIST", rst.list)
        // 数据持久化  
        // sessionStorage.setItem('userInfo', JSON.stringify(rst.list))
        // 3.权限问题
        // 1.跳转后台首页
        
        router.push('/')
    }
}