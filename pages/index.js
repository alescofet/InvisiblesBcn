import Head from "next/head";
import Image from "next/image";
import dynamic from "next/dynamic";
import { useState, useCallback, useEffect } from "react";
import styles from "../styles/Home.module.css";
import textStyle from "../styles/TextoTwo.module.css";
import NavBar from "../components/NavBar";
import Texto from "../components/Texto";
import TextoTour from "../components/TextoTour";
import TextoPAH from "../components/TextoPAH";
import Marquee from "../components/Marquee";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import EmailIcon from "@material-ui/icons/Email";
import Casas from "../components/Casas";

const useMediaQuery = (width) => {
  const [targetReached, setTargetReached] = useState(false);

  const updateTarget = useCallback((e) => {
    if (e.matches) {
      setTargetReached(true);
    } else {
      setTargetReached(false);
    }
  }, []);

  useEffect(() => {
    const media = window.matchMedia(`(max-width: ${width}px)`);
    media.addListener(updateTarget);

    // Check on mount (callback is not called until a change occurs)
    if (media.matches) {
      setTargetReached(true);
    }

    return () => media.removeListener(updateTarget);
  }, []);

  return targetReached;
};

export default function Home() {
  const mobile = useMediaQuery(600);
  const [showModal, setShowModal] = useState(false);
  const [selectedModal, setSelectedModal] = useState(0);

  const Map = dynamic(
    () => import("../components/Map"), // replace '@components/map' with your component's location
    {
      loading: () => <p>A map is loading</p>,
      ssr: false, // This line is important. It's what prevents server-side render
    }
  );

  return (
    <div className={styles.container}>
      <Head>
        <title>InvisiblesBcn</title>
        <meta name="description" content="Invisibles Barcelona" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div id="nav"></div>
      <NavBar
        selectModal={(index) => {
          setSelectedModal(index);
        }}
        showModal={() => {
          setShowModal(true);
        }}
      />

      <main className={styles.main} id="carrusel">
        <div className={styles.carrousel}>
          {/* <Caroussel /> */}
          <Image
            src={require("../public/carrusel.gif")}
            alt="Carrusel"
            layout="fill"
            objectFit="contain"
            sizes="70vw"
            className={styles.carrousel}
          />
        </div>
        <div id="map">
          <Map icon={"../public/icons8-palacio-de-justicia-80.png"} />{" "}
        </div>
        <Texto />
        <Marquee />
        <Casas />
        <div className={textStyle.text}>
          {mobile ? <div className={styles.agbar} id="tour"></div> : null}
          <TextoTour />
          {mobile ? (
            <div className={styles.sagradaFamilia} id="pah"></div>
          ) : null}
          <TextoPAH />
          {mobile ? <div className={styles.wela}></div> : null}
        </div>
      </main>
      <br />

      <footer className={styles.footer} id="contact">
        <p>
          <a href="http://">
            <FacebookIcon />
            Facebook
          </a>
          <a href="http://">
            <InstagramIcon />
            Instagram
          </a>
          <a href="http://">
            <TwitterIcon />
            Twitter
          </a>
          <a href="http://">
            <EmailIcon />
            Email
          </a>
        </p>
      </footer>
    </div>
  );
}
