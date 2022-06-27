import React from "react";
import styles from "./index.module.scss"
const SoftwareCard = ({ img, title, subtitle, clas=true }) => {
  return (
    <section className={clas ? styles.cardWrapper : styles.cardContainer}>
      <img src={img} alt="img"/>
      <h4>{title}</h4>
      <p>{subtitle}</p>
    </section>
  );
};

export default SoftwareCard;
