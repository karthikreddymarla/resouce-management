import React from "react";
import styles from "./Card.module.css";

const Card = ({
  id,
  icon_url,
  title,
  category,
  link,
  description,
  tag,
  handleClickCard,
}) => {
  const handleClick = () => {
    handleClickCard();
  };

  return (
    <div className={styles.card_container} onClick={handleClick}>
      <div className={styles.icon_title_container}>
        <div className={styles.icon_container}>
          <img className={styles.icon} src={icon_url} alt="image" />
        </div>
        <div className={styles.title_category_container}>
          <h4 className="title">{title}</h4>
          <p className="category">{category}</p>
        </div>
      </div>
      <div className={styles.link_container}>
        <a href="#">{link}</a>
      </div>
      <div className={styles.description_container}>
        <p href="#">{description}</p>
      </div>
    </div>
  );
};

export default Card;
