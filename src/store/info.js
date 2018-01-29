import Vue from 'vue'

export const SET_STORE = 'SET_STORE' //存入数据
export const DEL_STORE = 'DEL_STORE' //删除数据

export default {
  state : {
    id: '',
    name: '',
    routePath: ['/'],
    oldRoutePath: '/',
    userApps: []
  },
  mutations : {
    [SET_STORE](state, store) {
      //console.log('原数据: ' + JSON.stringify(state))
      //console.log('合并数据: ' + JSON.stringify(store))
      Object.assign(state, store)
    },
    [DEL_STORE](state) {
      //console.log('删除数据: ' + JSON.stringify(state))
      Object
        .keys(state)
        .forEach(k => Vue.delete(state, k))
    }
  },
  actions : {
    [SET_STORE]({
      commit
    }, store) {
      commit(SET_STORE, store)
    },
    [DEL_STORE]({commit}) {
      commit(DEL_STORE)
    }
  }
}