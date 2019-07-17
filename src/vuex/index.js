import Vue from 'vue'
import Vuex from "vuex"

Vue.use(Vuex);


const state = {
  pictureList: ["111.jpg", "222.jpg", "333.jpg"]
};
const mutations = {
  setPictureList: function (state, status) {
    state.pictrueList = status;//数据有误
  }
};//同步方法
const getters = {};//计算属性
const action = {};//异步方法
export default  new Vuex.Store({
  state,
  mutations,
  getters,
  action
})
