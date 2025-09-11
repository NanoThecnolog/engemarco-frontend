import styles from './styles.module.scss'

export default function About() {
    return (
        <section className={styles.container} id='about'>
            <div className={styles.right}>
                <h2>Quem Somos</h2>
                <p>
                    Em 2024, surgiu a <strong>Engemarco Sociedade LTDA</strong>, com o objetivo de
                    atender seus clientes com qualidade e segurança. Aliando seriedade e
                    competência à alta qualidade dos serviços prestados, a empresa cresceu e
                    conquistou novos clientes.
                </p>
                <p>
                    Hoje, somos requisitados por empresas nacionais e multinacionais, bem como
                    pelos tribunais de justiça federal e estadual do Rio de Janeiro, para atividades
                    que vão desde obras e reformas até cálculos estruturais, avaliação de imóveis,
                    perícias de engenharia civil e segurança do trabalho.
                </p>
                <p>
                    Nosso compromisso é oferecer soluções completas e confiáveis em engenharia,
                    sempre priorizando a segurança, a inovação e a satisfação dos nossos clientes.
                </p>
            </div>
            <div className={styles.left}>

            </div>
        </section>
    )
}