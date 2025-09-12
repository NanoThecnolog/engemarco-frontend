import styles from './styles.module.scss'
import { IoIosCloseCircle } from "react-icons/io"

interface Project {
    title: string
    image: string
    description: string
}

interface ModalProps {
    project: Project | null
    isOpen: boolean
    onClose: () => void
}

export default function ModalProject({ project, isOpen, onClose }: ModalProps) {
    if (!isOpen) return null

    return (
        <div className={styles.overlay}>
            {project &&
                <div className={styles.modal}>
                    <button className={styles.closeButton} onClick={onClose}>
                        <IoIosCloseCircle size={50} />
                    </button>

                    <img
                        src={project.image}
                        alt={project.title}
                        className={styles.image}
                    />

                    <div className={styles.content}>
                        <h2>{project.title}</h2>
                        {
                            //<p>Descrição do projeto:{project.description}</p>
                        }
                    </div>
                </div>
            }

        </div>
    )
}
