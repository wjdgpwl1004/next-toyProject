import { UserState } from "../types/reduxState";
import produce from 'immer';

//* 초기 상태
const initialState: UserState = {
    id: 0,
    email: "",
    lastname: "",
    firstname: "",
    birthday: "",
    isLogged: false,
    profileImage: "",
    signUpError: null,
    logInError: null,
};

export const SIGN_UP_REQUEST = 'SIGN_UP_REQUEST';
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
export const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE';

export const LOG_IN_REQUEST = 'LOG_IN_REQUEST';
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS';
export const LOG_IN_FAILURE = 'LOG_IN_FAILURE';

export const GET_USER_INFO_REQUEST = 'GET_USER_INFO_REQUEST';
export const GET_USER_INFO_SUCCESS = 'GET_USER_INFO_SUCCESS';
export const GET_USER_INFO_FAILURE = 'GET_USER_INFO_FAILURE';

export const LOG_OUT_REQUEST = 'LOG_OUT_REQUEST';
export const LOG_OUT_SUCCESS = 'LOG_OUT_SUCCESS';
export const LOG_OUT_FAILURE = 'LOG_OUT_FAILURE';

const reducer = (state = initialState, action: any) => produce(state, (draft) => {
    switch (action.type) {
        case SIGN_UP_REQUEST:
            draft.signUpError = null;
            break;
        case SIGN_UP_SUCCESS:
            draft.id = action.data.id;
            draft.email = action.data.email;
            draft.lastname = action.data.lastname;
            draft.firstname = action.data.firstname;
            draft.birthday = action.data.birthday;
            draft.profileImage = action.data.profileImage;
            draft.isLogged = true;
            break;
        case SIGN_UP_FAILURE:
            draft.signUpError = action.error;
            break;
        case LOG_IN_REQUEST:
            draft.logInError = null;
            break;
        case LOG_IN_SUCCESS:
            draft.id = action.data.id;
            draft.email = action.data.email;
            draft.lastname = action.data.lastname;
            draft.firstname = action.data.firstname;
            draft.birthday = action.data.birthday;
            draft.profileImage = action.data.profileImage;
            draft.isLogged = true;
            break;
        case LOG_IN_FAILURE:
            draft.logInError = action.error;
            break;
        case GET_USER_INFO_SUCCESS:
            draft.id = action.data.id;
            draft.email = action.data.email;
            draft.lastname = action.data.lastname;
            draft.firstname = action.data.firstname;
            draft.birthday = action.data.birthday;
            draft.profileImage = action.data.profileImage;
            draft.isLogged = true;
            break;
        case LOG_OUT_SUCCESS:
            draft.id = 0;
            draft.email = "";
            draft.lastname = "";
            draft.firstname = "";
            draft.birthday = "";
            draft.profileImage = "";
            draft.isLogged = false;
            break;
        default:
            break;
    }
});

export default reducer;