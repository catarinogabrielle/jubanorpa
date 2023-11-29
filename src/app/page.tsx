import Image from 'next/image'
import Link from 'next/link'
import styles from './page.module.scss'

export default function Home() {
  return (
    <main className={styles.container}>
      <div id='Home' className={styles.content}>
        <div className={styles.box1}>
          <Image
            src="/logo.png"
            width={300}
            height={300}
            className={styles.logo}
            alt="logo"
          />
        </div>

        <div className={styles.box2}>
          <header className={styles.header}>
            <div className={styles.contentHeader}>
              <Link href='/'><h2>Home</h2></Link>
              <Link href='/Sobre'><h2>Sobre</h2></Link>
              <Link href='/Ministerios'><h2>Ministérios</h2></Link>
              <Link href='/Projetos'><h2>Projetos</h2></Link>
              <Link href='/Igrejas'><h2>Igrejas</h2></Link>
              <Link href='/Loja'><h2>Loja</h2></Link>
              <Link href='/Contato'><h2>Contato</h2></Link>
            </div>
          </header>

          <div className={styles.info}>
            <h1>ABOUT US</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
              in reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.</p>

            <button className={styles.button}>Fale conosco</button>
          </div>
        </div>
      </div>
    </main>
  )
}
