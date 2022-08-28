//
import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);
import Home from "@/views/Home";
import Search from "@/views/Search";
import Login from "@/views/Login";
import Register from "@/views/Register";
// 路由配置
export default new VueRouter({
  routes: [
    {
      path: "/home",
      component: Home,
      meta: { show: true },
    },
    {
      path: "/search/:keyword",
      component: Search,
      meta: { show: true },
      name: "search",
    },

    {
      path: "/register",
      component: Register,
      meta: { show: false },
    },
    {
      path: "/login",
      component: Login,
      meta: { show: false },
    },
    // 重定向
    {
      path: "*",
      redirect: "/home",
    },
  ],
});
let originalPush = VueRouter.prototype.push;
let originalPlace = VueRouter.prototype.replace;

/**
 *
 * @param {*} location  路由跳转的对象
 * @param {*} resolve 箭头函数（成功的回调）
 * @param {*} reject 箭头函数（失败的回调）
 * @returns
 */
VueRouter.prototype.push = function push(location, resolve, reject) {
  if (resolve || reject) {
    // call ||apply call传递参数用, apply 用数组
    return originalPush.call(this, location, resolve, reject);
  }
  return originalPush.call(this, location).cath((err) => err);
};
//重写VueRouter.prototype身上的replace方法
VueRouter.prototype.place = function place(location, resolve, reject) {
  if (resolve || reject)
    return originalPlace.call(this, location, resolve, reject);
  return originalPlace.call(
    this,
    location,
    () => {},
    () => {}
  );
};
