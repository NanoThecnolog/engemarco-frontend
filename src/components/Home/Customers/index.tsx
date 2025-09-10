import { customersLogos } from '@/common/variables/customers'
import styles from './styles.module.scss'

export default function Customers() {

    return (
        <section className={styles.container}>
            <div className={styles.title}>
                <h1>Clientes</h1>
            </div>
            <div className={styles.customersContainer}>
                {customersLogos.map(customer =>
                    <div key={customer.name} className={styles.customer}>
                        <img src={customer.src} alt={customer.name} />
                    </div>
                )}
            </div>
        </section>
    )
}