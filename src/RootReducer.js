import { combineReducers } from 'redux';
//import reducers
import UserReducer from './reducers/userReducer';
//create and export root reducer
const rootReducer = combineReducers({
  users: UserReducer
});

export default rootReducer;
