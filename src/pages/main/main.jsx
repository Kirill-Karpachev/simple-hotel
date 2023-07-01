import { useDispatch } from "react-redux";
import { UN_AUTH } from "../../services/actions/user";
import { deleteCookie } from "../../utils/util";
import styles from "./main.module.css";
import Exit from "../../images/exit.svg";
import Search from "../../components/search/search";
import Favorites from "../../components/favorites/favorites";
import FindHotels from "../../components/find-hotels/find-hotels";
import { useEffect } from "react";
import { GET_HOTEL_REQUEST } from "../../services/actions/hotel";
import { defaultLocation } from "../../utils/const";

const Main = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: GET_HOTEL_REQUEST,
      payload: defaultLocation,
    });
  }, [dispatch]);

  const signOut = () => {
    dispatch({ type: UN_AUTH });
    deleteCookie("accessToken");
  };

  return (
    <div className={styles.bg}>
      <div className={styles.container}>
        <header className={styles.header}>
          <h1 className={styles.title}>Simple Hotel Check</h1>
          <button className={styles.btn} onClick={signOut}>
            Выйти <img src={Exit} alt="Выйти" />
          </button>
        </header>

        <main className={styles.main}>
          <div className={styles.sidePanels}>
            <Search />
            <Favorites />
          </div>

          <FindHotels />
        </main>
      </div>
    </div>
  );
};

export default Main;
