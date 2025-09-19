import { services } from '@/common/variables/services'
import styles from './styles.module.scss'

export default function Services() {
    return (
        <section className={styles.container} id='servicos'>
            <div className={styles.title}>
                <h1>Serviços</h1>
            </div>
            <div className={styles.serviceContainer}>
                {services.map((item, i) =>
                    <div key={i} className={styles.serviceItem}>
                        <img src={item.image} alt={item.title} />
                        <h2>{item.title}</h2>
                    </div>
                )}
            </div>
        </section>
    )
}