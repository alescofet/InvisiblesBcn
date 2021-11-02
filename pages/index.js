import Head from 'next/head'
import Image from 'next/image'
import dynamic from 'next/dynamic'
import { useState } from 'react'
import styles from '../styles/Home.module.css'
import Caroussel from '../components/Caroussel'
import NavBar from '../components/NavBar'
import Modal from '../components/Modal'
import Texto from '../components/Texto'
import modals from '../modals.json'

export default function Home() {

  const [showModal, setShowModal] = useState(false);
  const [selectedModal, setSelectedModal] = useState(0);  

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

      <NavBar selectModal={(index)=>{setSelectedModal(index)}} showModal={()=>{setShowModal(true)}}/>
      <main className={styles.main}>
      <div id="carrusel">
      <Caroussel />
      </div>
      <Map icon={"../public/icons8-palacio-de-justicia-80.png"}/>
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
        <Texto />
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
