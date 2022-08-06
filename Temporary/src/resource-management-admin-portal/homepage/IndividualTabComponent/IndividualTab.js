import React from "react";
import styles from "./IndividualTab.module.css";

const IndividualTab = (props) => {
  const { func, name, fname } = props;
  const handleTabClic = () => {
    func(fname);
  };
  return (
    <div className={styles.tabs} onClick={handleTabClic}>
      {name}
    </div>
  );
};

export default IndividualTab;
