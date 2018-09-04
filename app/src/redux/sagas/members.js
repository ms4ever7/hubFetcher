import { takeLatest, call, put } from "redux-saga/effects";

import { _request, arrify } from '../../util/utils';
import Normalizers from '../../normalizers';

export const loadMembers = function*(action) {
  try {
    const { url: requestUrl } = action;

    const data = yield call(_request, requestUrl);

    const members = arrify(data).map(Normalizers.memberNormalizer);;

    yield put({ type: "LOAD_MEMBERS_SUCCESS", members });
  
  } catch (error) {
    yield put({ type: "LOAD_MEMBERS_FAILURE", error });
  }
}

export default [takeLatest('LOAD_MEMBERS', loadMembers)];
