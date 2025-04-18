import { Routes, Route } from "react-router-dom";
import { useAppSelector } from "./store";

import { Dashboard } from "./components/dashboard/Dashboard";
import { RequireAuth } from "./components/auth/RequireAuth";
import { Unauthorized } from "./components/auth/Unauthorized";
import { Auth } from "./components/auth/Auth";
import { Layout } from "./components/layout/Layout";

import "./assets/css/main.css";
import styles from "./App.module.css";

function App() {
  const player = useAppSelector((state) => state.auth);

  return (
    <div className={styles.wrap}>
      <Routes>
        <Route
          path="/"
          element={
            <Layout isLogged={player.address !== "" || player.email !== ""} />
          }
        >
          <Route path="/" element={<Auth />} />
          <Route path="/" element={<Unauthorized />} />
          <Route element={<RequireAuth />}>
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>
        </Route>
      </Routes>
    </div>
  )
}

export default App;
