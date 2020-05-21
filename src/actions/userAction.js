import types from '../ActionTypes';

export const fetchUsers = data => ({
  type: types.FETCH_ALL_USERS
})

export const fetchUsersSuccess = data => ({
  type: types.FETCH_ALL_USERS_SUCCESS,
  payload: data
})

export const updateUser = data => ({
  type: types.UPDATE_USER,
  payload: data
})

export const updateUserSuccess = data => ({
  type: types.UPDATE_USER_SUCCESS,
  payload: data
})
