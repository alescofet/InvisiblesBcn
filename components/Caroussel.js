import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@material-ui/core'
import styles from "../styles/Caroussel.module.css"

export default function Caroussel(props)
{
    console.log(props);
    

    let items = [
        {
            name: "SOL",
            img:""
        },
        {
            name: "PAELLA",
            img:""
        },
        {
            name: "SANGRIA",
            img:""
        },
        {
            name: "DESAHUCIOS",
            img:""
        }
    ]

    return (
        <Carousel 
        className={styles.carrusel}
        indicators={false}
        timeout={900}
        navButtonsAlwaysInvisible={true}
        interval= {3000}

        >
            {
                items.map( (item, i) => <Item  key={i} item={item}/> )
            }
        </Carousel>
    )
}

function Item(props)
{
    return (
        <Paper className={styles.carruselItem}>
            <h2>{props.item.name}</h2>
        </Paper>
    )
}

