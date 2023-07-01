import {
  AUTH,
  UN_AUTH
} from "../actions/user";

const initialState = {
  user: {
    email: '',
    password: '',
  },
  isAuth: false,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH: {
      return {
        ...state,
        user: {
          email: action.payload?.email,
          password: action.payload?.password
        },
        isAuth: true,
      };
    }
    case UN_AUTH: {
      return {
        ...state,
        user: {
          email: "",
          password: ""
        },
        isAuth: false,
      }
    }
    default: {
      return state;
    }
  }
};
