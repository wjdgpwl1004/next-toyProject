import { HYDRATE } from 'next-redux-wrapper';
import { combineReducers } from 'redux';
import common from './common';
import user from './user';

// (이전상태, 액션) => 다음상태
const rootReducer = (state: any, action: any) => {
  switch (action.type) {
    case HYDRATE:
      return action.payload;
    default: {
      const combinedReducer = combineReducers({
        common,
        user,
      });
      return combinedReducer(state, action);
    }
  }
};

export default rootReducer;