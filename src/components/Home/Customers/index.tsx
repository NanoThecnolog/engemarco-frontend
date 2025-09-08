import styles from './styles.module.scss'

export default function Customers() {
    return (
        <section className={styles.container}>
            <div className={styles.title}>
                <h1>Clientes</h1>
            </div>
            <div className={styles.customersContainer}>
                <div className={styles.customer}><img src="/img/exemplo1.jpg" alt="cliente 1" /></div>
                <div className={styles.customer}><img src="/img/exemplo1.jpg" alt="cliente 2" /></div>
                <div className={styles.customer}><img src="/img/exemplo1.jpg" alt="cliente 3" /></div>
                <div className={styles.customer}><img src="/img/exemplo1.jpg" alt="cliente 4" /></div>
                <div className={styles.customer}><img src="/img/exemplo1.jpg" alt="cliente 5" /></div>
                <div className={styles.customer}><img src="/img/exemplo1.jpg" alt="cliente 6" /></div>
            </div>

        </section>
    )
}