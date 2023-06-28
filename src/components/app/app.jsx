import { Route, Routes } from "react-router-dom";
import Login from "../../pages/login/login";
import Main from "../../pages/main/main";
import ProtectedRoute from "../protected-route/protected-route";

const App = () => {
  return (
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
  );
};

export default App;
