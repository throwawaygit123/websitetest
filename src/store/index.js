import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token:'',
    setlist:""
  },
  getters: {
    isLogin: (state) => {
      let d = Object.keys(state.setlist)
      return d.length != 0
  },
  },
  mutations: {
    set_token(state, token) {
      state.token = token
      sessionStorage.token = token
    },
    set_list(state,setlist){
      state.setlist=setlist
    }
  },
  actions: {
  },
  modules: {
  }
})
