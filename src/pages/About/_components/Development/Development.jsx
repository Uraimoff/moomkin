import React from "react";

import img from "../../../../assets/icons/dev.svg";
import styles from "./index.module.scss";
import "../../../../styles/_global.scss";
const Development = () => {
  return (
    <section className={styles.container}>
      <div className={`${styles.wrapper} globalContainer`}>
        <p className={styles.title}>
          The SumatoSoft software development company delivers IT solutions and
          services to established companies that need tailored software for
          further business growth. With a deep understanding of modern
          technologies, transparent processes, and strong expertise in business
          domains, we implement comprehensive projects and deliver high-end web,
          mobile, IoT, and SaaS solutions. <br /> <br /> SumatoSoft stands out
          in the background of its competitors since it has managed to become a
          technological partner for its clients. The partner, who delves into a
          client’s business challenges, needs, and pain points and provides
          upscale software solutions that fully meet those needs and all
          requirements.
        </p>
        <div className={styles.about}>
          <h4>Business Development <br /> Office</h4>
          <p>One Boston Place, Suite 2602 <br /> Boston, MA 02108,<br /> United States</p>
        </div>
          <img src={img} alt="img" style={{backgroundColor: "#005688"}}/>
      </div>
    </section>
  );
};

export default Development;
