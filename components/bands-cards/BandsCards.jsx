import React from "react";
import Image from "next/image";
import styles from "./BandsCards.module.css";
import NavBar from "../nav-bar/NavBar";
import Footer from "../footer/footer";
import { useState } from "react";
import logo from "../../public/logo.svg";
import Link from "next/link";
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
    <section >
      <NavBar active="bands"></NavBar>
      <div>
        <div className={styles.zektion}>
      <Image className={styles.neonEffekt} src={newLogo} alt="logo"></Image></div>
        <div className="flex flex-col justify-center bg-primary1 h-screen w-full">
          <h1 className="text-accent1 font-main font-bold text-h1 mx-80 max-md:text-h3 ml-4 mb-2">Hello</h1>
          <br/>
          <p className="text-secondary1 font-secondary text-h5 mx-80  max-w-3xl max-md:text-big-body ml-4 mr-4 mx-auto">We’ve got a few options for bookings so why not let us help you find the right one for you. Start the process below, we promise its not a horrible experience..</p>
          <Link href="/tickets">  <button className="rounded-lg px-2 font-main font-bold text-big-body text-primary1 bg-accent2 mt-12 w-48 mx-80 max-md:text-big-body ml-4 mr-4 mx-auto w-36">
            Find Tickets
          </button></Link>
        </div>
        <div className="flex flex-col items-center justify-center bg-primary2 h-screen w-full">
          <h1 className="text-accent1 font-main font-bold text-h1 text-center mb-8 max-md:text-h3">Who are we?</h1>
          <br/>
          <p className="text-secondary1 font-secondary text-big-body text-center leading-10 mx-80 max-w-3xl max-md: ml-2 mr-2 ">Get ready to experience the ultimate music festival extravaganza with Foo Festival - where world-class artists, delicious food, and unforgettable moments come together in one epic weekend!</p>
        </div>
        <div className="flex flex-col items-center justify-center bg-primary1 h-screen w-full">
          <h1 className="text-accent1 font-main font-bold text-h2 text-center max-md:text-h4 ">VISIT OUR <span className="text-accent2">EVENT</span> PAGE FOR <br />BAND INFO <br />SCHEDULE <br />ETC</h1>
        </div>
        <Footer></Footer>
      </div>
    </section>
  );
}

export default Bands;
