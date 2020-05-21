// saga methods
import { all } from 'redux-saga/effects';
// project sagas
import { userSaga } from './sagas/userSaga';
// exporting root saga
export default function* rootSaga () {
  yield all([
    ...userSaga
  ]);
};
