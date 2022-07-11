import { HomeSaga } from '../pages/Home/HomeSaga';
import {all} from 'redux-saga/effects';

export function* allSaga() {
    yield all([
        HomeSaga(),
    ])
}