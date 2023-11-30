import styles from './page.module.scss'
import { FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa"

import Header from '../components/header/page'

export default function Contato() {
  return (
    <div className={styles.container}>
      <Header />

      <main className={styles.content}>
        <div className={styles.boxHeader}>
          <div>
            <h1>Nosso contato</h1>
            <p>Queremos te conhecer, entre em contato.</p>
          </div>
        </div>

        <div className={styles.boxInfo}>
          <text>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Nullam vitae augue suscipit neque tincidunt vulputate eget eu metus.</text>

          <div>
            <h2>Telefone:</h2>
            <p>(00) 00000-0000</p>
          </div>

          <div>
            <h2>Email:</h2>
            <p>email@gmail.com</p>
          </div>

          <div>
            <h2>Endereço:</h2>
            <p>algum endereço aqui!</p>
          </div>

          <nav className={styles.contentSocial}>
            <a href='https://www.instagram.com/' target="_blank">
              <div style={{ backgroundColor: '#E8105F' }}>
                <FaInstagram color="#fff" size={26} />
              </div>
            </a>

            <a href='https://www.tiktok.com/pt-BR/' target="_blank">
              <div style={{ backgroundColor: '#141515' }}>
                <FaTiktok color="#fff" size={26} />
              </div>
            </a>

            <a href='https://www.youtube.com/' target="_blank">
              <div style={{ backgroundColor: '#fff' }}>
                <FaYoutube color="#f00" size={26} />
              </div>
            </a>
          </nav>
        </div>
      </main>
    </div>
  )
}
