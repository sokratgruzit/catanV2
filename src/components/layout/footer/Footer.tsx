import { Link } from "react-router-dom";

import styles from "./Footer.module.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className={styles.footerContainer}>
      <div className={styles.links}>
        <Link className={styles.link} to="/about-game">About Game</Link>
        <Link className={styles.link} to="/faq">FAQ</Link>
      </div>
      <p>&copy; {currentYear} Dirty Boys. All rights reserved.</p>
    </div>
  );
};

export default Footer;
