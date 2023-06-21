import React from "react";
import styles from "./BandsGenre.module.css";
import SingleBand from "./single-band/SingleBand";



function BandsGenre(props) {
  return (
    <article className={styles.container}>
      <h1 className={styles.header}>{props.genre}</h1>
      <ul className={styles.list}>
        {props.data.map((band) => {
          return (
            <SingleBand
              name={band.name}
              slug={band.slug}
              key={band.slug}
              logo={band.logo}
            ></SingleBand>
          );
        })}
      </ul>
    </article>
  );
}

export default BandsGenre;
