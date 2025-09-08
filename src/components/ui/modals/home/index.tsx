import { IoIosCloseCircle } from 'react-icons/io'
import styles from './styles.module.scss'

interface ModalHomeProps {
    visible: (value: boolean) => void
}

export default function ModalHome({ visible }: ModalHomeProps) {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <div className={styles.text}>
                    <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum doloribus deserunt fuga, unde odio adipisci sunt aliquid.</h1>
                </div>
                <div className={styles.buttonContainer}>
                    <button>Solicite Orçamento</button>
                </div>
                <div className={styles.closeButton} onClick={() => visible(false)}>
                    <IoIosCloseCircle size={45} />
                </div>
            </div>
        </section>
    )
}