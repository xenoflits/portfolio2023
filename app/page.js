import Image from 'next/image'
import styles from './page.module.css'
import Main from './Main/main'
import Projects from './Projects/projects'
import Amazing from './Amazing/amazing'
import Contact from './Contact/contact'

export default function Home() {
  return (
    <div className={styles.main}>
      <Main/>
      <Projects/>
      <Amazing/>
      <Contact/>
    </div>
  )
}
