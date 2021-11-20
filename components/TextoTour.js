import React from 'react'
import styles from "../styles/Texto.module.css"

export default function TextoTour() {
    return (
        <div className={styles.text} id="tour">
            <h1>¿Quedamos el sábado?</h1>
            <p>
            <span className={styles.negrita}>No iremos al paseo de la fama, sino al que debería serlo.</span> Organizamos un
            <span className={styles.negrita}>free tour alternativo</span> en el que te enseñamos la realidad de lxs vecinxs de la
            ciudad.
            </p>

            <p>
            Si quieres <span className={styles.negrita}>conocer más sobre los desahucios en Barcelona</span> y recorrer las
            calles con nosotros, <a href="">apúntate aquí</a>.
            </p>
            </div>
)

}
