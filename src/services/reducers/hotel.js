import {
  GET_HOTEL_REQUEST,
  GET_HOTEL_SUCCESS,
  GET_HOTEL_FAILED
} from "../actions/hotel";

const initialState = {
  hotel: null,
  hotelRequest: false,
  hotelFailed: false,
};

export const hotelReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_HOTEL_REQUEST: {
      return {
        ...state,
        hotelRequest: true,
      };
    }
    case GET_HOTEL_SUCCESS: {
      return {
        ...state,
        hotel: action.payload,
        hotelRequest: false,
        hotelFailed: false,
      }
    }
    case GET_HOTEL_FAILED: {
      return {
        ...state,
        hotelRequest: false,
        hotelFailed: true,
      }
    }
    default: {
      return state;
    }
  }
};
