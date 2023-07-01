import styles from "./favorites.module.css";
import HotelItem from "../hotel-item/hotel-item";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import SelectImg from "../../images/select.svg";

const Favorites = () => {
  const { favoritesHotel } = useSelector((store) => store.hotel);
  const [sort, setSort] = useState();
  const [choice, setChoice] = useState("rateUp");

  const handleClick = (e) => {
    if (e.target.name === "rate") {
      if (choice === "rateUp") {
        setChoice("rateDown");
      } else {
        setChoice("rateUp");
      }
    } else {
      if (choice === "priceUp") {
        setChoice("priceDown");
      } else {
        setChoice("priceUp");
      }
    }
  };

  useEffect(() => {
    let sortedHotels = favoritesHotel.filter((hotel) => hotel.favorite);

    if (choice === "rateUp") {
      sortedHotels.sort(sortRateUp);
    }
    if (choice === "rateDown") {
      sortedHotels.sort(sortRateDown);
    }
    if (choice === "priceUp") {
      sortedHotels.sort(sortPriceUp);
    }
    if (choice === "priceDown") {
      sortedHotels.sort(sortPriceDown);
    }

    setSort([...sortedHotels]);
  }, [choice, favoritesHotel]);

  const sortPriceUp = (a, b) => {
    if (a.priceAvg < b.priceAvg) {
      return -1;
    }
    if (a.priceAvg > b.priceAvg) {
      return 1;
    }
  };

  const sortPriceDown = (a, b) => {
    if (a.priceAvg < b.priceAvg) {
      return 1;
    }
    if (a.priceAvg > b.priceAvg) {
      return -1;
    }
  };

  const sortRateUp = (a, b) => {
    if (a.stars < b.stars) {
      return -1;
    }
    if (a.stars > b.stars) {
      return 1;
    }
  };

  const sortRateDown = (a, b) => {
    if (a.stars < b.stars) {
      return 1;
    }
    if (a.stars > b.stars) {
      return -1;
    }
  };

  console.log(choice);

  return (
    <div className={styles.favorites}>
      <h2 className={styles.title}>Избранное</h2>

      <div className={styles.btns}>
        <button
          className={`${styles.btn} ${
            choice === "rateUp" || choice === "rateDown"
              ? ""
              : styles.btnUnActive
          }`}
          name="rate"
          onClick={handleClick}
        >
          Рейтинг
          <div className={styles.imgs}>
            <img
              className={`${styles.imgUp} ${
                choice === "rateUp" ? styles.imgUpUnActive : ""
              }`}
              src={SelectImg}
              alt=""
            />
            <img
              className={`${styles.imgDown} ${
                choice === "rateDown" ? "" : styles.imgDownActive
              }`}
              src={SelectImg}
              alt=""
            />
          </div>
        </button>
        <button
          className={`${styles.btn} ${
            choice === "priceUp" || choice === "priceDown"
              ? ""
              : styles.btnUnActive
          }`}
          name="price"
          onClick={handleClick}
        >
          Цена
          <section className={styles.imgs}>
            <img
              className={`${styles.imgUp} ${
                choice === "priceUp" ? styles.imgUpUnActive : ""
              }`}
              src={SelectImg}
              alt=""
            />
            <img
              className={`${styles.imgDown} ${
                choice === "priceDown" ? "" : styles.imgDownActive
              }`}
              src={SelectImg}
              alt=""
            />
          </section>
        </button>
      </div>

      <ul className={styles.list}>
        {sort?.map((hotel) => (
          <HotelItem key={hotel.hotelId} hotel={hotel} />
        ))}
      </ul>
    </div>
  );
};

export default Favorites;
