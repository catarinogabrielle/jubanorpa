import Image from 'next/image'
import styles from './page.module.scss'

import Header from '../components/header/page'

export default function Sobre() {
  return (
    <div className={styles.container}>
      <Header />

      <main className={styles.content}>
        <div className={styles.boxHeader}>
          <div>
            <h1>Quem Somos</h1>
            <p>Conheça um pouco mais sobre a Jubanorpa.</p>
          </div>
        </div>

        <div className={styles.boxInfo}>
          <text>Assim que, se alguém está aem Cristo, bnova criatura é; as coisas cvelhas já passaram; eis que tudo se fez novo. (2 Coríntios 5:17)</text>

          <h2>Nosso propósito:</h2>
          <p>Ser uma ferramenta na semeadura do futuro da Igreja Batista no Norte do Paraná.</p>

          <h2>Nossa visão:</h2>
          <p>Nada excelente é feito SOZINHO. (Um ministério não é liderado sozinho.)</p>

          <Image
            src="/foto1.png"
            width={300}
            height={300}
            className={styles.foto}
            alt="foto"
          />
        </div>
      </main>
    </div>
  )
}
