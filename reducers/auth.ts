import produce from 'immer';

//* 초기 상태
const initialState: { authMode: "signup" | "login" } = {
    authMode: "signup",
};

export const AUTH_MODE = 'AUTH_MODE';

export const setAuthMode = (data: string) => {
    return {
        type: AUTH_MODE,
        data,
    }
};

const reducer = (state = initialState, action: any) => produce(state, (draft) => {
    switch (action.type) {
        case AUTH_MODE:
            draft.authMode = action.data;
            break;
        default:
            break;
    }
});

export default reducer;