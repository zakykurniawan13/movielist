import {put, select, takeLatest} from 'redux-saga/effects';

import { apiGetMovieTrending } from '../../config/api';

//Get All Contact Saga
export function* homeSaga(action) {
  try {
    const res = yield apiGetMovieTrending();
    console.log(res, '1');
    if (res.status < 400) {
      console.log('2');
      yield put({type: 'MOVIEREDUCER', payload: res.data});
    }
  } catch (e) {
      console.error();
  }
}
export function* HomeSaga() {
  yield takeLatest('GET_HOME', homeSaga);
}