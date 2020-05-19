import { SET_CURRENT_USER } from '../../types';
import { isEmpty } from '../../../libs/utils';
const initialState = {
  isAuthenticated: false,
  user: {}
}

export default function (state = initialState, action) {

  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,//对象的扩展运算符（...）用于取出参数对象的所有可遍历属性，拷贝到当前对象之中。---ES6: 对象的扩展运算符
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload
      }
    default:
      return state;
  }
}