import { takeLatest, call, put } from "redux-saga/effects";

import { _request, arrify } from '../../util/utils';
import Normalizers from '../../normalizers';

export const loadFollowers = function*(action) {
  try {
    const { url: requestUrl } = action;

    const data = yield call(_request, requestUrl);

    const followers = arrify(data).map(Normalizers.memberNormalizer);;

    yield put({ type: "LOAD_USER_FOLLOWERS_SUCCESS", followers });
  
  } catch (error) {
    yield put({ type: "LOAD_USER_FOLLOWERS_FAILURE", error });
  }
}

export const loadFollowing = function*(action) {
  try {
    const { url } = action;
    const appropriateUrl = url.substring(0, url.indexOf('{'));

    const data = yield call(_request, appropriateUrl);

    const following = arrify(data).map(Normalizers.memberNormalizer);;

    yield put({ type: "LOAD_USER_FOLLOWING_SUCCESS", following });
  
  } catch (error) {
    yield put({ type: "LOAD_USER_FOLLOWING_FAILURE", error });
  }
}

export default [
  takeLatest('LOAD_USER_FOLLOWERS', loadFollowers),
  takeLatest('LOAD_USER_FOLLOWING', loadFollowing)
];
