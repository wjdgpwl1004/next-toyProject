import { all, fork, put, takeLatest, call } from 'redux-saga/effects';
import { signupAPI, loginAPI, meAPI, logoutAPI } from "../lib/api/auth";
import {
    SIGN_UP_FAILURE,
    SIGN_UP_REQUEST,
    SIGN_UP_SUCCESS,
    LOG_IN_REQUEST,
    LOG_IN_SUCCESS,
    LOG_IN_FAILURE,
    GET_USER_INFO_REQUEST,
    GET_USER_INFO_SUCCESS,
    GET_USER_INFO_FAILURE,
    LOG_OUT_REQUEST,
    LOG_OUT_SUCCESS,
    LOG_OUT_FAILURE
} from  '../reducers/user';


function* signUp(action: any) {
    try {
        const result = yield call(signupAPI, action.data);
        yield put({
            type: SIGN_UP_SUCCESS,
            data: result.data,
        });
    } catch (err) {
        console.error(err);
        yield put({
            type: SIGN_UP_FAILURE,
            error: err.response.data,
        });
    }
}

function* logIn(action: any) {
    try {
        const result = yield call(loginAPI, action.data);
        yield put({
            type: LOG_IN_SUCCESS,
            data: result.data,
        });
    } catch (err) {
        console.error(err);
        yield put({
            type: LOG_IN_FAILURE,
            error: err.response.data,
        });
    }
}

function* getUserInfo(action: any) {
    try {
        const result = yield call(meAPI);
        yield put({
            type: GET_USER_INFO_SUCCESS,
            data: result.data,
        });
    } catch (err) {
        console.error(err);
        yield put({
            type: GET_USER_INFO_FAILURE,
            error: err.response.data,
        });
    }
}

function* logOut(action: any) {
    try {
        const result = yield call(logoutAPI);
        yield put({
            type: LOG_OUT_SUCCESS,
        });
    } catch (err) {
        console.error(err);
        yield put({
            type: LOG_OUT_FAILURE,
            error: err.response.data,
        });
    }
}

function* watchSignUp() {
    yield takeLatest(SIGN_UP_REQUEST, signUp);
}

function* watchLogin() {
    yield takeLatest(LOG_IN_REQUEST, logIn);
}

function* watchgetUserInfo() {
    yield takeLatest(GET_USER_INFO_REQUEST, getUserInfo);
}

function* watchlogout() {
    yield takeLatest(LOG_OUT_REQUEST, logOut);
}

export default function* userSaga() {
    yield all([
        fork(watchSignUp),
        fork(watchLogin),
        fork(watchgetUserInfo),
        fork(watchlogout),
    ]);
}