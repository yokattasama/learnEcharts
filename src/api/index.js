import axios from 'axios';

// 创建 axios 实例
const service = axios.create({
  // baseURL: process.env.VUE_APP_API, // 基础url,如果是多环境配置这样写，也可以像下面一行的写死。
　　// baseURL: 'http://168.192.0.123',
  timeout: 6000 // 请求超时时间
});
 
// 错误处理函数
// const err = (error) => {
//   if (error.response) {
//     const data = error.response.data
    
//   }
//   return Promise.reject(error)
// }

// request interceptor(请求拦截器)
// service.interceptors.request.use(config => {
//   // const token = localStorage.getItem('token')
//   // if (token) {
//   //   config.headers['token'] = token // 让每个请求携带自定义 token 请根据实际情况自行修改
//   // }
//   return config
// }, err)

// response interceptor（接收拦截器）
// service.interceptors.response.use((response) => {
//   const res = response.data
//   // if (res.code !== 0&&res.code!==200) { 
//   //   // 401:未登录;
//   //   if (res.code === 401||res.code === 403||res.code===999) {
//   //   }
//   //   return Promise.reject('error')
//   // } else {
//   //   return res
//   // }
// }, err)

export default service