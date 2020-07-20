import { all, fork, call, put, takeLatest, delay } from 'redux-saga/effects';
import axios from 'axios';

function logInAPI() {
    return axios.post('/api/login')
}

function* logIn() {
    try {
        //const result = yield call(logInAPI);
        yield delay(1000);
        yield put({
            type: 'LOG_IN_SUCCESS',
            data: result.data 
        });
    } catch (err) {
        yield put({
            type: 'LOG_IN_FAILURE',
            data: err.response.data
        });
    }
}

function* watchLogin() {
    yield takeLatest('LOG_IN_REQUEST', logIn);
}

function* watchLogOut() {
    yield takeLatest('LOG_OUT_REQUEST', logOut);
}

function* watchAddPost() {
    yield takeLatest('ADD_POST_REQUEST', addPost);
}

export default function* rootSaga() {
    yield all([
        fork(watchLogin),
        fork(watchLogOut),
        fork(watchAddPost)
    ])
}


