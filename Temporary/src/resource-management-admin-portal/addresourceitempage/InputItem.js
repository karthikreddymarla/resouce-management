import React from "react";
import styles from "./InputItem.module.css";

const InputItem = ({ name }) => {
  return (
    <div>
      <label htmlFor={name}>{name}</label>

      <div>
        <input id={name} type="text" />
      </div>
    </div>
  );
};

export default InputItem;
