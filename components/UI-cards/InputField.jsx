import React from "react";
import NumericInput from "react-numeric-input";
import styles from "./InputField.module.css";

function InputField(props) {
  return (
    <div  >
      <div className={styles.input1}>
        <h3>{props.title}</h3>
        <h3>{props.price}</h3>
      </div>
      <div className={styles.input2}>
         {props.title === "Regular" && <NumericInput className={styles.numeric} min={0} max={5} step={1} defaultValue={0} mobile onChange={props.updateRegularTickets} />}

        {props.title === "VIP" && <NumericInput className={styles.numeric} min={0} max={5} step={1} defaultValue={0} mobile onChange={props.updateVIPTickets} />}
      </div>
    </div>
  );
}
export default InputField;
