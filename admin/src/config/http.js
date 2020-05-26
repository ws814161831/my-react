import axios from 'axios';
import React from 'react';
import ReactDOM from 'react-dom';
import { message, Spin } from 'antd';
import '../style/css/public.css'

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

// 请求拦截  设置统一header
axios.interceptors.request.use(config => {
    // 加载
    startLoading()
    if (localStorage.jwtToken)
        config.headers.Authorization = localStorage.jwtToken
    return config
}, error => {
    return Promise.reject(error)
})

// 响应拦截  401 token过期处理
axios.interceptors.response.use(response => {
    endLoading()
    return response
}, error => {
    // 错误提醒
    endLoading()
    const { status } = error.response
    if (status === 401) {
        message.warning('token值无效，请重新登录')
        // 清除token
        localStorage.removeItem('jwtToken')

        // 页面跳转
        window.location.href = '/login'
    }

    return Promise.reject(error)
})

export default axios