import Head from 'next/head'
import Image from 'next/image'
import dynamic from 'next/dynamic'
import { useEffect } from 'react'
import styles from '../styles/Home.module.css'
import pah from "../informacionPAH.json"
import Caroussel from '../components/Caroussel'
import NavBar from '../components/NavBar'

export default function Home() {
  const Map = dynamic(
    () => import('../components/Map'), // replace '@components/map' with your component's location
    { 
      loading: () => <p>A map is loading</p>,
      ssr: false // This line is important. It's what prevents server-side render
    }
  )

  useEffect(() => {
    
    
  }, [])
  
  return (
    <div className={styles.container}>
      <Head>
        <title>InvisiblesBcn</title>
        <meta name="description" content="Invisibles Barcelona" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
      <NavBar />
      <Caroussel id="carrusel"/>
      <Map icon={"../public/icons8-palacio-de-justicia-80.png"}/>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
