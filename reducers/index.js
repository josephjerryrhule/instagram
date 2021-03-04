import { combineReducers } from "redux";

export const user = (state = {}, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  user,
});

export default rootReducer;
