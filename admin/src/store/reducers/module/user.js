import { SET_CURRENT_USER } from '../../types';
import { isEmpty } from '../../../libs/utils';
import { save, get } from '../../../libs/storage'
// import { save, get, remove } from '@/utils/storage'
let initialState = {
  isAuthenticated: false,
  user: {}
}

const userInfo = get('userInfo')

if (userInfo) {
  initialState = { ...initialState, ...userInfo }
}

export default function (state = initialState, action) {
  const { type, payload } = action
  switch (type) {
    case SET_CURRENT_USER:
      const isAuthenticated = !isEmpty(payload)
      const user = payload
      save('userInfo', { isAuthenticated, user })
      return {
        ...state,//对象的扩展运算符（...）用于取出参数对象的所有可遍历属性，拷贝到当前对象之中。---ES6: 对象的扩展运算符
        isAuthenticated: isAuthenticated,
        user: user
      }
    default:
      return state;
  }
}