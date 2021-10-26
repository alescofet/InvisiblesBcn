import Head from 'next/head'
import Image from 'next/image'
import dynamic from 'next/dynamic'
import { useState } from 'react'
import styles from '../styles/Home.module.css'
import pah from "../informacionPAH.json"
import Caroussel from '../components/Caroussel'
import NavBar from '../components/NavBar'
import Modal from '../components/Modal'

export default function Home() {

  const [showModal, setShowModal] = useState(false);
  const [selectedModal, setSelectedModal] = useState(0);
  const modals =[
    {
      title: "FREE TOUR",
      description: ["Si quieres un tour alternativo por la ciudad, ponte en contacto con nosotros. Lo celebraremos el primer sábado de cada mes a las 10h.", "Así verás otra realidad de la ciudad de la que todos debemos ser conscientes."]
    },
    {
      title: "PAH",
      description: ["La PAH es el acrónimo que da nombre al movimiento Plataforma Afectados por la Hipoteca y nace en 2009 con el principal objetivo de conquistar el derecho a la vivienda.", "Desde sus inicios ha mantenido una clara conciencia colectiva, política y partidista a través de una organización asamblearia, ciudadana y democrática sin vinculación ni apoyo a ningún partido político.", "A día de hoy este movimiento cuenta con presencia en más de 30 localidades y ha realizado numerosas campañas entre las que destacamos Vivienda por derecho, Ley Vivienda PAH, Mociones Ayuntamientos, Escraches y sobre todo Stop Deshaucios.", "Únete."]
    },
    {
      title: "Contáctanos",
      description:[["INVISIBLES", "invisibles@pah.com", "626 644 998"],
      ["PAH", "info@pah.com", "626 644 994"]]
    }
  ]
  

  const Map = dynamic(
    () => import('../components/Map'), // replace '@components/map' with your component's location
    { 
      loading: () => <p>A map is loading</p>,
      ssr: false // This line is important. It's what prevents server-side render
    }
  )
  
  return (
    <div className={styles.container}>
      <Head>
        <title>InvisiblesBcn</title>
        <meta name="description" content="Invisibles Barcelona" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
      <NavBar selectModal={(index)=>{setSelectedModal(index)}} showModal={()=>{setShowModal(true)}}/>
      <div id="carrusel">
      <Caroussel />
      </div>
      <Map icon={"../public/icons8-palacio-de-justicia-80.png"}/>
      {/* <button onClick={() => setShowModal(true)}>Open Modal</button> */}
        <Modal
          onClose={() => setShowModal(false)}
          show={showModal}
          title={modals[selectedModal].title}
        >
          {modals[selectedModal].description.map((text,index)=> {
            if(typeof text === "object"){return(
              <div>
              <br/>
              {text.map((item,index)=>{
                if(index===1){return(<a href={`mailto:${item}`}>{item}</a>)}
                return(<p key={index}>{item}</p>)
              })}
              </div>
            )}
            return(<p key={index}>{text}</p>)
            })}
        </Modal>
      </main>

      <footer className={styles.footer}>
        <span>
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </span>
      </footer>
    </div>
  )
}
