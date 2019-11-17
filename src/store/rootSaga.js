import {all} from 'redux-saga/effects';
import maniaSagas from './sagas/mania';

export default function* rootSaga() {
  yield all([
    ...maniaSagas,
  ]);
};
