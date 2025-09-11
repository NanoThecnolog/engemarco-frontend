import CountUp from 'react-countup'
import styles from './styles.module.scss'
import { statistics } from '@/common/variables/statistics'
import { motion } from 'framer-motion'

export default function Statistics() {
    const fadeIn = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 }
    }
    return (
        <section className={styles.container}>
            <div className={styles.centralContainer}>
                {
                    statistics.map((item, i) => (
                        <motion.div
                            key={i}
                            className={styles.item}
                            variants={fadeIn}
                            initial='hidden'
                            whileInView='visible'
                            transition={{ duration: .6, delay: i * 0.2 }}
                            viewport={{ once: true }}
                        >
                            <p className={styles.number}>
                                <CountUp
                                    end={item.end}
                                    suffix={item.suffix}
                                    duration={3}
                                    enableScrollSpy
                                    scrollSpyOnce
                                />
                            </p>
                            <p className={styles.text}>
                                {item.text}
                            </p>

                        </motion.div>
                    ))
                }

            </div>
        </section>
    )
}