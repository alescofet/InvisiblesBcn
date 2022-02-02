import React from "react";
import styles from "../styles/Texto.module.css";

export default function TextoTour() {
  return (
    <div id="tour">
      <h1>Free Tour</h1>
      <p>¿Quedamos el sábado?</p>
      <p>
        <span className={styles.negrita}>
          No iremos al paseo de la fama, sino al que debería serlo.
        </span>{" "}
        Organizamos un
        <span className={styles.negrita}> free tour alternativo</span> en el que
        te enseñamos la realidad de lxs vecinxs de la ciudad.
      </p>

      <p>
        Si quieres{" "}
        <span className={styles.negrita}>
          conocer más sobre los desahucios en Barcelona
        </span>{" "}
        y recorrer las calles con nosotros.
      </p>
      <br></br>
      <a href="">Apúntate aquí</a>
    </div>
  );
}
