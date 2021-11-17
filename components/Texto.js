import React from 'react'
import styles from "../styles/Texto.module.css"

export default function Texto() {
    return (
        <div className={styles.text}>
            <p>Cuando visitamos una ciudad, recorremos sus calles para conocer la historia de los personajes más famosos.</p>

            <p>Aunque conozcas Barcelona, <span className={styles.negrita}> seguro que de todas las personas que hay en el mapa ninguna te suena,</span> y es normal. </p>

            <p>Quien más necesita que le vean, no tiene visibilidad.</p>

            <p><span className={styles.negrita}>A quien necesita alzar su voz, nadie le escucha.</span></p>

            <p>Toda la gente que aparece en este mapa ha sido <span className={styles.negrita}>expulsada de sus casas.</span> Echada a la calle. Privada de un derecho básico según la constitución española, y hasta la ONU. <span className={styles.negrita}>Han sido privados de una vivienda digna. </span></p>

            <p>Mientras otros tienen toda nuestra atención, al resto nos cuesta que nos hagan caso.
            <span className={styles.negrita}>¡Hay quienes incluso tienen placas en las casas para conmemorarlos!</span></p>

            <p>Esas placas deberían ser para quién las necesita.
            <span className={styles.negrita}> No ser famosos no nos hace menos importantes.</span></p>
        </div>


)
{/* <div className={styles.text}>
    <p>
        Los famosos parecen ser tan importantes que por las calles podemos encontrar placas que les conmemoran. Sin embargo, el resto solemos pasar desapercibidas. Una diferenciación que se agrava y perjudica especialmente a las personas que más ayuda necesitan. Sí, hablamos de las personas desahuciadas.
    </p>
    <p>
        Para poder ayudarles, es necesario denunciar su situación dándola a conocer a todos los ciudadanos. 
    </p> 
    <p>
        Por eso usamos el mismo código que usan ellos, con la esperanza de que a alguien le llame la atención. 
    </p>
</div> */}
}
