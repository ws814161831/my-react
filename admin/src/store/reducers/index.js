/** combineReducers
 *  将多个reducer合成一个大的 Reducer
 */
import { combineReducers } from 'redux';
import user from './module/user';
import error from './module/error';



export default combineReducers({
  user,
  error
})