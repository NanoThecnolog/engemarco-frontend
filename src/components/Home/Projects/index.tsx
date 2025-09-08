import styles from './styles.module.scss'

export default function Projects() {
    return (
        <section className={styles.container}>
            <div className={styles.text}>
                <h1>Projetos</h1>
            </div>
            <div className={styles.projectsContainer}>
                <div className={styles.projectItem}>
                    <img src="/img/exemplo1.jpg" alt="exemplo" />
                    <p>texto sobre o projeto</p>
                </div>
                <div className={styles.projectItem}>
                    <img src="/img/exemplo1.jpg" alt="exemplo" />
                    <p>texto sobre o projeto</p>
                </div>
                <div className={styles.projectItem}>
                    <img src="/img/exemplo1.jpg" alt="exemplo" />
                    <p>texto sobre o projeto</p>
                </div>
                <div className={styles.projectItem}>
                    <img src="/img/exemplo1.jpg" alt="exemplo" />
                    <p>texto sobre o projeto</p>
                </div>
                <div className={styles.projectItem}>
                    <img src="/img/exemplo1.jpg" alt="exemplo" />
                    <p>texto sobre o projeto</p>
                </div>
            </div>
        </section>
    )
}