import React from "react";

import styles from "./index.module.scss";
const FactsCard = ({ img, title, subtitle }) => {
  return (
    <section className={styles.container}>
      <img src={img} alt="img" />
      <div>
        <h4>{title}</h4>
        <p>{subtitle}</p>
      </div>
    </section>
  );
};

export default FactsCard;
