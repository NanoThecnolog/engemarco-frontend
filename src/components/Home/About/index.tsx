import styles from './styles.module.scss'

export default function About() {
    return (
        <section className={styles.container} id='about'>
            <div className={styles.right}>
                <h2>Quem Somos</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla explicabo exercitationem nostrum et amet, commodi ducimus assumenda maxime corrupti voluptates doloremque voluptatem, quis dolore dolor! Et itaque deserunt eaque laborum!</p>
            </div>
            <div className={styles.left}></div>
        </section>
    )
}