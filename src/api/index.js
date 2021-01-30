// 接口地址
// 支付 
const pay = '/pay';
// 购物车
const cart = "/carts";
// 用户
const user = "/user";
// 购物车数量
const count = "/carts/products/sum";
// 产品
const products = "/products";
// 登陆
const login = "/user/login";
// 注册
const register = "/user/register";
// 退出登录
const logout = "/user/logout";
// 收货地址
const AddressList = "/shippings";
// 获取订单号
const orders = "/orders";
export default {
  pay: pay,
  cart: cart,
  user: user,
  count: count,
  products: products,
  login: login,
  register: register,
  logout: logout,
  AddressList: AddressList,
  orders: orders,
}