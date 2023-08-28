import React from "react"
import styles from "./page.module.css"
import Image from "next/image"
import MainImg from "public/main.jpg"

export default function Home() {
  return (
    <div className= {styles.container}>
      <div className={styles.box}>
        <h1 className={styles.topic}>Better Design for your digital products.</h1>
        <p className={styles.desc}>blah blah blah blah blah blah blah blah blah 
          blah blah blah blah blah blah blah blah blah</p>
          <button className={styles.butt}>See Our Work</button>
      </div>
      <div className={styles.box}>
      <Image src={MainImg} alt="main image" className={styles.image}/> 
      </div>
    </div>
  )
}
