import {
  format,
  parse
} from "date-fns";
import {
  ru
} from 'date-fns/locale'


export function getCookie(name) {
  const matches = document.cookie.match(
    new RegExp(
      "(?:^|; )" +
      name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") +
      "=([^;]*)"
    )
  );
  return matches ? decodeURIComponent(matches[1]) : undefined;
}

export function setCookie(name, value, props) {
  props = props || {};
  let exp = props.expires;
  if (typeof exp == "number" && exp) {
    const d = new Date();
    d.setTime(d.getTime() + exp * 1000);
    exp = props.expires = d;
  }
  if (exp && exp.toUTCString) {
    props.expires = exp.toUTCString();
  }
  value = encodeURIComponent(value);
  let updatedCookie = name + "=" + value;
  for (const propName in props) {
    updatedCookie += "; " + propName;
    const propValue = props[propName];
    if (propValue !== true) {
      updatedCookie += "=" + propValue;
    }
  }
  document.cookie = updatedCookie;
}

export function deleteCookie(name) {
  setCookie(name, null, {
    expires: -1,
  });
}

export const dateFormat = (date) => format(date, "yyyy-MM-dd");
export const checkOut = (date, day) => dateFormat(date.setDate(date.getDate() + Number(day)));
export const parseDate = (date) => format(parse(date, 'yyyy-MM-dd', new Date(), {
  locale: ru
}), 'dd MMMM yyyy', {
  locale: ru
})
export const dayFormat = (day) => {
  if (day === '1') {
    return `${day} день`;
  } else if (
    day === '2' ||
    day === '3' ||
    day === '4'
  ) {
    return `${day} дня`;
  } else {
    return `${day} дней`;
  }
};

export const priceFormat = (price) => {
  let arrBase = price.toString().split('.')
  let arrSecond = arrBase[0].toString().split('')
  arrSecond.splice(-3, 0, ' ')
  return arrSecond.join('')
}
