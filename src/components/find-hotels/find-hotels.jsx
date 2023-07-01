import styles from "./find-hotels.module.css";
import Arrow from "../../images/arrow.svg";
import HotelItem from "../hotel-item/hotel-item";
import CarouselImg from "../carousel/carousel";
import { useSelector } from "react-redux";
import { parseDate } from "../../utils/util";

const FindHotels = () => {
  const { hotel, favoritesHotel, formHotel } = useSelector((store) => store.hotel);

  return (
    <section className={styles.findHotels}>
      <div className={styles.location}>
        <div className={styles.textBlock}>
          <p className={styles.text}>Отели</p>
          <img src={Arrow} alt="Стрелка" />
          <p className={styles.text}>{formHotel?.location}</p>
        </div>
        <p className={styles.date}>{parseDate(formHotel?.checkIn || '2022-06-23')}</p>
      </div>

      <CarouselImg />

      <div>
        <p className={styles.favorites}>
          Добавлено в Избранное: <span className={styles.number}>{favoritesHotel.length}</span> отеля
        </p>
        <ul className={styles.list}>
          {hotel?.map((item) => (
            <HotelItem key={item.hotelId} hotel={item} formHotel={formHotel} main />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default FindHotels;
