import {applyMiddleware, createStore} from 'redux';

import GlobalReducer from './Reducer';
import { allSaga } from './saga';
import logger from 'redux-logger';
import reduxSaga from 'redux-saga';

const sagaMiddleware = reduxSaga();
const allMiddleware = applyMiddleware(logger, sagaMiddleware);

export const store = createStore(GlobalReducer, allMiddleware);

sagaMiddleware.run(allSaga);
