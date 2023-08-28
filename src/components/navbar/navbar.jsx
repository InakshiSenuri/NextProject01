"use client"

import React from "react"
import Link from "next/link";
import styles from "./navbar.module.css"


const links = [
  {
    id:"1",
    title : "home",
    url:"/",
  },
  {
    id:"2",
    title : "contact",
    url:"/contact",
  },
  {
    id:"3",
    title : "blog",
    url:"/blog",
  },
  {
    id:"4",
    title : "portofolio",
    url:"/portofolio",
  },
  {
    id:"5",
    title : "dashboard",
    url:"/dashboard",
  },
  {
    id:"6",
    title : "about",
    url:"/about",
  },


]

const  Navbar = () => {
  return (
    <div className={styles.container}>
        <div className={styles.logo}>Mamma Mia!</div>
        <div className={styles.links}>
        {links.map((link)=>(
          <Link key={link.id} href={link.url} className={styles.link}>{link.title}{" "}</Link>
        ))
        }
        <button onClick={()=>{console.log("logged out")}} className={styles.logout}>Logout</button>
        </div>
        
      </div>
  )
}

export default Navbar;

