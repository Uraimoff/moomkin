import React from "react";
import Title from "../../../../components/Title/Title";
import styles from "./index.module.scss";

import img1 from "../../../../assets/icons/expirtise.svg";
import img2 from "../../../../assets/icons/technology.svg";
import img3 from "../../../../assets/icons/location.svg";
import img4 from "../../../../assets/icons/english.svg";

import "./../../../../styles/_global.scss";
import SoftwareCard from "../../../../components/Cards/SoftwareCard/SoftwareCard";
const BuildSoftware = () => {
  const obj = [
    {
      img: img1,
      title: "EXPERTISE",
      subtitle:
        "Depending on the complexity of the tasks on your project, we attract the best specialists from the middle to senior level with the required tech and/or domain expertise.",
    },
    {
      img: img2,
      title: "TECHNOLOGY",
      subtitle:
        "Need Node.js, Ruby on Rails, .NET, Java, ReactJS, TypeScript,Python, C++, React native or native mobile developers to build your software? Just let us know the tech stack you are looking for.",
    },
    {
      img: img3,
      title: "LOCATION",
      subtitle:
        "Based on your requirements for location and timezone, we build an international team with developers from the USA, Poland, Georgia, Lithuania, Spain, and other countries.",
    },
    {
      img: img4,
      title: "COMMUNICATION",
      subtitle:
        "No barriers in communication thanks to the high proficiency of our team in English and fully transparent cooperation.",
    },
  ];
  return (
    <section
      className={`${styles.buildWrapper} globalContainer`}
      id="expertise"
    >
      <Title title={"Build Software Development Dream Team"} />
      <p className={styles.title}>
        We can build a team with any number of specialists, any expertise, for
        any period, and with a focus on your needs. A development team is built
        individually for your project following your requirements.
      </p>
      <div className={styles.cards}>
        {obj.map((item) => (
          <SoftwareCard
            img={item.img}
            subtitle={item.subtitle}
            title={item.title}
            clas={false}
          />
        ))}
      </div>
    </section>
  );
};

export default BuildSoftware;
