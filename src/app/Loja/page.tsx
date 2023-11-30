import styles from './page.module.scss'
import Image from 'next/image'
import { IoIosWarning } from "react-icons/io"

import Header from '../components/header/page'

export default function Loja() {
  return (
    <div className={styles.container}>
      <Header />

      <div className={styles.contentInfo}>
        <div className={styles.warning}>
          <div>
            <h1>Em construção</h1>
            <IoIosWarning color="#CA054D" size={26} />
          </div>

          <Image
            src="/work.png"
            width={300}
            height={300}
            className={styles.img}
            alt="work"
          />

          <p>Estamos crescendo e em breve teremos novidades,
            não fique de fora, acompanhe todas as informações
            em nossas redes sociais.</p>
        </div>
      </div>
    </div>
  )
}
