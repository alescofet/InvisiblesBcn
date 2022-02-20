import React, { useCallback, useEffect, useState } from "react";
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
            En Barcelona está pasando algo y necesita tu atención, pero no lo ves. 
          </p>
          <p>
            En Barcelona están privando a nuestros vecinos y vecinas de una vivienda digna, están desahuciando familias. 
          </p>
          <p>
            Todo frente a tus ojos. Pero no lo ves. 
          </p>
          <p>
            Porque los desahucios no son un punto de interés. 
          </p>
        </div>

        {mobile ? <div className={styles.arcTriomf}></div> : null}

        {mobile ? <div className="second"></div> : <div></div>}

        {mobile ? <div className={styles.torres}></div> : null}

        <div className="third">
          <p>
            No te hablan de los desalojos cuando se presume de ciudad. 
          </p>

          <p>
            No nos sentimos orgullosos cuando vienen a visitarnos. 
          </p>


          <p>
            No se lo mostramos a nadie. 
          </p>

          <p>
            Seguramente porque no sabes qué está pasando.
          </p>

          <p>
            Pero es hora de que todos tomemos conciencia y mires hacia  #LaBarcelonaQueNoVes
          </p>

        </div>
      </div>
    </div>
  );
}
