import { setToken, getToken, removeToken } from '@/utils/auth'
const state = () => ({
  token: getToken, // 登录token
  info: {} // 用户信息
})

const getters = {
  token (state) {
    return state.token
  }
}

const mutations = {
  tokenChange (state, token) {
    state.token = token
  }
}

const actions = {
  // login by login.vue
  login ({ commit, dispatch }, params) {
    return new Promise((resolve, reject) => {
    //   loginApi(params)
    //   .then(res => {
        setToken('123')
        commit('tokenChange', '123')
        // dispatch('getInfo', { token: res.data.token })
        resolve('123')
    //   })
    })
  },
  // get user info after user logined
  getInfo ({ commit }, params) {
    // return new Promise((resolve, reject) => {
    //   getInfoApi(params)
    //   .then(res => {
    //     commit('infoChange', res.data.info)
    //     resolve(res.data.info)
    //   })
    // })
  },

  // login out the system after user click the loginOut button
  loginOut ({ commit }) {
    removeToken()
    localStorage.removeItem('vuex')
    location.reload()
  }
}

export default {
  namespaced: true,
  state,
  actions,
  getters,
  mutations
}
