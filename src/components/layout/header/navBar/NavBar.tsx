import React, { useState } from "react";
import styles from "./NavBar.module.css";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../../../store";

const NavBar: React.FC = () => {
  const [burgerClass, setBurgerClass] = useState<string>("unclicked");
  const [menuClass, setMenuClass] = useState<string>("hidden");
  const [isMenuClicked, setIsMenuClicked] = useState<boolean>(false);

  const account = useAppSelector((state) => state.auth);

  const updateMenu = () => {
    if (!isMenuClicked) {
      setBurgerClass("clicked");
      setMenuClass("visible");
    } else {
      setBurgerClass("unclicked");
      setMenuClass("easyOut");
      setTimeout(() => {
        setMenuClass("hidden");
      }, 400);
    }
    setIsMenuClicked(!isMenuClicked);
  };

  return (
    <div className={styles.mainNavBar}>
      <div
        className={`${styles.burgerMenu} ${styles[burgerClass]}`}
        onClick={updateMenu}
      >
        <div className={styles.burgerClass}></div>
        <div className={styles.burgerClass}></div>
        <div className={styles.burgerClass}></div>
      </div>

      <div className={`${styles.menu} ${styles[menuClass]}`}>
        <Link to={"/dashboard"} className={styles.headerLink}>
          Dashboard
        </Link>
        <Link to={"/talk-and-smoke"} className={styles.headerLink}>
          Talk & Smoke
        </Link>
        <Link to={`/statistics/${account.id}`} className={styles.headerLink}>
          Statistics
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
