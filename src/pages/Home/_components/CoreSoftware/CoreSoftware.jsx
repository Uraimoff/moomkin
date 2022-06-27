import React from "react";
import SoftwareCard from "../../../../components/Cards/SoftwareCard/SoftwareCard";

import img1 from "../../../../assets/icons/IoT.svg";
import img2 from "../../../../assets/icons/Enterprise.svg";
import img3 from "../../../../assets/icons/MVP.svg";
import img4 from "../../../../assets/icons/Sass.svg";
import styles from "./Core.module.scss";
import "../../../../styles/_global.scss";
import Title from "../../../../components/Title/Title";
const CoreSoftware = () => {
  const obj = [
    {
      img: img1,
      title: "IoT Development",
      subtitle:
        "Building a business digital ecosystem to control and manage devices using the high-quality web and mobile IoT software.",
    },
    {
      img: img2,
      title: "Enterprise Software",
      subtitle:
        "Development of custom solutions, including robust ERP, CRM, HRM, automated billing, and payment systems.",
    },
    {
      img: img3,
      title: "MVP for Startups",
      subtitle:
        "Planning, designing, and developing MVPs for startups and small businesses ready to enter the market.",
    },
    {
      img: img4,
      title: "SaaS Solutions",
      subtitle:
        "Analyzing and engineering custom scalable SaaS products with 3rd party services integration.",
    },
  ];
  return (
    <>
      <section className={`${styles.coreContainer} globalContainer`} id="services">
        <Title title={"Our Core Software Development Expertise"} />
        <div className={styles.coreSoftware}>
          {obj.map((item) => (
            <SoftwareCard
              img={item.img}
              title={item.title}
              subtitle={item.subtitle}
              key={item.title}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default CoreSoftware;
