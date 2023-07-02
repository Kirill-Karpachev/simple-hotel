import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  ADD_FAVORITES_HOTEL,
  DELETE_FAVORITES_HOTEL,
} from "../../services/actions/hotel";
import styles from "./hotel-item.module.css";
import Star from "../../images/star.svg";
import StarFill from "../../images/star-fill.svg";
import House from "../../images/house.png";
import { dayFormat, parseDate, priceFormat } from "../../utils/util";

const HotelItem = ({ hotel, main }) => {
  const dispatch = useDispatch();
  const { formHotel, favoritesHotel } = useSelector((store) => store.hotel);
  const arrStar = [1, 2, 3, 4, 5];

  const isFavorite = favoritesHotel.some(
    (item) => item.hotelId === hotel.hotelId
  );

  const handleFavorite = () => {
    if (isFavorite) {
      dispatch({ type: DELETE_FAVORITES_HOTEL, payload: hotel.hotelId });
    } else {
      dispatch({ type: ADD_FAVORITES_HOTEL, payload: hotel });
    }
  };

  return (
    <li className={styles.listItem}>
      <div className={styles.container}>
        <div className={`${styles.containerImg} ${main ? styles.active : ""}`}>
          {main && <img className={styles.img} src={House} alt="Дом" />}
        </div>
        <div className={styles.item}>
          <div className={styles.top}>
            <h3 className={styles.title}>{hotel.hotelName}</h3>
            <button className={styles.btn} onClick={handleFavorite}>
              <span
                className={`${styles.heart} ${
                  isFavorite ? styles.heartActive : ""
                }`}
              ></span>
            </button>
          </div>

          <div className={styles.middle}>
            <p className={styles.text}>{parseDate(formHotel?.checkIn)}</p>—
            <p className={styles.text}>{dayFormat(formHotel.day)}</p>
          </div>

          <div className={styles.bottom}>
            <div className={styles.stars}>
              {arrStar.map((item) => {
                return (
                  <img
                    key={item}
                    src={hotel.stars >= item ? StarFill : Star}
                    alt="Звезда"
                  ></img>
                );
              })}
            </div>

            <p className={styles.price}>
              <span className={styles.priceText}>Price: </span>
              {priceFormat(hotel.priceAvg)} ₽
            </p>
          </div>
        </div>
      </div>

      <hr className={styles.hr} />
    </li>
  );
};

export default HotelItem;
