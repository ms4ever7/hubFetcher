import { takeLatest, call, put } from "redux-saga/effects";

import { _request, arrify } from '../../util/utils';
import Normalizers from '../../normalizers';

export const loadOrganizations = function*(action) {
  try {
    const { name } = action;

    if (!name) {
      return yield put({ type: "LOAD_ORGANIZATIONS_FAILURE", error: 'Organization name cannt be blank!' });
    }

    const requestUrl = `https://api.github.com/search/repositories?q=${name}+in%3Aname&type=Repositories`;
    const data = yield call(_request, requestUrl);

    const array = data.items;
    const organizations = arrify(array).map(Normalizers.organizationNormalizer);

    if (!organizations.length) {
      return yield put({ type: "LOAD_ORGANIZATIONS_FAILURE", error: `There are no organizations found with name ${name}` });
    }

    yield put({ type: "LOAD_ORGANIZATIONS_SUCCESS", organizations });
  
  } catch (error) {
    yield put({ type: "LOAD_ORGANIZATIONS_FAILURE", error });
  }
}

export default [takeLatest('LOAD_ORGANIZATIONS', loadOrganizations)];

