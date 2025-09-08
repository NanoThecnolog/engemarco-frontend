import Link from 'next/link'
import styles from './styles.module.scss'
import { FiMenu, FiX } from 'react-icons/fi'
import { useState } from 'react'
import Image from 'next/image'

export default function Header() {
    const [isMobile, setIsMobile] = useState(false)

    const toggleMenu = () => setIsMobile(!isMobile)

    const menu: { href: string, text: string }[] = [
        { href: '/', text: 'Início' },
        { href: '/about', text: 'Quem Somos' },
        { href: 'projects', text: 'Projetos' },
        { href: '/jobs', text: 'Trabalhos' },
        { href: '/contact', text: 'Contato' }
    ]
    return (
        <nav className={styles.navContainer}>
            <div className={styles.logo}>
                <Image src='/img/LOGO.png' alt='Logomarca' fill />
            </div>
            <div className={styles.mobileIcon} onClick={toggleMenu}>
                {isMobile ? <FiX size={28} /> : <FiMenu size={28} />}
            </div>
            <div className={`${styles.menuContainer} ${isMobile ? styles.open : ''}`}>
                <ul className={styles.menu}>
                    {menu.map(item =>
                        <li key={item.text} className={styles.menuItem}>
                            <Link href={item.href}>{item.text}</Link>
                        </li>
                    )}
                </ul>
            </div>
        </nav>
    )
}