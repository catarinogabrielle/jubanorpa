"use client"

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from './page.module.scss'
import { FiMenu } from "react-icons/fi"
import { IoMdClose } from "react-icons/io"

export default function Header() {
  const [menu, setMenu] = useState(false)

  return (
    <>
      <header className={styles.headerContent}>
        <Image
          src="/logo-header.png"
          width={300}
          height={300}
          className={styles.logo1}
          alt="logo"
        />

        <nav onClick={() => setMenu(!menu)} className={styles.menu}>
          {menu ? (
            <IoMdClose color="#fff" size={26} />
          ) : (
            <FiMenu color="#fff" size={26} />
          )}
        </nav>
      </header>

      <header className={menu ? styles.header1 : styles.header2}>
        <div className={styles.contentHeader}>
          <Image
            src="/logo-header.png"
            width={300}
            height={300}
            className={styles.logo2}
            alt="logo"
          />

          <nav>
            <Link href='/'><h2>Home</h2></Link>
            <Link href='/Sobre'><h2>Sobre</h2></Link>
            <Link href='/Ministerios'><h2>Ministérios</h2></Link>
            <Link href='/Projetos'><h2>Projetos</h2></Link>
            <Link href='/Loja'><h2>Loja</h2></Link>
            <Link href='/Contato'><h2>Contato</h2></Link>
          </nav>
        </div>
      </header>
    </>
  )
}
