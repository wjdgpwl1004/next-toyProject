import { all, fork, put, takeLatest, call } from 'redux-saga/effects';
import axios from 'axios';
import { signupAPI } from "../lib/api/auth";
import {
    SIGN_UP_FAILURE,
    SIGN_UP_REQUEST,
    SIGN_UP_SUCCESS,
} from  '../reducers/user';


function* signUp(action: any) {
    try {
        const result = yield call(signupAPI, action.data);
        yield put({
            type: SIGN_UP_SUCCESS,
        });
    } catch (err) {
        console.error(err);
        yield put({
            type: SIGN_UP_FAILURE,
            error: err.response.data,
        });
    }
}

function* watchSignUp() {
    yield takeLatest(SIGN_UP_REQUEST, signUp);
}

export default function* userSaga() {
    yield all([
        fork(watchSignUp),
    ]);
}