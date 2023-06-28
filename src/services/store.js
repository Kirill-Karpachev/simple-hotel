import {
  applyMiddleware,
  createStore
} from "redux";
import createSagaMiddleware from 'redux-saga';
import {
  composeWithDevTools
} from "redux-devtools-extension";
import {
  rootReducer
} from "./reducers";
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware()

const enhancer = composeWithDevTools(applyMiddleware(sagaMiddleware));

export const store = createStore(rootReducer, enhancer);

sagaMiddleware.run(rootSaga);
