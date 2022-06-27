import React from "react";
import styles from "./index.module.scss";
const WorkersCard = ({ img, name, position, job, title }) => {
  return (
    <section className={styles.container}>
      <div className={styles.workersAbout}>
        <img src={img} alt="avatar" />
        <p className={styles.name}>{name}</p>
        <p>{position}</p>
        <p>{job}</p>
      </div>
      <div className={styles.title}>{title}</div>
    </section>
  );
};

export default WorkersCard;
