import React from 'react'
import styles from "../styles/Texto.module.css"

export default function Texto() {
    return (
        <div className={styles.text}>
            <p>
                Los famosos parecen ser tan importantes que por las calles podemos encontrar placas que les conmemoran. Sin embargo, el resto solemos pasar desapercibidas. Una diferenciación que se agrava y perjudica especialmente a las personas que más ayuda necesitan. Sí, hablamos de las personas desahuciadas.
            </p>
            <p>
                Para poder ayudarles, es necesario denunciar su situación dándola a conocer a todos los ciudadanos. 
            </p> 
            <p>
                Por eso usamos el mismo código que usan ellos, con la esperanza de que a alguien le llame la atención. 
            </p>
        </div>
    )
}
