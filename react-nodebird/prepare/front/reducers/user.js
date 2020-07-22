import produce from 'immer';

import { ADD_POST_TO_ME, REMOVE_POST_OF_ME } from './post';

export const initialState = {
    logInLoading: false, // 로그인 시도 중
    logInDone: false,
    logInError: null,

    logOutLoading: false, // 로그아웃 시도 중     얘네가 true이면 로딩창을 띄우기 위함!
    logOutDone: false,
    logOutError: null,

    signUpLoading: false, // 회원가입 시도 중
    signUpDone: false,
    signUpError: null,

    changeNicknameLoading: false, // 닉네임 변경 시도 중
    changeNicknameDone: false,
    changeNicknameError: null,

    me: null,

    signUpData: {},
    loginData: {},
};

export const LOG_IN_REQUEST = 'LOG_IN_REQUEST';
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
export const LOG_IN_FAILURE = 'LOG_IN_FAILURE';

export const LOG_OUT_REQUEST = 'LOG_OUT_REQUEST';
export const LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS';
export const LOG_OUT_FAILURE = 'LOG_OUT_FAILURE';

export const SIGN_UP_REQUEST = 'SIGN_UP_REQUEST';
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
export const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE';

export const CHANGE_NICKNAME_REQUEST = 'CHANGE_NICKNAME_REQUEST';
export const CHANGE_NICKNAME_SUCCESS = 'CHANGE_NICKNAME_SUCCESS';
export const CHANGE_NICKNAME_FAILURE = 'CHANGE_NICKNAME_FAILURE';

export const FOLLOW_REQUEST = 'FOLLOW_REQUEST';
export const FOLLOW_SUCCESS = 'FOLLOW_SUCCESS';
export const FOLLOW_FAILURE = 'FOLLOW_FAILURE';

export const UNFOLLOW_REQUEST = 'UNFOLLOW_REQUEST';
export const UNFOLLOW_SUCCESS = 'UNFOLLOW_SUCCESS';
export const UNFOLLOW_FAILURE = 'UNFOLLOW_FAILURE';

const dummyUser = (data) => ({
    ...data,
    nickname: 'Kate',
    id: 1,
    Posts: [{ id: 1 }],
    Followings: [{ nickname: '이재욱' }, { nickname: 'NodeBird Korea' }, { nickname: '곽승민' }],
    Followers: [{ nickname: '이재욱' }, { nickname: '곽승민' }],
});

// action creator
export const loginRequestAction = (data) => {
    console.log('reducer logIn');
    return {
        type: LOG_IN_REQUEST,
        data,
    };
};
export const logoutRequestAction = () => {
    console.log('reducer logOut');
    return {
        type: LOG_OUT_REQUEST,
    };
};

const reducer = (state = initialState, action) => produce(state, (draft) => {
    switch (action.type) {
        case LOG_IN_REQUEST:
            draft.logInLoading = true;
            draft.logInDone = false;
            draft.logInError = null;
            break;
        case LOG_IN_SUCCESS:
            draft.logInLoading = false;
            draft.me = dummyUser(action.data);
            draft.logInDone = true;
            break;
        case LOG_IN_FAILURE:
            draft.logInLoading = false;
            draft.logInError = action.error;
            break;
        case LOG_OUT_REQUEST:
            draft.logOutLoading = true;
            draft.logOutDone = false;
            draft.logOutError = null;
            break;
        case LOG_OUT_SUCCESS:
            draft.logOutLoading = false;
            draft.me = null;
            draft.logOutDone = true;
            break;
        case LOG_OUT_FAILURE:
            draft.logOutLoading = false;
            draft.logOutError = action.error;
            break;
        case SIGN_UP_REQUEST:
            draft.signUpLoading = true;
            draft.signUpDone = false;
            draft.signUpError = null;
            break;
        case SIGN_UP_SUCCESS:
            draft.signUpLoading = false;
            draft.me = null;
            draft.signUpDone = true;
            break;
        case SIGN_UP_FAILURE:
            draft.signUpLoading = false;
            draft.signUpError = action.error;
            break;
        case CHANGE_NICKNAME_REQUEST:
            draft.changeNicknameLoading = true;
            draft.changeNicknameDone = false;
            draft.changeNicknameError = null;
            break;
        case CHANGE_NICKNAME_SUCCESS:
            draft.changeNicknameLoading = false;
            draft.me = null;
            draft.changeNicknameDone = true;
            break;
        case CHANGE_NICKNAME_FAILURE:
            draft.changeNicknameLoading = false;
            draft.changeNicknameError = action.error;
            break;
        case ADD_POST_TO_ME:
            draft.me.Posts.unshift({ id: action.data });
            break;
        case REMOVE_POST_OF_ME:
            draft.me.Posts = draft.me.Posts.filter((v) => v.id !== action.data);
            break;
        default:
            break;
    }
});

export default reducer;
