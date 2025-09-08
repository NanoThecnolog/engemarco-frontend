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

export default function Home() {
  const [modalVisible, setModalVisible] = useState<boolean>(false)
  return (
    <>
      <Head>
        <title>EngeMarco Soluções | Empresa de Engenharia Civil</title>
        <meta name="description" content="Somos uma empresa de Engenharia Civil especializada em avaliação de imóveis e perícias de engenharia." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/img/logomarcaredesenhada.png" />
      </Head>
      <main className={styles.container}>
        {
          /*engemarco solucoes de engenharia - sessões para fazer
        <ul>
          <li>apresentação rápida sobre a empresa</li>
          <li>serviços prestados</li>
          <li>métricas sobre a empresa (pericias, obras, satisfação, tempo de experiência, etc)</li>
          <li>principais projetos</li>
          <li>clientes</li>
          <li>formulário de contato com envio direto para o email</li>
        </ul>*/
        }

        <Apresentation />
        <About />

        <Statistics />

        <Services />

        <Projects />
        <Customers />

        {
          modalVisible && <ModalHome visible={setModalVisible} />
        }
      </main>
    </>
  );
}
