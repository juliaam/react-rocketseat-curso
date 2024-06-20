import { Header } from "./components/Header/Header"
import { Post } from './components/Post/Post'
import { Sidebar } from './components/Sidebar/Sidebar'

import './globals.css';
import styles from './App.module.css'

function App() {

  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
        <Post author="Teste" content="Lorem Ipsum" />
        </main>
         </div>
    </>
  )
}

export default App
