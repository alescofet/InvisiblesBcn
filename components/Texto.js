import React, { useCallback, useEffect } from "react";
import { useState } from "react";
import styles from "../styles/Texto.module.css";

const useMediaQuery = (width) => {
  const [targetReached, setTargetReached] = useState(false);

  const updateTarget = useCallback((e) => {
    if (e.matches) {
      setTargetReached(true);
    } else {
      setTargetReached(false);
    }
  }, []);

  useEffect(() => {
    const media = window.matchMedia(`(max-width: ${width}px)`);
    media.addListener(updateTarget);

    // Check on mount (callback is not called until a change occurs)
    if (media.matches) {
      setTargetReached(true);
    }

    return () => media.removeListener(updateTarget);
  }, []);

  return targetReached;
};

export default function Texto() {
  const mobile = useMediaQuery(600);
  return (
    <div className={styles.textContainer}>
      <div className={styles.text}>
        <div className="first">
          <p>
            Cuando visitamos una ciudad, recorremos sus calles para conocer la
            historia de los personajes más famosos.
          </p>
          <p>
            Aunque conozcas Barcelona,{" "}
            <span className={styles.negrita}>
              {" "}
              seguro que de todas las personas que hay en el mapa ninguna te
              suena,
            </span>{" "}
            y es normal.{" "}
          </p>
        </div>

        {mobile ? <div className={styles.arcTriomf}></div> : null}

        <div className="second">
          <p>Quien más necesita que le vean, no tiene visibilidad.</p>

          <p>
            <span className={styles.negrita}>
              A quien necesita alzar su voz, nadie le escucha.
            </span>
          </p>
        </div>

        {mobile ? <div className={styles.torres}></div> : null}

        <div className="third">
          <p>
            Toda la gente que aparece en este mapa ha sido{" "}
            <span className={styles.negrita}>expulsada de sus casas.</span>{" "}
            Echada a la calle. Privada de un derecho básico según la
            constitución española, y hasta la ONU.{" "}
            <span className={styles.negrita}>
              Han sido privados de una vivienda digna.{" "}
            </span>
          </p>

          <p>
            Mientras otros tienen toda nuestra atención, al resto nos cuesta que
            nos hagan caso.
            <span className={styles.negrita}>
              ¡Hay quienes incluso tienen placas en las casas para
              conmemorarlos!
            </span>
          </p>

          <p>
            Esas placas deberían ser para quién las necesita.
            <span className={styles.negrita}>
              {" "}
              No ser famosos no nos hace menos importantes.
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
