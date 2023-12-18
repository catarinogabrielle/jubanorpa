import styles from './page.module.scss'
import { FaInstagram, FaYoutube, FaWhatsapp } from "react-icons/fa"

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
          <text>Apoiamos o crescimento e desenvolvimento do jovem e adolescente
            dentro das igrejas Batista, dando o suporte para criação e manutenção
            de ministérios jovens no Noroeste do Paraná, e promovendo eventos de
            integração e comunhão entre as igrejas da região.</text>

          <div>
            <h2>Telefone:</h2>
            <p>(44) 99119-9282</p>
          </div>

          <div>
            <h2>Email:</h2>
            <p>jubanorpa.batista@gmail.com</p>
          </div>

          <nav className={styles.contentSocial}>
            <a href='https://www.instagram.com/jubanorpa/' target="_blank">
              <div style={{ backgroundColor: '#E8105F' }}>
                <FaInstagram color="#fff" size={26} />
              </div>
            </a>

            <a href='https://www.youtube.com/channel/UCxRvoPduZmvn-Il0kACE2xg' target="_blank">
              <div style={{ backgroundColor: '#fff' }}>
                <FaYoutube color="#f00" size={26} />
              </div>
            </a>

            <a href='https://api.whatsapp.com/send?phone=44991199282' target="_blank">
              <div style={{ backgroundColor: '#10e830' }}>
                <FaWhatsapp color="#fff" size={26} />
              </div>
            </a>
          </nav>
        </div>
      </main>
    </div>
  )
}
