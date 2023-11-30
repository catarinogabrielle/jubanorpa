import Image from 'next/image'
import styles from './page.module.scss'

import Header from '../components/header/page'
import rows from '../JSON/projetos.json'

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
            <div className={styles.card}>
              <div>
                <nav>
                  <h2>{item.title}</h2>
                  <p>{item.description}</p>
                </nav>
                <button className={styles.button}>Mais informações</button>
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
