import styles from './styles.module.scss'

export default function Apresentation() {
    return (
        <section className={styles.container}>
            <video
                className={styles.videoBackground}
                autoPlay
                loop
                muted
                playsInline
            >
                <source src="/video/timelapse.mp4" type="video/mp4" />
                Seu navegador não suporta vídeos em HTML5.
            </video>

            <div className={styles.overlay}></div>
            <div className={styles.content}>
                <div className={styles.logomarca}>
                    <img src="/img/LOGO.png" alt="Logomarca Engemarco" />
                    <h1>Engemarco Soluções</h1>
                    <p>Engenharia Legal e Diagnóstica</p>
                </div>
                <p>
                    Desde 2024, atuamos com qualidade, segurança e seriedade em obras, reformas, cálculos estruturais, avaliações de imóveis, perícias de engenharia civil e segurança do trabalho.
                    Hoje, somos reconhecidos e requisitados por empresas nacionais, multinacionais e tribunais de justiça do Rio de Janeiro.
                </p>
                <a href="#servicos" className={styles.cta}>
                    Conheça nossos serviços
                </a>
            </div>
        </section>
    )
}