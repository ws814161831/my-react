import axios from 'axios';

//设置token
export const setAuthToken = token => {
  if (token) {
    // headers 每个请求都需要用到的
    axios.defaults.headers.common["Authorization"] = token;//配置axios全局请求头
  } else {
    delete axios.defaults.headers.common["Authorization"];
  }
}


export const isEmpty = value => {
    return value === undefined || value === null ||
      (typeof value === "object" && Object.keys(value).length === 0) ||
      (typeof value === "string" && value.trim().length === 0)
  }