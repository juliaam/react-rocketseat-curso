import styles from './Sidebar.module.css'
import { PencilLine } from "phosphor-react";

export function Sidebar() {
    return(
        <aside className={styles.sidebar}>
            <img 
              className={styles.cover} 
              src="https://images.unsplash.com/photo-1536104968055-4d61aa56f46a?q=100&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
            </img>
            <div className={styles.profile}>
                <img className={styles.avatar} src="https://avatars.githubusercontent.com/u/35346206?v=4" />

                <strong>Júlia Moraes</strong>
                <span>Web developer</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine size={20} />
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    )
}