import 'regenerator-runtime/runtime';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';


import reducer from './reducer';
import rootSaga from './saga';

const sagaMiddleware = createSagaMiddleware();

const enhancer = applyMiddleware(sagaMiddleware);

const store = createStore(reducer, enhancer);
if (process.env && process.env.NODE_ENV !== 'production') window.store = store;

sagaMiddleware.run(rootSaga);



export default store;