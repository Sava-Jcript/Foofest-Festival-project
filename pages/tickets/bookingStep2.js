import React from "react";
import { useRouter } from "next/router";
import Calculatefunction from "../../components/UI-cards/Calculatefunction";
import TentSetUp from "../../components/UI-cards/TentSetUp";
import NavBar from "../../components/nav-bar/NavBar";
import styles from "../tickets/ticketStyles.module.css";

function BookingStep2(props) {
  const router = useRouter();

  const orderInfo = props.orderInfo; // Define orderInfo
  let tentPrice = 249;
  let setUpPrice;

  if (orderInfo.totalTickets <= 2) {
    setUpPrice = 299;
  } else if (orderInfo.totalTickets === 3) {
    setUpPrice = 399;
  } else if (orderInfo.totalTickets === 4) {
    setUpPrice = 598;
  } else if (orderInfo.totalTickets === 5) {
    setUpPrice = 798;
  } else if (orderInfo.totalTickets === 6) {
    setUpPrice = 1198;
  } else if (orderInfo.totalTickets === 7) {
    setUpPrice = 1398;
  } else if (orderInfo.totalTickets === 8) {
    setUpPrice = 1498;
  } else if (orderInfo.totalTickets === 9) {
    setUpPrice = 1698;
  } else {
    setUpPrice = 1898;
  }

  function nextStep() {
    router.push("/tickets/bookingStep3");
  }

  function CancelBook() {
    router.push("/tickets");
  }

  return (
    <div className={styles.fullBody}>
      <NavBar className={styles.bookingfee11} />
      <section className={styles.bookingfee}>
        <h2 className={styles.zaba}>Please Select Your Tent options</h2>
        <h3>The Staff Can Set The Tent For You</h3>
        <TentSetUp
          tentSetUp={props.tentSetUp}
          title={""}
          name={"TentSetup"}
          price={`${setUpPrice},-`} // Use setUpPrice variable
        />
        <p className="bookingfeeP">Environment Friendly Tents</p>
        <TentSetUp
          tentGreen={props.tentGreen}
          title={"Green Camping"}
          name={"TentGreen"}
          price={`${tentPrice},-`} // Use tentPrice variable
        />
      </section>
      <div className={styles.bookingfee1}>
        <Calculatefunction
          orderInfo={props.orderInfo}
          tentPrice={tentPrice} // Use tentPrice variable
          setUpPrice={setUpPrice} // Use setUpPrice variable
          title={props.title}
          description={props.description}
          price={props.price}
          tentSetUp={props.tentSetUp}
          tentGreen={props.tentGreen}
        />
      </div>
      <div className={styles.hero1}>
        <button className="secondary" onClick={CancelBook}>
          Back
        </button>
        <button className="primary" onClick={nextStep}>
          Continue to details
        </button>
      </div>
    </div>
  );
}

export default BookingStep2;
