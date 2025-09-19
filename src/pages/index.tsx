import Head from "next/head";
import styles from "@/styles/Home.module.scss";
import ParallaxSection from "@/components/ui/Parallax";
import ModalHome from "@/components/ui/modals/home";
import { useState } from "react";
import Header from "@/components/Header";
import Apresentation from "@/components/Home/Apresentation";
import About from "@/components/Home/About";
import Services from "@/components/Home/Services";
import Projects from "@/components/Home/Projects";
import Customers from "@/components/Home/Customers";
import Statistics from "@/components/Home/Statistics";
import Contacts from "@/components/Home/Contact";
import { NextSeo } from "next-seo";
import { homeSEO } from "@/common/SEO/home";

export default function Home() {
  const [modalVisible, setModalVisible] = useState<boolean>(false)

  const imgBGParallax = '/img/background/parallax-image1.jpeg';

  return (
    <>
      {/*<Head>
        <title>EngeMarco Soluções | Empresa de Engenharia Civil Legal e Diagnóstica</title>
        <meta name="description" content="Somos uma empresa de Engenharia Civil especializada em avaliação de imóveis e perícias de engenharia." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/img/logomarcaredesenhada.png" />
      </Head>*/}

      <main className={styles.container}>
        <div className={styles.bgFixed}>
          <img src={imgBGParallax} alt="fundo" />
        </div>
        <div className={styles.pageContent}>
          <Apresentation />
          <About />
          <Statistics />
          <Services />
          <Projects />
          <Customers />
          <Contacts />
        </div>
        {
          modalVisible && <ModalHome visible={setModalVisible} />
        }
      </main>
    </>
  );
}
