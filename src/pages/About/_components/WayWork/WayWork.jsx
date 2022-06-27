import React from "react";

import Title from "../../../../components/Title/Title";
import SoftwareCard from "../../../../components/Cards/SoftwareCard/SoftwareCard";
import { obj } from "./helpers";

import styles from "./index.module.scss";
import "../../../../styles/_global.scss";
const WayWork = () => {
  return (
    <section className={styles.container}>
      <div className={`${styles.wrapper} globalContainer`}>
        <Title title={"The Way We Work"} />
        <div className={styles.works}>
          {obj.map((item) => (
            <SoftwareCard
              img={item.img}
              title={item.title}
              subtitle={item.subtitle}
              clas={false}
              key={item.title}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WayWork;
