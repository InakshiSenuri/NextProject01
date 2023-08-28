import React from "react"
import Link from "next/link";
import styles from "./page.module.css"
const  Blog = () => {
  return (
    <div className= {styles.container}>
      
      <Link href="./">Main page</Link>
    </div>
  )
}

export default Blog;
