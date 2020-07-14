export const initialState = {
    mainPosts: [{
        id: 1,
        User: {
            id: 1,
            nickname: 'minimani'
        },
        content: '노드버드는 내꺼다 후후 #노드버드 #리액트강좌',
        Images: [{
            src: 'https://bookthumb-phinf.pstatic.net/cover/137/995/13799585.jpg?udate=20180726',
          }, {
            src: 'https://gimg.gilbut.co.kr/book/BN001958/rn_view_BN001958.jpg',
          }, {
            src: 'https://gimg.gilbut.co.kr/book/BN001998/rn_view_BN001998.jpg',
        }],
        Comments: [{
            User: {
                nickname: 'nimgnues97'
            },
            content: '오왓 노드 책 개정판이 나왔네요!'
        }, {
            User: {
                nickname: 'Kate'
            },
            content: '노드버드 강좌도 리뉴얼하시나요~?'
        }]
    }],
    imagePaths: [],
    postAdded: false
};

const ADD_POST = 'ADD_POST';

export const addPost = {
    type: ADD_POST
};

const dummyPost = {
    id: 2,
    content: '더미데이터입니다.',
    User: {
        id: 1,
        nickname: '제로초',
    },
    Images: [],
    Comments: [],
};

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_POST:
            return {
                ...state,
                mainPosts: [dummyPost, ...state.mainPosts]  // 새로 추가한 게시글이 가장 위에 위치하도록 dummyPost를 ...state.mainPosts보다 앞에 추가
            }
        default:
            return state;
    }
};

export default reducer;