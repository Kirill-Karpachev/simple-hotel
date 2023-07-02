import {
  GET_HOTEL_REQUEST,
  GET_HOTEL_SUCCESS,
  GET_HOTEL_FAILED,
  ADD_FAVORITES_HOTEL,
  DELETE_FAVORITES_HOTEL
} from "../actions/hotel";

const initialState = {
  hotel: [],
  formHotel: null,
  hotelRequest: false,
  hotelFailed: false,
  favoritesHotel: []
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
        hotel: action.payload.data,
        formHotel: action.payload.form,
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
    case ADD_FAVORITES_HOTEL: {
      return {
        ...state,
        favoritesHotel: [...state.favoritesHotel, action.payload]
      }
    }
    case DELETE_FAVORITES_HOTEL: {
      return {
        ...state,
        favoritesHotel: [...state.favoritesHotel].filter(
          (hotel) => hotel.hotelId !== action.payload
        ),
      };
    }
    default: {
      return state;
    }
  }
};
