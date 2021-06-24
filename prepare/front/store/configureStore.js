import { createWrapper } from "next-redux-wrapper";
import {applyMiddleware, createStore} from 'redux';
import { composeWithDevTools } from "redux-devtools-extension";
import reducer from '../reducers'


const configureStore = () => {
    const middleweares = [];
    const enhancer = process.env.NODE_ENV === 'production' 
    ? compose(applyMiddleware(...middleweares)) 
    : composeWithDevTools(applyMiddleware(...middleweares)) 
    const stroe = createStore(reducer, enhancer);
    return stroe;
};

// Debus를 true하면 좀더 자세하게 찍어줌
const wrapper = createWrapper(configureStore, {debug: process.env.NODE_ENV == 'development',});

export default wrapper;