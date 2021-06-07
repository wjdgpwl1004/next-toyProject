import { UserType } from "../types/user";
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
};

export const SIGN_UP_REQUEST = 'SIGN_UP_REQUEST';
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
export const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE';

const reducer = (state = initialState, action: any) => produce(state, (draft) => {
    switch (action.type) {
        case SIGN_UP_REQUEST:
            draft.signUpError = null;
            break;
        case SIGN_UP_SUCCESS:
            draft.isLogged = true;
            break;
        case SIGN_UP_FAILURE:
            draft.signUpError = action.error;
            break;
        default:
            break;
    }
});

export default reducer;