import React from 'react'
import styles from "../styles/NavBar.module.css"

export default function NavBar(props) {    
    return (
        <div className={styles.navBar}>
            <a href="#carrusel" className={styles.button}>INVISIBLES</a>
            <div className={styles.right_bar}>
            <button className={styles.button} onClick={(() => {
                props.selectModal(0)
                props.showModal()
                })}>FREE TOUR</button>
            <button className={styles.button} onClick={(() => {
                props.selectModal(1)
                props.showModal()
                })}>PAH</button>
            <button className={styles.button} onClick={(() => {
                props.selectModal(2)
                props.showModal()
                })}>CONTACTO</button>
            </div>
        </div>
    )
}
