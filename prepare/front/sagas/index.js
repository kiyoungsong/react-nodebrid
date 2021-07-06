import { all, fork } from 'redux-saga/effects';
import axios from 'axios';
import postSage from './post';
import userSaga from './user';

// function* 은 제너레이터
// 실행시 const genetaor = gen()선언
// genetaor.next()로 실행
axios.defaults.baseURL = 'http://localhost:3060';
// 쿠키도 같이 보내기 위함
axios.defaults.withCredentials = true;

export default function* rootSaga() {
  yield all([
    // fork는 함수를 실행한다는 의미
    // call도 사용하지만 fork는 다름
    // call은 동기, fork는 비동기
    fork(postSage),
    fork(userSaga),
  ]);
}
