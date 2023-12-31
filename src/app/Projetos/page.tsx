import Image from 'next/image'
import styles from './page.module.scss'

import Header from '../components/header/page'
import rows from '../JSON/projetos.json'
import Link from 'next/link'

export default function Projetos() {
  return (
    <div className={styles.container}>
      <Header />

      <main className={styles.content}>
        <div className={styles.title}>
          <h1>Nossos Projetos</h1>
        </div>

        <div className={styles.contentInfo}>
          {rows.data.map(item => (
            <div key={item.id} className={styles.card}>
              <div>
                <nav>
                  <h2>{item.title}</h2>
                  <p>{item.description}</p>
                </nav>
                <Link className={styles.button} href={'https://www.canva.com/design/DAF4M4Loxww/1skUEEp0E5Mx4cFzqE0Fhw/edit?utm_content=DAF4M4Loxww&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton '} target="_blank" rel="noopener noreferrer" locale={false}>
                  <text >Mais informações</text>
                </Link>
              </div>
              <Image
                src={item.img}
                width={300}
                height={300}
                className={styles.foto}
                alt="foto"
              />
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}
