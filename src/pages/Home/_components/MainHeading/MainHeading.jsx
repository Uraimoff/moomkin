import React from "react";

import Title from "../../../../components/Title/Title";
import MainCard from "../../../../components/Cards/MainCard/MainCard";

import img1 from "../../../../assets/icons/mainIcon1.svg";
import img2 from "../../../../assets/icons/mainIcon2.svg";
import img3 from "../../../../assets/icons/mainIcon3.svg";
import img4 from "../../../../assets/icons/mainIcon4.svg";

import styles from "./index.module.scss";
import "../../../../styles/_global.scss";
const MainHeading = () => {
  const obj = [
    {
      img: img1,
      title: "IoT Solutions",
    },
    {
      img: img2,
      title: "Software Development",
    },
    {
      img: img3,
      title: "Startups Development",
    },
    {
      img: img4,
      title: "SaaS Development",
    },
  ];
  return (
    <section className={styles.mainHeading}>
      <div className={`${styles.titles} globalContainer`}>
        <h1>
          Software Development Company: <br /> We help companies to digitalize
          their businesses.
        </h1>
        <p>
          Properly set processes. Transparent cooperation. Predictable delivery.
        </p>
        <button className={styles.button}>CONTACT</button>
      </div>
      <div className={`${styles.resTitles} globalContainer`}>
        <Title title={"Software Development Company"} color={"#fff"} />
        <p>Let’s reveal your business potential with custom-made software.</p>
        {obj.map((item) => (
          <MainCard img={item.img} title={item.title} key={item.title} />
        ))}
      </div>
    </section>
  );
};

export default MainHeading;
