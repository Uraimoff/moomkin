import React from "react";

import Title from "../../../../components/Title/Title";

import img from "../../../../assets/images/img5.jpg";
import img2 from "../../../../assets/images/img3.jpg";



import styles from "./index.module.scss";
import "../../../../styles/_global.scss";
import BigSwiper from "../../../../components/Swipers/BigSwiper/BigSwiper";

const SuccessStories = () => {
  const obj = [
    {
      img: img,
      name: "Ne'matov Xurshid",
      position: "Tartle",
      job: "CEO",
      title:
        "We tried another company that one of our partners had used but they didn’t work out. I feel that SumatoSoft does a better investigation of what we’re asking for. They tell us how they plan to do a task and ask if that works for us. We chose them because their method worked with us.",
    },
    {
      img: img2,
      name: "Ne'matov Xurshid",
      position: "Tartle",
      job: "CEO",
      title: `The system has produced a significant competitive advantage in the industry thanks to SumatoSoft’s well-thought opinions. They shouldered the burden of constantly updating a project management tool with a high level of detail and were committed to producing the best possible solution.`,
    },
  ];
  return (
    <section className={styles.container}>
      <div className={`${styles.swiper} globalContainer`}>
        <Title title={"Success Stories To Inspire"} />
        <BigSwiper obj={obj}/>
      </div>
    </section>
  );
};

export default SuccessStories;
