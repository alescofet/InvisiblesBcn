import React from "react";
import styles from "../styles/NavBar.module.css";

export default function NavBar(props) {
  return (
    <div className={styles.navBar}>
      <a href="#nav" className={styles.button}>
        LaBarcelonaQueNoVes
      </a>
      <div className={styles.right_bar}>
        <a href="#tour" className={styles.button}>
          FREE TOUR
        </a>
        <a href="#pah" className={styles.button}>
          PAH
        </a>
        <a href="#contact" className={styles.button}>
          CONTACTO
        </a>
      </div>
    </div>
  );
}
