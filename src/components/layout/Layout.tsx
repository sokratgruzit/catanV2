import React from "react";
import { Outlet } from "react-router-dom";

import { LayoutProps } from "../../types/interfaces";

import Header from "./header/navBar/Header";
import Footer from "./footer/Footer";

import styles from "./Layout.module.css";

export const Layout: React.FC<LayoutProps> = ({ isLogged }) => {
  return (
    <main className={styles.layout}>
      {isLogged && <Header />}
      <Outlet />
      {isLogged && <Footer />}
    </main>
  );
};

