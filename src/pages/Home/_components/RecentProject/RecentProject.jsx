import React from "react";
import Title from "../../../../components/Title/Title";

import img1 from "../../../../assets/images/mehrigiyo.jpg";
import img2 from "../../../../assets/images/napa.png";
import img3 from "../../../../assets/images/kingbok.jpg";
import img4 from "../../../../assets/images/edcontrol.png";
import img5 from "../../../../assets/images/adliya_vazirligi.png";
import img6 from "../../../../assets/images/it-park.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar, A11y } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

import styles from "./index.module.scss";
import "../../../../styles/_global.scss";

const RecentProject = () => {
  const obj1 = [{ img: img1 }, { img: img2 }, { img: img3 }];
  const obj2 = [{ img: img4 }, { img: img5 }, { img: img6 }];
  const obj3 = [
    { img: img1 },
    { img: img2 },
    { img: img3 },
    { img: img4 },
    { img: img5 },
    { img: img6 },
  ];
  return (
    <section className={styles.container}>
      <div className={`${styles.wrapper} globalContainer`}>
        <Title title={"Recent Projects We Made"} />
        <Swiper
          style={{
            "--swiper-navigation-color": "gray",
          }}
          modules={[Navigation, Scrollbar, A11y]}
          spaceBetween={10}
          slidesPerView={1}
          loop={true}
          navigation
          scrollbar={{ draggable: true }}
        >
          <SwiperSlide>
            <div className={styles.images}>
              {obj1.map((item) => (
                <img src={item.img} alt="img" />
              ))}
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.images}>
              {obj2.map((item) => (
                <img src={item.img} alt="img" />
              ))}
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className={`${styles.wrapperLast} globalContainer`}>
        <Title title={"Recent Projects We Made"} />
        <Swiper
          style={{
            "--swiper-navigation-color": "gray",
          }}
          modules={[Navigation, Scrollbar, A11y]}
          spaceBetween={10}
          slidesPerView={1}
          loop={true}
          navigation
          scrollbar={{ draggable: true }}
        >
          <div className={styles.imagess}>
            {obj3.map((item) => (
              <SwiperSlide style={{textAlign: "center", paddingTop: "50px"}}>
                <img src={item.img} alt="img" width={250} height={250} />
              </SwiperSlide>
            ))}
          </div>
        </Swiper>
      </div>
    </section>
  );
};

export default RecentProject;
