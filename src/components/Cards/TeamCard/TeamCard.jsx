import React from "react";

import styles from "./index.module.scss";
const TeamCard = ({ img, first_name, last_name, position }) => {
  return (
    <section className={styles.teamCard}>
        <img src={img} alt="avatar" />
        <p>{first_name}</p>
        <p>{last_name}</p>
        <p>{position}</p>
    </section>
  )
};

export default TeamCard;
