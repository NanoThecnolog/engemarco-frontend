import { FormEvent, useState } from 'react'
import styles from './styles.module.scss'

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
        <section className={styles.container}>
            <div className={styles.title}>
                <h1>Contato</h1>
            </div>
            <div>
                <form className={styles.formContainer} onSubmit={handleSubmit}>
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
                        <input
                            type="textarea"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        />
                    </label>
                    <div className={styles.buttonContainer}>
                        <button type='submit'>Enviar</button>
                    </div>
                </form>
                <div>
                    mapa
                </div>
            </div>
        </section>
    )
}