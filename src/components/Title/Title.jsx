import React from "react";
import styles from "./index.module.scss";
const Title = ({ title, color }) => {
  return (
    <section className={styles.titleWrapper}>
      <h4 className={styles.title} style={{ color: color }}>
        {title}
      </h4>
      <div></div>
    </section>
  );
};

export default Title;
