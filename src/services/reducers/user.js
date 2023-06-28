import {
  AUTH,
  UN_AUTH
} from "../actions/user";

const initialState = {
  isAuth: false,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH: {
      return {
        ...state,
        isAuth: true,
      };
    }
    case UN_AUTH: {
      return {
        ...state,
        isAuth: false,
      }
    }
    default: {
      return state;
    }
  }
};