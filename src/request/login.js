// import axios from "axios";//为了使用all
import $axios from "@/common/http.js";//请求实例
// import { Message } from "element-ui";
import router from "@/router"
import { $Message } from "../common/untils";
import store from "../store"

export const Login = async (data) => {
    let res = await $axios.post('/userlogin/user', data)
    // console.log(data)
    // console.log(res)
    $Message(res.state ? "success" : "error", res.msg, 3000)
    if (res.state ) {
        // console.log(state)
        // console.log(rst)
        // 2.保存菜单信息保存菜单信息 // 存入vuex
        // store.commit("user/MENUS", rst.list.menus)
        // store.commit("user/MENU_URL", rst.list.menus_url)
        store.commit("set_token", res.token)
        // this.$store.commit('$_setToken', res.token);
        // state.commit("user/SET_LIST", res)
        // 数据持久化
        // console.log(res)
        //console.log(res)
        sessionStorage.setItem('token', JSON.stringify(res.token))
        // 3.权限问题
        // 1.跳转后台首页
        router.push('/index')
    }else{
        return
    }
    // router.push('/index')
    return res
}