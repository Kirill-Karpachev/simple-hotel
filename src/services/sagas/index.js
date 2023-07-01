import {
  call,
  put,
  takeEvery
} from 'redux-saga/effects';
import {
  getHotel
} from '../../utils/hotel-api';
import {
  GET_HOTEL_FAILED,
  GET_HOTEL_REQUEST,
  GET_HOTEL_SUCCESS
} from '../actions/hotel';

function* getHotelsWorker({
  payload: form
}) {
  try {
    const data = yield call(getHotel, form.location, form.checkIn, form.checkOut);
    yield put({
      type: GET_HOTEL_SUCCESS,
      payload: {
        data: data.map(hotel => ({
          ...hotel,
          favorite: false
        })),
        form
      }
    });
  } catch {
    yield put({
      type: GET_HOTEL_FAILED
    });
  }
}

function* getHotelsWatcher() {
  yield takeEvery(GET_HOTEL_REQUEST, getHotelsWorker);
}

export default function* rootSaga() {
  yield getHotelsWatcher();
}
