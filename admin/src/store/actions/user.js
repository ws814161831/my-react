import {
  SET_CURRENT_USER,
  GET_ERRORS
} from '../types.js';

import axios from 'axios';
import jwt_decode from 'jwt-decode';
import { setAuthToken } from '../../libs/utils';
import apiUrl from '../../config/apiUrl'

/**
 * action type
 */


export const setCurrentUser = decoded => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded
  }
}


/**
 * 
阮一峰：
			异步操作至少要送出两个 Action：用户触发第一个 Action，这个跟同步操作一样，没有问题；如何才能在操作结束时，系统自动送出第二个 Action 呢？
			奥妙就在 Action Creator 之中：写出一个返回函数的 Action Creator，然后使用redux-thunk中间件改造store.dispatch
 */
export const registerUser = (userData, history) => dispatch => {
  // 请求
  axios.post(apiUrl+"/api/users/register", userData)
    .then(res => history.push("/login"))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    )
}




// 登录
export const loginUser = (userData, history) => dispatch => {
  axios.post(apiUrl+"/api/users/login", userData)
    .then(res => {
      const { token } = res.data;
      // console.log(token);
      // 存储token到LS
      localStorage.setItem("jwtToken", token);
      // 设置axios的headers token
      setAuthToken(token);

      // 解析token
      const decoded = jwt_decode(token);
      // console.log(decoded);
      dispatch(setCurrentUser(decoded));
      history.push("/dashboard")
      
    })
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    )
}



// logout
export const logoutUser = () => dispatch => {
  // 删除ls
  localStorage.removeItem("jwtToken");
  // 干掉请求头
  setAuthToken(false);
  // 链接reducer
  dispatch(setCurrentUser({}));
}