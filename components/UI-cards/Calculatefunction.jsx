import React from "react";
import Styles from "../UI-cards/calculate.module.css"
function CalculateFunction(props) {
  const { orderInfo } = props;

  const tentByStaff=299;

  const greenCamping=249 ; 
  const totalVIP = 1299 * orderInfo.vipTickets;
  const totalReg = 799 * orderInfo.regularTickets;
  const grandTotal = totalVIP + totalReg + 99+ greenCamping+tentByStaff;



  return (
    <div>
    <div className={Styles.tickets}>


      {orderInfo.vipTickets > 0 && (
        <section className={Styles.SideSection}>
          <div>
            <h3>{orderInfo.vipTickets > 1 ? "VIP tickets" : "VIP ticket"}{" "}X{" "}{orderInfo.vipTickets}={totalVIP}DKK</h3>
           
          </div>
        </section>
      )}

      {orderInfo.regularTickets > 0 && (
        <section className={Styles.SideSection}>
          <div>
            <h3>{orderInfo.regularTickets > 1 ? "Regular tickets" : "Regular ticket"}{" "}X{" "}{orderInfo.regularTickets}= {totalReg}DKK</h3>


          </div>
        </section>
      )}

      {orderInfo.selectedArea !== "" && (
        <section className={Styles.SideSection}>
          <h3>Camping Area:{orderInfo.selectedArea}</h3>
        </section>
      )}

      {orderInfo.tentByStaff && (
        <section className={Styles.SideSection}>
          <div>
            <h3>Tent set up:{tentByStaff}DKK </h3>

          </div>
        </section>
      )}

      {orderInfo.greenCamping && (
        <section className={Styles.SideSection}>
          <div>
            <h3>Green camping:{greenCamping}DKK</h3>

          </div>
        </section>
      )}

      <section className={Styles.SideSection}>
        <h3>Booking fee= 99 Dkk</h3>


      </section>

      <section className={Styles.SideSection}>
        <h3>Total={props.orderInfo.greenCamping === true && props.orderInfo.tentService === true ? (
          <h4>{grandTotal + props.tentPrice + props.setUpPrice},-</h4>
        ) : props.orderInfo.greenCamping === true ? (
          <h4>{grandTotal + props.tentPrice},-</h4>
        ) : props.orderInfo.tentService === true ? (
          <h4>{grandTotal + props.setUpPrice},-</h4>
        ) : (
          <h4>{grandTotal},-</h4>
        )}</h3>
        
      </section>
    </div></div>
  );
}

export default CalculateFunction;



