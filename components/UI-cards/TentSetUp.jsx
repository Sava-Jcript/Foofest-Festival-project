import React from "react";
import Styles from "../UI-cards/calculate.module.css"
function TentSetUp(props) {
  return (
    <div>
      <div>
        <h3>{props.title}</h3>
        <h4>{props.subtitle}</h4>
        <p>{props.description}</p>
      </div>

      <div>
        <h3>{props.price}</h3>
        {props.name === "TentSetup" ? (
          <div>
            <input className={Styles.InputBox}
              name={props.name}
              type="checkbox"
              id="checkbox"
              checked={props.checked}
              onChange={props.tentSetUp}
            />
            <label htmlFor="checkbox"></label>
          </div>
        ) : (
          <div>
            <input className={Styles.InputBox}
              type="checkbox"
              id="checkbox2"
              checked={props.checked}
              onChange={props.tentGreen}
            />
            <label htmlFor="checkbox2"></label>
          </div>
        )}
      </div>
    </div>
  );
}

export default TentSetUp;
