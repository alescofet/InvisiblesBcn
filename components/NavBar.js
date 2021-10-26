import React from 'react'
import styles from "../styles/NavBar.module.css"

export default function NavBar(props) {    
    return (
        <div className={styles.navBar}>
            <a href="#carrusel">Invisibles</a>
            <div className={styles.right_bar}>
            <span onClick={(() => {
                props.selectModal(0)
                props.showModal()
                })}>FREE TOUR</span>
            <span onClick={(() => {
                props.selectModal(1)
                props.showModal()
                })}>PAH</span>
            <span onClick={(() => {
                props.selectModal(2)
                props.showModal()
                })}>CONTACTO</span>
            </div>
        </div>
    )
}
