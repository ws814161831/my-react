import {
    GET_POSTS,
    POST_LOADDING
  } from '../types.js';
  
  import http from '../../config/http';

// 加载动画
export const setPostLoading = () => {
    return {
      type: POST_LOADDING
    }
  }


// 获取评论
export const getPosts = () => dispatch => {
    dispatch(setPostLoading);
    http.get("/api/profile")
      .then(res =>
        {
            console.log(res)
            dispatch({
              type: GET_POSTS,
              payload: res.data
            })
        }
      )
      .catch(err =>
        dispatch({
          type: GET_POSTS,
          payload: null
        })
      )
  }