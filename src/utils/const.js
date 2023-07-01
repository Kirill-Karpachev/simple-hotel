import {
  dateFormat
} from "./util";
const currentDate = new Date()
export const HOTEL_API = "http://engine.hotellook.com/api/v2/cache.json";
export const defaultLocation = {
  location: "Москва",
  checkIn: dateFormat(currentDate),
  checkOut: dateFormat(currentDate.setDate(currentDate.getDate() + 1)),
  day: "1",
}
