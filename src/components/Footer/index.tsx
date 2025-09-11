import Link from 'next/link'
import styles from './styles.module.scss'
import { footerLinks } from '@/common/variables/footerLinks'
import { contact } from '@/common/variables/contact'
import { MdEmail } from 'react-icons/md'
import { FaPhoneAlt } from 'react-icons/fa'

export default function Footer() {

    return (
        <footer className={styles.container}>
            <div className={styles.logoContainer}>
                <img src="/img/LOGO.png" alt="Logomarca EngeMarco" />
            </div>
            <div className={styles.linksContainer}>
                <ul className={styles.linksList}>
                    {footerLinks.map(item => (
                        <li key={item.text} className={styles.listItem}><Link href={item.href}>{item.text}</Link></li>
                    ))}
                </ul>
            </div>
            <div className={styles.contactContainer}>
                <div className={styles.contactItem}>
                    <MdEmail />
                    <p>{contact.email}</p>
                </div>
                <div className={styles.contactItem}>
                    <FaPhoneAlt />
                    <p>{contact.phone}</p>
                </div>
            </div>
        </footer>
    )
}