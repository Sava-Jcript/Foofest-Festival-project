import React from "react";
import Image from "next/image";
import styles from "./LineUp.module.css";

import BandsGenre from "./bands-genre/BandsGenre";
import NavBar from "../nav-bar/NavBar";
import { useState } from "react";
import logo from "../../public/logo.svg";

function Bands(props) {
  const [newLogo] = useState(logo);
  console.log(props.data);
  const rockArr = handleFilter("Rock");
  const punkArr = handleFilter("Punk");
  const soulArr = handleFilter("Soul");
  const countryArr = handleFilter("Country");
  const rapArr = handleFilter("Rap");
  const electronicArr = handleFilter("Electronic");
  const worldArr = handleFilter("World");
  const popArr = handleFilter("Pop");

  function handleFilter(genre) {
    const filterValue = genre;
    const filteredArray = [...props.data];
    return filteredArray.filter(filterByGenre);

    function filterByGenre(band) {
      if (band.genre === filterValue) {
        return band;
      } else {
        return 0;
      }
    }
  }

  return (
 
<div>
      <NavBar active="bands"></NavBar>
      
    
        <div className={styles.lineUp}> Line-Up</div>
      <div className={styles.bandz}>
      <BandsGenre genre="Country" data={countryArr} />
        <BandsGenre genre="Electronic" data={electronicArr} />
        <BandsGenre genre="Pop" data={popArr} />
        <BandsGenre genre="Punk" data={punkArr} />
        <BandsGenre genre="Rap" data={rapArr} />
        <BandsGenre genre="Rock" data={rockArr} />
        <BandsGenre genre="Soul" data={soulArr} />
        <BandsGenre genre="World" data={worldArr} />
      </div>
      </div>
 
  );
}

export default Bands;
