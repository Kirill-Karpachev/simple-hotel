import styles from "./hotel-item.module.css";
import Star from "../../images/star.svg";
import StarFill from "../../images/star-fill.svg";
import House from "../../images/house.png";
import { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  ADD_FAVORITES_HOTEL,
  DELETE_FAVORITES_HOTEL,
} from "../../services/actions/hotel";
import { parseDate } from "../../utils/util";

const HotelItem = ({ hotel, main }) => {
  const { formHotel } = useSelector((store) => store.hotel);

  const dispatch = useDispatch();
  const arrStar = [1, 2, 3, 4, 5];
  const price = useMemo(() => Math.round(hotel?.priceAvg), [hotel?.priceAvg]);

  const handlerFavorite = () => {
    if (!hotel?.favorite) {
      dispatch({ type: ADD_FAVORITES_HOTEL, payload: hotel?.hotelId });
    } else {
      dispatch({ type: DELETE_FAVORITES_HOTEL, payload: hotel?.hotelId });
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
            <h3 className={styles.title}>{hotel?.hotelName}</h3>
            <button className={styles.btn} onClick={handlerFavorite}>
              <span
                className={`${styles.heart} ${
                  hotel?.favorite ? styles.heartActive : ""
                }`}
              ></span>
            </button>
          </div>

          <div className={styles.middle}>
            <p className={styles.text}>
              {parseDate(formHotel?.checkIn || "2022-06-23")}
            </p>{" "}
            —<p className={styles.text}>{formHotel?.day} день</p>
          </div>

          <div className={styles.bottom}>
            <div className={styles.stars}>
              {arrStar.map((item) => {
                if (hotel?.stars >= item) {
                  return <img key={item} src={StarFill} alt="Звезда"></img>;
                } else {
                  return <img key={item} src={Star} alt="Звезда"></img>;
                }
              })}
            </div>

            <p className={styles.price}>
              <span className={styles.priceText}>Price:</span> {price} ₽
            </p>
          </div>
        </div>
      </div>

      <hr className={styles.hr} />
    </li>
  );
};

export default HotelItem;
