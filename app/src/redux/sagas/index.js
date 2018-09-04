import { all, put, takeLatest, call } from 'redux-saga/effects';
import { delay } from 'redux-saga';

import organizationsSagas from './organizations';
import membersSagas from './members';
import userSagas from './user';


const defaultSaga = function*() {
  yield all([
    ...organizationsSagas,
    ...membersSagas,
    ...userSagas
  ]);
};

export default defaultSaga;