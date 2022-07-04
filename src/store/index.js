import Vue from 'vue'
import Vuex from 'vuex'
let token= localStorage.getItem('token')
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token,
    setlist: ""
  },
  getters: {
    token:(state)=>{
      return state.token
    },
    isLogin: (state) => {
      let d = Object.keys(state.setlist)
      return d.length != 0
    },
  },
  mutations: {
    set_token(state, token) {
      
      state.token = token
      // console.log(token,"22",state)
      localStorage.token = token
    },
    set_list(state, setlist) {
      state.setlist = setlist
    }
  },
  actions: {
  },
  modules: {
  }
})
