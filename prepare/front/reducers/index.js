// 리덕스 서버사이드 렌더링을 위해서 HYDRATE를 사용
import { HYDRATE } from "next-redux-wrapper"
import { combineReducers } from "redux";
import user from './user';
import post from './post';


const initialState = {
    user:{
        
    },
    post:{
        mainPosts: [],
    }
}

//async action creator (redux-saga)




// (이전상태, 액션) => 다음상태
const rootReducer = combineReducers({
    // HYDRATE를 위해서 인덱스 리듀서를 추가해주는 것임
    index: (state = {}, action) => {
        switch(action.type){
            case 'HYDRATE':
                return {
                    ...state, ...action.payload,
                }
            
            default:
                return state;
        }
    },
    user,
    post,
});

export default rootReducer;