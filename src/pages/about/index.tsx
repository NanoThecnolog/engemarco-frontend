import Head from 'next/head'
import styles from './styles.module.scss'

export default function About() {
    return (
        <>
            <Head>
                <title>EngeMarco Soluções | Empresa de Engenharia Civil</title>
                <meta name="description" content="Somos uma empresa de Engenharia Civil especializada em avaliação de imóveis e perícias de engenharia." />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/img/logomarcaredesenhada.png" />
            </Head>
            <main className={styles.container}>
                <h2>
                    Quem Somos
                </h2>
                <p>
                    Em 2024, surgiu a Engemarco Sociedade LTDA., tendo como objetivo
                    servir seus clientes com qualidade e segurança. Aliando seriedade e
                    competência à alta qualidade dos serviços prestados, a empresa
                    cresceu e novos clientes surgiram. Hoje somos requisitados por
                    empresas nacionais e multinacionais, bem como os tribunais de justiça
                    federal e estadual no Rio de Janeiro para diversas atividades como,
                    obras, reformas, cálculos estruturais, avaliação de imóveis, perícias de
                    engenharia civil e segurança do trabalho etc.
                </p>
            </main>
        </>
    )
}