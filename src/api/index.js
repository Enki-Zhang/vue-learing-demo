// api接口统一管理
import request from "./request";
// 三级联动接口
// /api/product/getBaseCategoryList get 无参数 调用这个接口发送
export const reqCategoryList = () =>
  request({ url: `/product/getBaseCategoryList`, method: "get" });
