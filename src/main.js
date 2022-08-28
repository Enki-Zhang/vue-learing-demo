import Vue from "vue";
import App from "./App.vue";
import router from "@/router";
import TypeNav from "@/components/TypeNav";
import Store from "./store";
Vue.config.productionTip = false;
// 注册全局主键1111
/***
 * 名称和 组件
 */
Vue.component(TypeNav.name, TypeNav);

new Vue({
  render: (h) => h(App),
  router,
  // 组件实例多了$store属性
  Store,
}).$mount("#app");
