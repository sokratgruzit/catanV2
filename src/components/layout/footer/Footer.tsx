import styles from "./Footer.module.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className={styles.footerContainer}>
      <div className={styles.links}>
        <a href="#">About Game</a>
        <a href="#">FAQ</a>
      </div>
      <p>&copy; {currentYear} Dirty Boys. All rights reserved.</p>
    </div>
  );
};

export default Footer;
