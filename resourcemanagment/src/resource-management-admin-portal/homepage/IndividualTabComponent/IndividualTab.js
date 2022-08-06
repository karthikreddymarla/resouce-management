import React from "react";
import styles from "./IndividualTab.module.css";

const IndividualTab = (props) => {
  const { handle_event, tab_name, argument } = props;
  const handleOnClick = () => {
    handle_event(argument);
  };
  return (
    <div className={styles.tabs} onClick={handleOnClick}>
      {tab_name}
    </div>
  );
};

export default IndividualTab;
