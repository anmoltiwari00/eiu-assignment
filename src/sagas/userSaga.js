// saga imports
import { put, takeEvery, call } from 'redux-saga/effects';
//action imports
import * as userActions from '../actions/userAction';
//api service imports
import service from '../services/userService';
//saga generator function for fetching all users
export function* fetchAllUsers() {
  try {
    const userData = yield call(service.fetchUsers);
    if(userData.status === 200) {
      yield put(userActions.fetchUsersSuccess(userData.data));
    } else {
      console.log('Error has occured')
    }
  } catch (err) {
    console.log(err);
  }
}
//for updating user
export function* updateUser(data) {
  console.log(data.payload);
  try {
    yield put(userActions.updateUserSuccess(data.payload));
  } catch (err) {
    console.log(err);
  }
}

export const userSaga = [
  takeEvery('FETCH_ALL_USERS', fetchAllUsers),
  takeEvery('UPDATE_USER', updateUser)
];
