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

        <div className={styles.contentInfo}>
          <div className={styles.boxInfo}>
            <Image
              src="/foto1_min.png"
              width={300}
              height={300}
              className={styles.img}
              alt="foto"
            />
            <div>
              <h2>JUBANORPA</h2>
              <p>Focado no crescimento de jovens, transformando em líderes,
                atravez de temas atuais e mais complexos que talvez as igrejas locais não consigam abordar.</p>
            </div>
          </div>

          <div className={styles.boxInfo}>
            <Image
              src="/foto2_min.png"
              width={300}
              height={300}
              className={styles.img}
              alt="foto"
            />
            <div>
              <h2>JUBADOLES</h2>
              <p>Voltado a incentivar adolescentes a amar a igreja e querer estar em comunhão.
                Instruir adolescentes e incentivar ministérios a partir de uma linguagem atual e abordagem estimulante.</p>
            </div>
          </div>

          <div className={styles.boxInfo}>
            <Image
              src="/foto3_min.png"
              width={300}
              height={300}
              className={styles.img}
              alt="foto"
            />
            <div>
              <h2>JUBADOIS</h2>
              <p>Voltado para jovens casais que estão iniciando seu ministério como casal,
                transformando novos casais em referência, e disponibilizar um tempo de
                fortalecimento visando soluções bíblicas para desafios atuais.</p>
            </div>
          </div>

          <div className={styles.boxInfo}>
            <Image
              src="/foto4_min.png"
              width={300}
              height={300}
              className={styles.img}
              alt="foto"
            />
            <div>
              <h2>JUBAUNI</h2>
              <p>Voltado para jovens universitários, incentivando e capacitando a desenvolver e envolver-se em missões nas universidades.
                Abordar temas necessários e promover conversas de preparo e crescimento focadas
                nesse período da vida jovem.</p>
            </div>
          </div>

          <div className={styles.boxInfo}>
            <Image
              src="/foto5_min.png"
              width={300}
              height={300}
              className={styles.img}
              alt="foto"
            />
            <div>
              <h2>JUBASTAFF</h2>
              <p>Capacitar irmãos de igrejas da região para levantar e formar novas lideranças,
                resultando em novos ministérios de jovens e adolescentes em igrejas que não têm
                desenvolvido ou têm tido alguma dificuldade com o trabalho jovem.</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
