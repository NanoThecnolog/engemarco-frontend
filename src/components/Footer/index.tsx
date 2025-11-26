import Link from 'next/link'
import styles from './styles.module.scss'
import { footerLinks } from '@/common/variables/footerLinks'
import { contact } from '@/common/variables/contact'
import { MdEmail } from 'react-icons/md'
import { FaInstagramSquare, FaLinkedin, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa'
import { useRouter } from 'next/router'
import { socialMedia } from '@/common/variables/socialMedia'
import React from 'react'

export default function Footer() {


    return (
        <footer className={styles.container}>
            <div className={styles.content}>
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
                        {contact.phone.map((tel, index) => <p key={index}>{tel}</p>)}
                    </div>
                    <div className={styles.contactItem}>
                        <FaMapMarkerAlt />
                        <p>{contact.address}</p>
                    </div>
                </div>
                <div className={styles.socialContainer}>
                    {socialMedia.map((item, i) =>
                        <React.Fragment key={i}>
                            {item.name === 'Instagram' && <FaInstagramSquare size={50} onClick={() => window.open(item.link, '_blank')} />}
                            {item.name === 'Linkedin' && <FaLinkedin size={50} onClick={() => window.open(item.link, '_blank')} />}
                        </React.Fragment>
                    )}
                </div>
            </div>
            <div className={styles.finalText}>
                <p>
                    @ 2025 Engemarco Engenharia. Compromisso com qualidade e excelência. Todos os Direitos Reservados.
                </p>
            </div>
        </footer>
    )
}