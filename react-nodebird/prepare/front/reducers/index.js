import { HYDRATE } from 'next-redux-wrapper';

export const initialState = {
    user: {
        isLoggedIn: false,
        user: null,
        signUpData: {},
        loginData: {}
    },
    post: {
        mainPosts: []
    }
};

// action creator
export const loginAction = (data) => {
    return {
        type: 'LOG_IN',
        data
    }
};
export const logoutAction = (data) => {
    return {
        type: 'LOG_OUT',
    }
};

// 이전 상태와 액션을 통해 다음 상태를 만들어내는 것
const rootReducer = (state, action) => {
    switch(action.type) {
        case HYDRATE: 
            return { ...state, ...action.payload };
        case 'LOG_IN':
            return {
                ...state,
                user: {
                    ...state.user,
                    isLoggedIn: true,
                    user: action.data
                }
            };
        case 'LOG_OUT':
            return {
                ...state,
                user: {
                    ...state.user,
                    isLoggedIn: false,
                    user: null
                }
            };
        default:
            return state;
    }
};

export default rootReducer;