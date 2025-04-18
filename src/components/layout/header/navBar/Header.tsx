import { useAppSelector } from "../../../../store";
import { Link } from "react-router-dom";

import Sidebar from "../../../UI/sidebar/Sidebar";
import NavBar from "./NavBar";

import styles from "../../Layout.module.css";

const Header = () => {
  const user = useAppSelector((state) => state.auth);

  return (
    <div className={styles.headerContainer}>
      {user.email || user.address ? (
        <>
          <div className={styles.mainMenu}>
            <Link to={"/dashboard"} className={styles.logo}>
              <svg
                width="68"
                height="17"
                viewBox="0 0 68 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M26.4 17H3.99998L5.59998 13.8H29.6L26.4 17Z"
                  fill="#E94560"
                />
                <path
                  d="M61.8031 13.8H37.8031L36.2031 17H58.6031L61.8031 13.8Z"
                  fill="#E94560"
                />
                <path
                  d="M25.6 11.2V6.4H28.8V12.8L25.6 16H3.2L0 12.8H24L25.6 11.2ZM0 3.2L3.2 0H25.6L28.8 3.2H0Z"
                  fill="#E9E8E8"
                />
                <path
                  d="M35.2031 11.2L36.8031 12.8H60.8031L57.6031 16H35.2031L32.0031 12.8V6.4H35.2031V11.2ZM32.0031 3.2L35.2031 0H57.6031L60.8031 3.2H32.0031Z"
                  fill="#E9E8E8"
                />
                <circle cx="66" cy="14" r="2" fill="#E94560" />
              </svg>
            </Link>
            <Link to={"/dashboard"} className={styles.headerLink}>
              Dashboard
            </Link>
            <Link to={"/talk-and-smoke"} className={styles.headerLink}>
              Talk & Smoke
            </Link>
            <Link to={`/statistics/${user.id}`} className={styles.headerLink}>
              Statistics
            </Link>
          </div>
          <NavBar />
          <Sidebar />
        </>
      ) : null}
    </div>
  );
};

export default Header;
