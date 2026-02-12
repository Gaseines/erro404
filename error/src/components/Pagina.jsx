import React from "react";

import styles from "./Pagina.module.css";

import video from "../videos/aranha.mp4";
import esquerda from "../images/esquerda.png";

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
        <div className={styles.login}>
          <p >Login</p>
        </div>
      </div>
      <div className={styles.pagina}>
        <div className={styles.err_back}>
          <video className={styles.video} src={video} muted autoPlay></video>
          <div className={styles.err}>
            <p className={styles.quatro1}>4</p>
            <p className={styles.quatro2}>4</p>
          </div>
        </div>
        <div className={styles.aviso}>
          <div className={styles.av1_container}>
            <span>P</span>
            <span>á</span>
            <span>g</span>
            <span>i</span>
            <span>n</span>
            <span>a</span>
            <span> </span>
            <span>n</span>
            <span>ã</span>
            <span>o</span>
            <span> </span>
            <span>e</span>
            <span>n</span>
            <span>c</span>
            <span>o</span>
            <span>n</span>
            <span>t</span>
            <span>r</span>
            <span>a</span>
            <span>d</span>
            <span>a</span>
            <span>!</span>
          </div>
          <p className={styles.av2}>
            Parece que algo está errado. Ja estamos verificando
          </p>
          <div className={styles.btn_aviso}>
            <img src={esquerda} />
            <p>Voltar ao início</p>
          </div>
        </div>
      </div>
    </>
  );
}
