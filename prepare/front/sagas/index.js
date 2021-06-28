import { all, fork } from 'redux-saga/effects';
import postSage from './post';
import userSaga from './user';

// function* 은 제너레이터
// 실행시 const genetaor = gen()선언
// genetaor.next()로 실행
export default function* rootSaga() {
  yield all([
    // fork는 함수를 실행한다는 의미
    // call도 사용하지만 fork는 다름
    // call은 동기, fork는 비동기
    fork(postSage),
    fork(userSaga),
  ]);
}
