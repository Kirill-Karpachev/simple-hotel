import {
  HOTEL_API,
  defaultLocation
} from "./const";

function checkResponse(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(res);
}

function request(url, options) {
  return fetch(url, options).then(checkResponse);
}

export function getHotel(
  location = defaultLocation.location,
  checkIn = defaultLocation.checkIn,
  checkOut = defaultLocation.checkOut,
  limit = 10
) {
  return request(`${HOTEL_API}?location=${location}&currency=rub&checkIn=${checkIn}&checkOut=${checkOut}&limit=${limit}`);
}
