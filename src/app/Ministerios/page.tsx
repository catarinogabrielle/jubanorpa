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
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Nullam vitae augue suscipit neque tincidunt vulputate eget eu metus.
                Proin auctor libero semper sem venenatis imperdiet. Maecenas elit lorem,
                gravida a sapien nec, placerat vulputate urna. Suspendisse eu porttitor
                risus. Proin gravida facilisis velit, in consequat nisi commodo vitae.</p>
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
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Nullam vitae augue suscipit neque tincidunt vulputate eget eu metus.
                Proin auctor libero semper sem venenatis imperdiet. Maecenas elit lorem,
                gravida a sapien nec, placerat vulputate urna. Suspendisse eu porttitor
                risus. Proin gravida facilisis velit, in consequat nisi commodo vitae.</p>
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
              <h2>Connect</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Nullam vitae augue suscipit neque tincidunt vulputate eget eu metus.
                Proin auctor libero semper sem venenatis imperdiet. Maecenas elit lorem,
                gravida a sapien nec, placerat vulputate urna. Suspendisse eu porttitor
                risus. Proin gravida facilisis velit, in consequat nisi commodo vitae.</p>
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
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Nullam vitae augue suscipit neque tincidunt vulputate eget eu metus.
                Proin auctor libero semper sem venenatis imperdiet. Maecenas elit lorem,
                gravida a sapien nec, placerat vulputate urna. Suspendisse eu porttitor
                risus. Proin gravida facilisis velit, in consequat nisi commodo vitae.</p>
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
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Nullam vitae augue suscipit neque tincidunt vulputate eget eu metus.
                Proin auctor libero semper sem venenatis imperdiet. Maecenas elit lorem,
                gravida a sapien nec, placerat vulputate urna. Suspendisse eu porttitor
                risus. Proin gravida facilisis velit, in consequat nisi commodo vitae.</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
