import React from "react"
import styles from "./footer.module.css"
import Image from "next/image";

const  Footer = () => {
  return (
    <div className={styles.container}>
      <div >All rights reserved </div>
      <div className={styles.imageContainer}>
        <Image src="/facebook-icon.png" width={15} height={15} className={styles.imageicon} alt="fb icon"/>
        <Image src="/instagram-icon.png" width={15} height={15} className={styles.imageicon} alt="in icon"/>
        <Image src="/twitter-icon.png" width={15} height={15} className={styles.imageicon} alt="tw icon"/>
        <Image src="/youtube-icon.png" width={15} height={15} className={styles.imageicon}  alt="yt icon"/>
      </div>
      
    </div>
  )
}

export default Footer;

