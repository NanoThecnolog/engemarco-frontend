import { ReactNode, useEffect, useRef } from 'react'
import styles from './styles.module.scss'
import Apresentation from '@/components/Home/Apresentation'
import Image from 'next/image';

interface ChildrenProps {
    children?: ReactNode;
    image?: string;
}
export default function ParallaxSection({ children, image }: ChildrenProps) {
    const layer1Ref = useRef<HTMLImageElement>(null);
    const layer2Ref = useRef<HTMLImageElement>(null);
    const layer3Ref = useRef<HTMLImageElement>(null);
    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            if (layer1Ref.current) layer1Ref.current.style.transform = `translateY(${scrollY * 0.2}px)`;
            if (layer2Ref.current) layer2Ref.current.style.transform = `translateY(${scrollY * 0.4}px)`;
            if (layer3Ref.current) layer3Ref.current.style.transform = `translateY(${scrollY * 0.6}px)`;
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    return (
        <section className={styles.section}>
            {
                //<img ref={layer1Ref} src='/img/background/parallaxLayer1.avif' className={styles.layer} alt='Camada 1' />
                //<img ref={layer2Ref} src='/img/background/parallaxLayer2.jpg' className={styles.layer} alt='Camada 2' />
            }
            <img ref={layer3Ref} src={image ?? '/img/background/parallaxLayer3.jpg'} className={styles.layer} alt='Camada 3' />
            <div className={styles.content}>
                {children && children}
            </div>
        </section>
    )
}