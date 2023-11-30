"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from './page.module.scss'
import { FiMenu } from "react-icons/fi"
import { FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa"
import { IoMdClose } from "react-icons/io"

export default function Home() {
  const [menu, setMenu] = useState(false)

  return (
    <main className={styles.container}>
      <div id='Home' className={styles.content}>
        <div className={styles.box1}>
          <Image
            src="/logo1.png"
            width={300}
            height={300}
            className={styles.logo}
            alt="logo"
          />

          <nav onClick={() => setMenu(!menu)} className={styles.menu}>
            {menu ? (
              <IoMdClose color="#141414" size={26} />
            ) : (
              <FiMenu color="#141414" size={26} />
            )}
          </nav>
        </div>

        <div className={styles.box2}>
          <header className={menu ? styles.header1 : styles.header2}>
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

      <nav className={styles.contentSocial}>
        <a href='https://www.instagram.com/' target="_blank">
          <div>
            <FaInstagram color="#141515" size={22} />
          </div>
        </a>

        <a href='https://www.tiktok.com/pt-BR/' target="_blank">
          <div>
            <FaTiktok color="#141515" size={22} />
          </div>
        </a>

        <a href='https://www.youtube.com/' target="_blank">
          <div>
            <FaYoutube color="#141515" size={22} />
          </div>
        </a>
      </nav>
    </main>
  )
}
