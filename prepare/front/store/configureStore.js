import { createWrapper } from 'next-redux-wrapper';
import { applyMiddleware, createStore, compose } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import reducer from '../reducers';
import rootSaga from '../sagas';

const loggerMiddleware = ({ dispatch, getState }) => (next) => (action) => {
  next(action);
};

const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const middleweares = [sagaMiddleware, loggerMiddleware];
  const enhancer = process.env.NODE_ENV === 'production'
    ? compose(applyMiddleware(...middleweares))
    : composeWithDevTools(applyMiddleware(...middleweares));
  const stroe = createStore(reducer, enhancer);
  stroe.sagaTask = sagaMiddleware.run(rootSaga);
  return stroe;
};

// Debus를 true하면 좀더 자세하게 찍어줌
const wrapper = createWrapper(configureStore, { debug: process.env.NODE_ENV === 'development' });

export default wrapper;
