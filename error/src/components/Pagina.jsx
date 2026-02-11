import React from 'react'

import styles from "./Pagina.module.css"

import video from "../videos/aranha.mp4"

export default function Pagina() {
  return (
    <>
    <div className={styles.cabecalho}>
        <p className={styles.logo}>logo.</p>
        <ul className={styles.lista}>
          <li>Início</li>
          <li>Sobre nós</li>
          <li>Blog</li>
          <li>Contato</li>
        </ul>
        <p className={styles.login}>Login</p>
      </div>
    <div className={styles.pagina}>
      
      <div className={styles.err_back}>
        <video className={styles.video} src={video} muted autoPlay></video>
        <div className={styles.err}>
          <p className={styles.quatro1}>4</p>
          <p className={styles.quatro2}>4</p>
        </div>
      </div>
    </div>
    </>
  )
}
