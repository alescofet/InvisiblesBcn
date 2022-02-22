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
            Para conmemorar a una persona famosa, se colocan placas en la ciudad. Nos hemos apropiado de estas para atraer la mirada hacia los desahucios.
          </p>
          <p>
              Aunque a simple vista mires la placa porque te da curiosidad saber qué  famoso vivió en esa calle, verás una realidad que hasta ahora ha pasado de desapercibida. 
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
            No nos sentimos orgullosas cuando vienen a visitarnos. 
          </p>


          <p>
            No se lo mostramos a nadie. 
          </p>

          <p>
            Seguramente porque no sabes qué está pasando.
          </p>

          <p>
            Pero es hora de que todas tomemos conciencia y mires hacia  #LaBarcelonaQueNoVes
          </p>

        </div>
      </div>
    </div>
  );
}
