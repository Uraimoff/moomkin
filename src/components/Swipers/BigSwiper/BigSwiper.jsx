import React from 'react';

import WorkersCard from "../../../components/Cards/WorkersCard/WorkersCard";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar, A11y } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

function BigSwiper({obj}) {
  return (
    <div>
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
          {obj.map((item) => (
            <SwiperSlide>
              <WorkersCard
                img={item.img}
                name={item.name}
                position={item.position}
                job={item.job}
                title={item.title}
              />
            </SwiperSlide>
          ))}
        </Swiper>
    </div>
  )
}

export default BigSwiper