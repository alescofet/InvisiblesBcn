import React from 'react'
import styles from "../styles/Marquee.module.css"

export default function Marquee() {
    return ( 
        <div className={styles.mainDiv}>
            <div className={styles.div1}>
            </div>
            <div className={styles.text}>
          <p>
            Para conmemorar a una persona famosa, se colocan placas en la ciudad. Nos hemos apropiado de estas para atraer la mirada hacia los desahucios.
          </p>
          <p>
              Aunque a simple vista mires la placa porque te da curiosidad saber qué  famoso vivió en esa calle, verás una realidad que hasta ahora ha pasado de desapercibida. 
          </p>
        </div>
        </div>
       
    )
}
