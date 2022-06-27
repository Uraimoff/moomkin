import React from "react";
import FactsCard from "../../../../components/Cards/FactsCard/FactsCard";
import Title from "../../../../components/Title/Title";

import icon1 from "../../../../assets/icons/card_icon.svg";
import icon2 from "../../../../assets/icons/card_icon2.svg";
import icon3 from "../../../../assets/icons/card_icon3.svg";
import icon4 from "../../../../assets/icons/card_icon4.svg";
import icon5 from "../../../../assets/icons/card_icon5.svg";
import icon6 from "../../../../assets/icons/card_icon6.svg";

import styles from "./index.module.scss";
import "../../../../styles/_global.scss";
const SomeFacts = ({boolean=false}) => {
  const obj = [
    {
      img: icon1,
      title: "98%",
      subtitle: "Satisfaction rate",
    },
    {
      img: icon2,
      title: "20+",
      subtitle: "Successful projects",
    },
    {
      img: icon3,
      title: "Around the world",
      subtitle: "",
    },
    {
      img: icon4,
      title: "70%",
      subtitle: "Senior engineers",
    },
    {
      img: icon5,
      title: "15+",
      subtitle: "Team members",
    },
    {
      img: icon6,
      title: "3 Years",
      subtitle: "On the market",
    },
  ];
  return (
    <section className={`${styles.container} globalContainer`} id="numbers">
     <div hidden={boolean}> <Title title={"Some Facts"} /></div>
      <div className={styles.cards}>
        {obj.map((item) => (
          <FactsCard
            img={item.img}
            title={item.title}
            subtitle={item.subtitle}
            key={item.title}
          />
        ))}
      </div>
    </section>
  );
};

export default SomeFacts;
