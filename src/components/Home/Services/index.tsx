import styles from './styles.module.scss'

export default function Services() {
    return (
        <section className={styles.container} id='servicos'>
            <div className={styles.title}>
                <h1>Serviços</h1>
            </div>
            <div className={styles.serviceContainer}>
                <div className={styles.serviceItem}>
                    <img src="/img/exemplo1.jpg" alt="service1" />
                    <h4>Serviço 1</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus error illum esse! Distinctio, atque dignissimos. Sint mollitia eum soluta neque voluptates, ex quam non consequatur cum itaque accusantium corporis eos?</p>
                </div>
                <div className={styles.serviceItem}>
                    <img src="/img/exemplo2.jpg" alt="service2" />
                    <h4>Serviço 2</h4>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor reiciendis necessitatibus adipisci beatae ab asperiores, unde dolore omnis ad accusantium laudantium soluta voluptatibus quisquam natus velit repellendus laborum harum! Doloremque.</p>
                </div>
                <div className={styles.serviceItem}>
                    <img src="/img/exemplo3.jpg" alt="service3" />
                    <h4>Serviço 3</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum ipsa cupiditate facere ad officiis dolores, deleniti, atque eius exercitationem suscipit soluta, unde aut natus eveniet vel fugit rerum non fuga.</p>
                </div>
            </div>
        </section>
    )
}