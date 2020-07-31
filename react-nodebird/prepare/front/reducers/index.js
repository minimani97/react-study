import { HYDRATE } from 'next-redux-wrapper';
import { combineReducers } from 'redux';

import user from './user';
import post from './post';

// 이전 상태와 액션을 통해 다음 상태를 만들어내는 것
const rootReducer = (state, action) => {
    switch (action.type) {
        case HYDRATE:
            console.log('HYDRATE', action);
            return action.payload;
        default: {
            const combinedReducer = combineReducers({
                user,
                post,
            });
            return combinedReducer(state, action);
        }
    }
};

export default rootReducer;
