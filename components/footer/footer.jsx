import Image from "next/image";
import logo1 from "../../public/logo1.svg";
import Link from "next/link";
import { useState } from "react";
import styles from "./footer.module.css"

function Footer() {
 

  
    const [newLogo] = useState(logo1);

    return (
      <section className={styles.rectangle}>
      <div className={styles['my-class']}>
      
      
     <div className={styles.left}>
      <Link href="/bands" className={styles.logo}> 
          <Image src={newLogo} alt="logo" className={styles.image} />
        
        </Link> 
        <Link href="/tickets">
        <button className={styles.button}>Contact</button> 
        </Link>
     </div>
     
        <div className={styles.list}>
      <Link href="/lineup">
          <p className={styles.link}>Line-Up</p>
        </Link>
        <Link href="/schedule">
          <p className={styles.link}>Schedule</p>
        </Link>
        <Link href="/tickets">
          <p className={styles.link}>Get Tickets</p>
        </Link>
         
        </div>
       </div> 
       
  
      
    
  </section>);
  }

export default Footer;
