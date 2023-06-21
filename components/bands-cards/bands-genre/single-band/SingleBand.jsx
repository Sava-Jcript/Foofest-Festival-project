import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./SingleBand.module.css";




function SingleBand(props) {
  const serverUrl1 = "https://bittersweet-painted-willow.glitch.me";
  
  return (
    <li>
      <Link href={`/bands/${props.slug}`} className={styles.wrapper}>
        <h2>{props.name}</h2>
        <Image className={styles.img} alt={props.slug} src={props.logo.includes("http") ? props.logo : `${serverUrl1}/logos/${props.logo}`} width="256" height="256" />
    
      </Link>
    </li>
  );
}

export default SingleBand;
