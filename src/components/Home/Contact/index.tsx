import { FormEvent, useState } from 'react'
import styles from './styles.module.scss'
import { MdEmail } from 'react-icons/md'
import { FaPhoneAlt } from 'react-icons/fa'
import { contact } from '@/common/variables/contact'

export default function Contacts() {
    const [name, setName] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [tel, setTel] = useState<string>('')
    const [message, setMessage] = useState<string>('')

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
        return
    }
    return (
        <section className={styles.container} id='contato'>
            <div className={styles.title}>
                <h1>Contato</h1>
            </div>
            <div className={styles.infoContainer}>
                <div className={styles.infoText}>
                    <h3>Para mais informações ou solicitação de orçamentos, preencha o formulário abaixo que logo entraremos em contato.</h3>
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
            </div>
            <div className={styles.contentContainer}>
                <form className={styles.formContainer} onSubmit={handleSubmit}>
                    <h3>Formulário de Contato</h3>
                    <label>
                        <h4>Nome</h4>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </label>
                    <label>
                        <h4>Email</h4>
                        <input
                            type="text"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </label>
                    <label>
                        <h4>Telefone/Celular</h4>
                        <input
                            type="text"
                            value={tel}
                            onChange={(e) => setTel(e.target.value)}
                        />
                    </label>
                    <label>
                        <h4>Deixe uma mensagem</h4>
                        <textarea
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        />
                    </label>
                    <div className={styles.buttonContainer}>
                        <button type='submit'>Enviar</button>
                    </div>
                </form>
                <div className={styles.mapContainer}>
                    <iframe
                        src={contact.mapAddress}
                        width="100%"
                        height="100%"
                        loading="lazy"
                        allowFullScreen
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>
        </section>
    )
}