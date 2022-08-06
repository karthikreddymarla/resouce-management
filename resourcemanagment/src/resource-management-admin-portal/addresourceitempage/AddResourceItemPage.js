import React from "react";
import styles from "./AddResourceItemPage.module.css";
import InputItem from "./InputItem";
import { useNavigate } from "react-router-dom";

const AddResourceItemPage = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.add_resource_item_container}>
      <div className={styles.resource_item_container}>
        <div className={styles.anchor_container}>
          <p
            onClick={() => {
              navigate(-1);
            }}
          >
            Users
          </p>
        </div>
        <div className={styles.items_container}>
          <div className={styles.title_container}>
            <h3 className={styles.title}>Item Details</h3>
          </div>

          <InputItem name="ITEM NAME" />
          <InputItem name="LINK" />
          <InputItem name="RESOURCE NAME" />

          <div className={styles.input_container}>
            <label htmlFor="description">DESCRIPTION</label>
            <div>
              <textarea id="description" type="text"></textarea>
            </div>
          </div>
          <div className={styles.button_container}>
            <button className={styles.button}>CREATE</button>
          </div>
        </div>
      </div>
      <div className={styles.image_background}></div>
    </div>
  );
};

export default AddResourceItemPage;
