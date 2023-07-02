import styles from "./favorites.module.css";
import HotelItem from "../hotel-item/hotel-item";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import ButtonSort from "../ui/button-sort/button-sort";

const Favorites = () => {
  const { favoritesHotel } = useSelector((store) => store.hotel);
  const [sort, setSort] = useState();
  const [choice, setChoice] = useState("rateUp");

  useEffect(() => {
    let sortedHotels = favoritesHotel.filter((hotel) => hotel.favorite);

    switch (choice) {
      case "rateUp":
        sortedHotels.sort((a, b) => a.stars - b.stars);
        break;
      case "rateDown":
        sortedHotels.sort((a, b) => b.stars - a.stars);
        break;
      case "priceUp":
        sortedHotels.sort((a, b) => a.priceAvg - b.priceAvg);
        break;
      case "priceDown":
        sortedHotels.sort((a, b) => b.priceAvg - a.priceAvg);
        break;
      default:
        break;
    }

    setSort([...sortedHotels]);
  }, [choice, favoritesHotel]);

  return (
    <div className={styles.favorites}>
      <h2 className={styles.title}>Избранное</h2>

      <div className={styles.btns}>
        <ButtonSort
          choice={choice}
          setChoice={setChoice}
          name={"rate"}
          text={"Рейтинг"}
        />
        <ButtonSort
          choice={choice}
          setChoice={setChoice}
          name={"price"}
          text={"Цена"}
        />
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
