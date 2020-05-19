import { GET_POSTS, POST_LOADDING } from '../../types';

const initialState = {
  list: [],
  loading: false
};

export default function (state = initialState, action) {
  switch (action.type) {
    case POST_LOADDING:
      return {
        ...state,
        loading: true
      }
    case GET_POSTS:
        console.log(action)
      return {
        ...state,
        list: action.payload,
        loading: false
      }
    default:
      return state;
  }
}