import { createStore } from 'vuex'

export default createStore({
  state: {
    onLogUser:'',
  },
  mutations: {
    // 更新已经登陆的用户
    saveOnLogUser(state,onLogUser){
      state.onLogUser = onLogUser;
  },
  },
  actions: {
  },
  modules: {
  }
})
