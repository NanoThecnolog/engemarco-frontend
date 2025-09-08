import styles from './styles.module.scss'

export default function Statistics() {
    return (
        <section className={styles.container}>
            <div className={styles.centralContainer}>
                <div className={styles.item}>
                    <p className={styles.number}>80+</p>
                    <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, non debitis cupiditate totam, vero beatae fugiat impedit voluptate facere nulla perferendis nostrum accusantium enim sint eum nesciunt necessitatibus. Ipsa, accusamus.</p>
                </div>
                <div className={styles.item}>
                    <p className={styles.number}>40+</p>
                    <p className={styles.text}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi adipisci quas id unde illum laudantium praesentium corrupti consequuntur odit expedita. Beatae at placeat odit modi nesciunt. Repellendus dolorum provident animi?</p>
                </div>
                <div className={styles.item}>
                    <p className={styles.number}>98%</p>
                    <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic consequatur quo iste maiores totam eum? Ipsa autem sunt itaque natus vitae fugiat esse error, rerum maxime dicta sed fuga recusandae?</p>
                </div>
                <div className={styles.item}>
                    <p className={styles.number}>10+</p>
                    <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi ad, necessitatibus commodi voluptas ullam cum aliquid placeat consequuntur blanditiis possimus suscipit? Tenetur dolores porro tempora nulla ipsum doloribus, sit veritatis.</p>
                </div>
            </div>
        </section>
    )
}