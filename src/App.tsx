import { Routes, Route } from "react-router-dom";

import HexagonBoard3D from "./components/HexagonBoard3D";

import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.wrap}>
      <Routes>
        <Route path="/" element={<HexagonBoard3D showAuth={true} skip={true} />} />
      </Routes>
    </div>
  )
}

export default App;
