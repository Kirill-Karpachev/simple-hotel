import { Route, Routes } from "react-router-dom";
import Login from "../../pages/login/login";
import Main from "../../pages/main/main";
import ProtectedRoute from "../protected-route/protected-route";
import { useEffect } from "react";
import { getCookie } from "../../utils/util";
import { AUTH } from "../../services/actions/user";
import { useDispatch } from "react-redux";
import styles from "./app.module.css";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (getCookie("accessToken")) {
      dispatch({ type: AUTH });
    }
  });

  return (
    <div className={styles.app}>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Main />
            </ProtectedRoute>
          }
        />
        <Route
          path="/login"
          element={
            <ProtectedRoute onlyUnAuth>
              <Login />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
