import Image from 'next/image'
import styles from './styles.module.scss'

export default function Owner() {
    return (
        <section className={styles.container}>
            <div className={styles.aboutContainer}>
                <div className={styles.textContainer}>
                    <h2>Sobre mim</h2>
                    <p>
                        Engenheiro civil com mais de <strong>10 anos de experiência</strong> em diversas áreas da engenharia.
                        Pós-graduado em <strong>perícias de engenharia</strong> com ênfase em manifestações patológicas,
                        <strong>avaliação de imóveis urbanos</strong> com ênfase no tratamento de dados por inferência estatística
                        e em <strong>engenharia elétrica</strong> com ênfase em eletrotécnica.
                        Iniciei minha trajetória em <strong>2014</strong> como engenheiro de campo atuando em obras que vão desde
                        o programa *Minha Casa Minha Vida* até <strong>condomínios residenciais e comerciais de alto padrão</strong>.
                        Após alguns anos de formado, resolvi alçar voos maiores atuando em <strong>obras pesadas</strong>, como
                        estações de tratamento de esgoto e barragens da Vale, entre outras.
                        Atualmente presto serviços para as <strong>justiças federal e estadual do Rio de Janeiro</strong> como
                        perito judicial, para escritórios de advocacia como <strong>assistente técnico especialista em engenharia civil</strong>
                        e realizo consultorias voltadas à <strong>engenharia de manutenção predial e industrial</strong>
                        (confiabilidade de ativos).
                    </p>
                </div>
                <div className={styles.imageContainer}>
                    <Image src={'/img/victor.jpg'} fill alt='Victor' />
                </div>
            </div>
        </section>
    )
}