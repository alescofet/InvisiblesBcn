import React from 'react'
import styles from "../styles/NavBar.module.css"

export default function NavBar() {
    return (
        <div className={styles.navBar}>
            <a href="#navBar">Invisibles</a>
            <div className={styles.right_bar}>
            <a>FREE TOUR</a>
            <a>PAH</a>
            <a>CONTACTO</a>
            </div>
        </div>
    )
}
