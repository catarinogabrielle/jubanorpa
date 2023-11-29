import Image from 'next/image'
import styles from './page.module.scss'

import Header from '../components/header/page'

export default function Ministerios() {
  return (
    <div className={styles.container}>
      <Header />

      <main className={styles.content}>
        <div className={styles.boxHeader}>
          <div>
            <h1>Ministérios</h1>
            <p>Faça parte de nossos ministérios junto a sua igreja.</p>
          </div>
        </div>

        
      </main>
    </div>
  )
}
