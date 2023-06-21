import React from "react";
import sendDataDB from "../../components/api/SupaBase";
import { useRouter } from "next/router";
import Calculatefunction from "../../components/UI-cards/Calculatefunction";
import NavBar from "../../components/nav-bar/NavBar";

import InputMask from "react-input-mask";
import styles from "./ticketStyles.module.css";

function BookingStep4(props) {
  const router = useRouter();

  async function confirmBooking() {
    const request = await fetch("https://bittersweet-painted-willow.glitch.me/fullfill-reservation", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: props.orderInfo.orderID }),
    });

    const response = await request.json();
    const message = response.message;

    const payload = {
      totalTickets: props.orderInfo.totalTickets,
      regTickets: props.orderInfo.regTickets,
      vipTickets: props.orderInfo.vipTickets,
      selectedArea: props.orderInfo.selectedArea,
      tentService: props.orderInfo.tentService,
      greenCamping: props.orderInfo.greenCamping,
      guestInfo: props.orderInfo.guests,
    };

    if (message === "Reservation completed") {
      router.push("/tickets/bookingStep4");
      await sendDataDB(payload);
    }

    if (message === "ID not found") {
      router.push("/tickets/bookingStep4");
    }
  }

  function cancelMethod() {
    router.push("/tickets/bookingStep2");
  }

  return (
    <div className={styles.fullBody}> 
      <NavBar />
      <h2 className={styles.zabi}>Payment Information</h2>
  
      <div>
      
       
       
        <form>
        <div className={styles.formGroup}>
          <div >
            <label className={styles.title2} >
              Card Number
              <InputMask className={styles.title}     required mask="9999 9999 9999 9999" maskChar={null} placeholder={"1234 1234 1234 1234"} name="cardNo" id="form-cardNo" onBlur={props.verify} />
            </label >
          </div>

          <div >
            <label className={styles.title2} htmlFor="form-name">
              Name On Card
              <input className={styles.title}  required type="text" name="name" id="form-name" placeholder="Eren Jæger" />
            </label >
          </div>
          </div>
          <div className={styles.formGroup1}>

          
          <div >
          
            <label className={styles.title2} >
              Expiry Date
              <InputMask className={styles.title00} required mask="99/99" maskChar={null} placeholder={"12/34"} name="expiry" id="form-expiry" onBlur={props.verify} />
            </label >
          </div>
          <div >
            <label className={styles.title22} >
              CVC Number
              <input required className={styles.title0000}  type="text" name="cvc" id="form-cvc" inputMode="numeric" maxLength="3" onBlur={props.verify} placeholder={123} />
            </label >
          </div>  </div>
          <div >
            <label className={styles.title2} >
              Email
              <input className={styles.title}  required type="email" name="email" id="form-email" onBlur={props.verify} placeholder={"Eren-Jæger@yahoo.dk"} />
            </label >
          </div>
          <div className={styles.formGroup1}>
          
          <div >
            <label className={styles.title2}  >
              Phone Number
              <InputMask className={styles.title} mask="99 99 99 99" maskChar={null} required type="text" name="phone" id="form-phone" placeholder={"01 23 45 67"} />
            </label >
          </div>
          <div className={styles.bailing}>
            <label className={styles.title2} >
              Billing Address
              <textarea className={styles.title00000}  required name="address" id="form-address" placeholder="Guldbergsgade 29N, 2200 København" />
            </label>
          </div>     </div>
        </form>
      </div>



      <Calculatefunction orderInfo={props.orderInfo} setOrderInfo={props.setOrderInfo} tentPrice={props.tentPrice} setUpPrice={props.setUpPrice} />

      <div className={styles.hero1}>
        <button onClick={cancelMethod}>Back</button>
        <button onClick={confirmBooking}>Confirm Payment</button>
      </div>
    </div>
  );
}

export default BookingStep4;
