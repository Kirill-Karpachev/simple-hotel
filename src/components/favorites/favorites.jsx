import styles from "./favorites.module.css";
import HotelItem from "../hotel-item/hotel-item";
import { useSelector } from "react-redux";
import { useState } from "react";

const Favorites = () => {
  const { favoritesHotel } = useSelector((store) => store.hotel);
  const [sort, setSort] = useState("default");

  const handleChange = (e) => {
    setSort(e.target.value);
  };

  return (
    <div className={styles.favorites}>
      <h2 className={styles.title}>Избранное</h2>

      <select
        className={styles.select}
        name="categories"
        onChange={handleChange}
      >
        <option value="default">Рейтинг</option>
        <option value="price">Цена</option>
      </select>

      <ul className={styles.list}>
        {sort === "default"
          ? favoritesHotel
              .sort((a, b) => b?.stars - a?.stars)
              .map((hotel) =>
                hotel.favorite ? (
                  <HotelItem key={hotel.hotelId} hotel={hotel} />
                ) : null
              )
          : favoritesHotel
              .sort((a, b) => b?.priceAvg - a?.priceAvg)
              .map((hotel) =>
                hotel.favorite ? (
                  <HotelItem key={hotel.hotelId} hotel={hotel} />
                ) : null
              )}
      </ul>
    </div>
  );
};

export default Favorites;
