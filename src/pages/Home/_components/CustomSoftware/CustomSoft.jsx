import React from "react";
import Title from "../../../../components/Title/Title";

import styles from "./Custom.module.scss";
import "../../../../styles/_global.scss";

import img1 from "../../../../assets/images/img1.jpg";
import img2 from "../../../../assets/images/img2.jpg";
import img3 from "../../../../assets/images/img3.jpg";
import img4 from "../../../../assets/images/img4.jpg";
import img5 from "../../../../assets/images/img5.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const CustomSoft = () => {
  const images = [
    { img: img1, name: "foto" },
    { img: img2, name: "foto" },
    { img: img3, name: "foto" },
    { img: img4, name: "foto" },
    { img: img5, name: "foto" },
  ];
  return (
    <section className={`globalContainer ${styles.customSoft}`}>
      <Title title={"Custom Software That Brings Value"} />
      <div className={styles.customWraper}>
        <p className={styles.title}>
          SumatoSoft, a software development company, helps to digitize
          businesses by focusing on client’s business challenges, needs, pain
          points and providing business-goals-oriented software solutions. We
          value close transparent cooperation and encourage our clients to
          participate actively in the project development life cycle. <br />
          <br /> - 150+ developed custom solutions <br /> - 100+ clients <br />-
          25+ countries, including the USA
        </p>
        <div className={styles.swiper}>
          <Swiper
            style={{
              "--swiper-navigation-color": "#fff",
              "--swiper-pagination-color": "#fff",
            }}
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={10}
            slidesPerView={1}
            loop={true}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
          >
            {images.map((item) => (
              <SwiperSlide>
                <img src={item.img} alt={item.name} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default CustomSoft;
