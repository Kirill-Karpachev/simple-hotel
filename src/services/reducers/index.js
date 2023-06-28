import {
  combineReducers
} from "redux";
import {
  userReducer
} from "./user";
import {
  hotelReducer
} from "./hotel";

export const rootReducer = combineReducers({
  user: userReducer,
  hotel: hotelReducer,
});
