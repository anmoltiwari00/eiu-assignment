//action types import
import actionTypes from '../ActionTypes';
//default null state
const defaultState = null;
//user reducer saves state pertaining to users in the redux store
const reducer =  (state = defaultState, action) => {
 switch (action.type) {
   case actionTypes.FETCH_ALL_USERS_SUCCESS:
    return {
     ...state,
     users: action.payload
    }
   case actionTypes.UPDATE_USER_SUCCESS:
    return {
     ...state,
     users: action.payload
    }
   default:
    return state
 }
}

export default reducer;
