import React from "react";
import NavBar from "../../components/nav-bar/NavBar";
import styles from "../tickets/ticketStyles.module.css";
import { Fireworks } from '@fireworks-js/react';

function ConfirmBooking() {
  return (
    <div>
      <NavBar />
  
      <div style={{ position: 'relative' }}>
      <Fireworks
      options={{
        rocketsPoint: {
          min: 0,
          max: 100
        }
      }}
      style={{
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        position: 'fixed',
        background: '#000'
      }}
    />
        <div
          className={styles.overlay} // Add a CSS class for overlay styles
        >
          <h5 >
            Thank you for your purchase. You will receive your tickets via email
          </h5>
        </div>
      </div>
    </div>
  );
}

export default ConfirmBooking;
