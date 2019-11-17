import {put, takeEvery} from 'redux-saga/effects';
import axios from '../../axios-api';
import {
  FETCH_CITY_LIST_REQUEST, FETCH_POSITION_LIST_REQUEST,
  fetchCityListFailure,
  fetchCityListSuccess, fetchPositionListFailure,
  fetchPositionListSuccess, GET_SEARCH_LIST_REQUEST, getSearchListFailure, getSearchListSuccess
} from "../actions/maniaActions";


function* fetchCity() {
  try {
    const response = yield axios.get("/v1/city.getList");
    yield put(fetchCityListSuccess(response.data.response));
  } catch (e) {
    yield put(fetchCityListFailure(e.response.data.error))
  }
}

function* fetchPosition() {
  try {
    const response = yield axios.get("/v1/position.getList");
    yield put(fetchPositionListSuccess(response.data.response));
  } catch (e) {
    yield put(fetchPositionListFailure(e.response.data.error))
  }
}

function* getSearchData({params}) {
  try {
    const response = yield axios.post("/v1/search.getList", params);
    yield put(getSearchListSuccess(response.data.response));
  } catch (e) {
    yield put(getSearchListFailure(e.response.data.error))
  }
}

export default [
    takeEvery(GET_SEARCH_LIST_REQUEST, getSearchData),
    takeEvery(FETCH_POSITION_LIST_REQUEST, fetchPosition),
    takeEvery(FETCH_CITY_LIST_REQUEST, fetchCity),
];
