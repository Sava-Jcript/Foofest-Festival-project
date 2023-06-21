import React from "react";
import styles from "./selection.module.css"

function SelectionAreaOptions(props) {
  return (
    <div className={styles.option1}>
      <select className={styles.option} onChange={props.selectedArea} name="select" id="select">
        <option value="choose" defaultValue>
           Camping area
        </option>
        <option value={props.selectOption1}>
          {props.selectOption1} ({props.selectOption1Space} available)
        </option>
        <option value={props.selectOption2}>
          {props.selectOption2} ({props.selectOption2Space} available)
        </option>
        <option value={props.selectOption3}>
          {props.selectOption3} ({props.selectOption3Space} available)
        </option>
        <option value={props.selectOption4}>
          {props.selectOption4} ({props.selectOption4Space} available)
        </option>
        <option value={props.selectOption5}>
          {props.selectOption5} ({props.selectOption5Space} available)
        </option>
      </select>
    </div>
  );
}

export default SelectionAreaOptions;
