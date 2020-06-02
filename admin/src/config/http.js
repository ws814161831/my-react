import axios from 'axios';
import React from 'react';
import ReactDOM from 'react-dom';
import { message, Spin } from 'antd';
// import { remove } from '../libs/storage'
import { logoutUser } from '../store/actions/user';
import store from '../store';
import apiUrl from "@/config/apiUrl";

/**
 * 这里定义的startLoading、endLoading是接口加载中的显示
 */

// 当前正在请求的数量
let requestCount = 0

function startLoading() { 
    if (requestCount === 0) {
        var dom = document.createElement('div')
        dom.setAttribute('id', 'loading')
        document.body.appendChild(dom)
        ReactDOM.render(<Spin tip="加载中..." size="large"/>, dom)
    }
    requestCount++
}
function endLoading() {    
    requestCount--
    if (requestCount === 0) {
        document.body.removeChild(document.getElementById('loading'))
    }
}

let timer

// 封装axiox接口ip地址
const service = axios.create({
    baseURL: apiUrl,
    // withCredentials: true, // send cookies when cross-domain requests
    timeout: 10000 // request timeout
  })


// 请求拦截  设置统一header
service.interceptors.request.use(config => {
    // 加载
    // startLoading()
    if (localStorage.jwtToken)
        config.headers.Authorization = localStorage.jwtToken
    return config
}, error => {
    return Promise.reject(error)
})

// 响应拦截  401 token过期处理
service.interceptors.response.use(response => {
    // endLoading()
    return response
}, 
err => {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    clearTimeout(timer)
    timer = setTimeout(() => {
      if (err.response) {
        const { status, data } = err.response
        switch (status) {
          case 401:
            message.error((data && data.message) || '登录信息过期或未授权，请重新登录！')
            // 清除token
            store.dispatch(logoutUser());
            // 页面跳转
            window.location.href = '/login'
            break
          default:
            message.error(data.message || `连接错误 ${status}！`)
            break
        }
      } else {
        message.error(err.message)//联网失败会报："Network Error
      }
    }, 200) // 200 毫秒内重复报错则只提示一次！

    return Promise.reject(err)
}
// error => {
//     // 错误提醒
//     // endLoading()
//     const { status } = error.response
//     if (status === 401) {
//         message.warning('token值无效，请重新登录')
//         // 清除token
//         store.dispatch(logoutUser());
//         // remove('jwtToken')
//         // remove('userInfo')
//         // 页面跳转
//         window.location.href = '/login'
//     }

//     return Promise.reject(error)
// }
)

export default service