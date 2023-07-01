import { useForm } from "../../utils/use-form";
import InputSearch from "../ui/input-search/input-search";
import styles from "./search.module.css";
import Button from "../ui/button/button";
import { defaultLocation } from "../../utils/const";
import { GET_HOTEL_REQUEST } from "../../services/actions/hotel";
import { useDispatch } from "react-redux";
import { checkOut } from "../../utils/util";

const Search = () => {
  const dispatch = useDispatch();
  const { values, handleChange } = useForm(defaultLocation);

  const formatValues = {
    location: values.location,
    checkIn: values.checkIn,
    checkOut: checkOut(new Date(values.checkIn), values.day),
    day: values.day,
  };

  const handlerSearch = (e) => {
    e.preventDefault();

    dispatch({
      type: GET_HOTEL_REQUEST,
      payload: formatValues,
    });
  };

  return (
    <div className={styles.search}>
      <form className={styles.form} onSubmit={handlerSearch}>
        <div className={styles.inputs}>
          <InputSearch
            text="Локация"
            type="text"
            name="location"
            value={values.location}
            onChange={handleChange}
          />
          <InputSearch
            text="Дата заселения"
            type="date"
            name="checkIn"
            value={values.checkIn}
            onChange={handleChange}
          />
          <InputSearch
            text="Количество дней"
            type="number"
            name="day"
            value={values.day}
            onChange={handleChange}
          />
        </div>

        <Button text={"Найти"} />
      </form>
    </div>
  );
};

export default Search;
