import Vue from "vue";
import Vuex from "vuex";
import home from "./Home";
import search from "./Search";
Vue.use(Vuex);
// state 仓库存储的地方
const state = { count: 1 };
// mutation 修改state的唯一手段
const mutations = {
  ADD(state) {
    state.count++;
  },
};
// action 处理action 可以书写业务逻辑
const actions = {
  // 不能直接修改state 提交mutation
  add({ commit }) {
    commit("ADD");
  },
};
// getters 计算属性 简化仓库数据 让组件获取仓库的数据更加方便
const getters = {};

// 暴露store类的实例
export default new Vuex.Store({
  //   state,
  //   mutations,
  //   actions,
  //   getters,
  // 模块式开发
  modules: {
    home,
    search,
  },
});
