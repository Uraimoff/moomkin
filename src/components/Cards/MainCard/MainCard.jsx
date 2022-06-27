import React from 'react'

import styles from "./index.module.scss";
const MainCard = ({img,title}) => {
  return (
    <section className={styles.container}>
        <img src={img} alt="img" />
        <h6>{title}</h6>
    </section>
  )
}

export default MainCard