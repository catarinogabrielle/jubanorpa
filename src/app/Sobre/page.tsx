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
            <p>Conheça um pouco mais sobre a Jubanorpa</p>
          </div>
        </div>

        <div className={styles.boxInfo}>
          <text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Nullam vitae augue suscipit neque tincidunt vulputate eget eu metus.</text>

          <h2>Nosso propósito:</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Nullam vitae augue suscipit neque tincidunt vulputate eget eu metus.
            Proin auctor libero semper sem venenatis imperdiet. Maecenas elit lorem,
            gravida a sapien nec, placerat vulputate urna. Suspendisse eu porttitor
            risus. Proin gravida facilisis velit, in consequat nisi commodo vitae.</p>

          <h2>Nossa visão:</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Nullam vitae augue suscipit neque tincidunt vulputate eget eu metus.
            Proin auctor libero semper sem venenatis imperdiet. Maecenas elit lorem,
            gravida a sapien nec, placerat vulputate urna. Suspendisse eu porttitor
            risus. Proin gravida facilisis velit, in consequat nisi commodo vitae.
            <br /><br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Nullam vitae augue suscipit neque tincidunt vulputate eget eu metus.
          </p>

          <Image
            src="/foto1.png"
            width={300}
            height={300}
            className={styles.foto}
            alt="logo"
          />
        </div>
      </main>
    </div>
  )
}
