import { projects } from '@/common/variables/projects'
import styles from './styles.module.scss'
import Link from 'next/link'
import { useState } from 'react'
import ModalProject from '@/components/ui/modals/ModalProject'

interface ProjectProps {
    title: string;
    image: string;
    description: string;
}

export default function Projects() {
    const [open, setOpen] = useState(false)
    const [project, setProject] = useState<ProjectProps | null>(null)

    const handleClick = (p: ProjectProps): void => {
        setProject(p)
        setOpen(true)
    }
    return (
        <section className={styles.container} id='projetos'>
            <div className={styles.text}>
                <h1>Projetos</h1>
            </div>
            <div className={styles.projectsContainer}>
                {
                    projects.map((item, i) =>
                        <div key={i} className={styles.projectItem} onClick={() => handleClick(item)}>
                            <img src={item.image} alt={item.title} />
                        </div>
                    )
                }
            </div>
            <div className={styles.buttonContainer}>
                <Link href='/projects'>Ver mais projetos...</Link>
            </div>
            <ModalProject project={project} isOpen={open} onClose={() => setOpen(false)} />
        </section>
    )
}