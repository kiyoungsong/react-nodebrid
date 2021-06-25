export const initialState = {
    mainPosts: [{
        id: 1,
        User:{
            id: 1,
            nickname: '제로초',
        },
        content: '첫 번째 게시글 #해시태그 #익스프레스',
        Images:[{
            src: 'https://bookthumb-phinf.pstatic.net/cover/137/995/13799585.jpg?udate=20180726',
        }, {
            src: 'https://gimg.gilbut.co.kr/book/BN001958/rn_view_BN001958.jpg',
        }, {
            src: 'https://gimg.gilbut.co.kr/book/BN001998/rn_view/BN001998.jpg',
        }],
        Comments: [{
            User: {
                nickname: 'nero',
            },
            content: '우와 댓글1번'
        },{
            User: {
                nickname: 'ky.song',
            },
            content: '사고싶어어요용여영영ㅇ'
        }]
    }],
    imagePaths: [],
    postAdded: false,
}

const ADD_POST = 'ADD_POST';
export const addPost = {
    type: ADD_POST,
}

const dummyPost = {
    id: 2,
    content: '더미데이터입니다.',
    User:{
        id: 1,
        nickname: '제로초',
    },
    Images: [],
    Comments: [],
} 

const reducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_POST:
            console.log("check");
            return {
                ...state,
                // 앞에다가 추가해줘야 맨 위에서부터 추가됨
                mainPosts: [dummyPost, ...state.mainPosts],
                postAdded: true,
            }
        default:
            return state;
    }
}

export default reducer;

