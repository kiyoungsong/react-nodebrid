import { call } from '@redux-saga/core/effects';
import { all, fork, takeEvery, put, takeLatest } from 'react-redux/effects';
import axios from 'axios';

// 별붙이면 안됨
function logInAPI(data){
    return axios.post('/api/login', data);
}

function* logIn(action){
    try{
        yield put({
            type: 'LOG_IN_REQUEST',
        });
        // 매개변수를 넘길때 밑의 형태로 넘겨야함
        const result = yield call(logInAPI, action.data);
        yield put({
            type: 'LOG_IN_SUCCESS',
            data: result.data
        });
    }catch(err){
        yield put({
            type: 'LOG_IN_FAILURE',
            data: err.response.data
        })
    }
}

function logOutAPI(){
    return axios.post('/api/logout');
}

function* logOut(){
    try{
        yield put({
            type: 'LOG_OUT_REQUEST',
        });
        const result = yield call(logOutAPI);
        yield put({
            type: 'LOG_OUT_SUCCESS',
            data: result.data
        });
    }catch(err){
        yield put({
            type: 'LOG_OUT_FAILURE',
            data: err.response.data
        })
    }
}

function postAddAPI(data){
    return axios.post('/api/post', data);
}

function* postAdd(action){
    try{
        yield put({
            type: 'POST_ADD_REQUEST',
        });
        const result = yield call(postAddAPI, action.data);
        yield put({
            type: 'POST_ADD_SUCCESS',
            data: result.data
        });
    }catch(err){
        yield put({
            type: 'POST_ADD_FAILURE',
            data: err.response.data
        })
    }
}

function* watchLogin(){
    // take는 일회용임
    yield takeEvery('LOG_IN_REQUEST', logIn);
}

function* watchLogOut(){
    yield takeEvery('LOG_OUT_REQUEST', logOut);
}

function* watchAddPost(){
    yield takeEvery('ADD_POST_REQUEST', postAdd);
}

// function* 은 제너레이터
// 실행시 const genetaor = gen()선언
// genetaor.next()로 실행
export default function* rootSaga(){
    yield all([
        // fork는 함수를 실행한다는 의미
        // call도 사용하지만 fork는 다름
        // call은 동기, fork는 비동기
        fork(watchLogin),
        fork(watchLogOut),
        fork(watchAddPost),
    ]);
}
