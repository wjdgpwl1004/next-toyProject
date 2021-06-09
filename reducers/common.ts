import { CommonState } from "../types/reduxState";
import produce from 'immer';

//* 초기 상태
const initialState: CommonState = {
    validateMode: false,
};

export const COMMON_VALIDATE = 'COMMON_VALIDATE';

export const commonValidateMode = (data: boolean) => {
    return {
        type: COMMON_VALIDATE,
        data,
    }
};

const reducer = (state = initialState, action: any) => produce(state, (draft) => {
    switch (action.type) {
        case COMMON_VALIDATE:
            draft.validateMode = action.data;
            break;
        default:
            break;
    }
});

export default reducer;