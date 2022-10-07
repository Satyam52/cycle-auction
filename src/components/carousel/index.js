import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import { Skeleton, Divider, Avatar, Typography, Box } from "@mui/material";
import styles from "../topNew/style.module.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Navigation } from "swiper";

function getWindowSize() {
  const { innerWidth, innerHeight } = window;
  return { innerWidth, innerHeight };
}

export default function App() {
  const [windowSize, setWindowSize] = useState(getWindowSize());
  function handleWindowResize() {
    setWindowSize(getWindowSize());
  }

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <>
      <Typography
        // className={styles.title}
        style={{ marginTop: "20px" }}
        variant="h4"
      >
        Trending
      </Typography>
      {/* <Divider /> */}
      <Swiper
        slidesPerView={
          windowSize.innerWidth > 1100 ? 3 : windowSize.innerWidth > 600 ? 2 : 1
        }
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Navigation, Autoplay]}
        className="mySwiper"
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide>
          <img src="https://picsum.photos/2000/2000" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://picsum.photos/2000/2000" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://picsum.photos/2000/2000" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://picsum.photos/2000/2000" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://picsum.photos/2000/2000" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://picsum.photos/2000/2000" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://picsum.photos/2000/2000" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://picsum.photos/2000/2000" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://picsum.photos/2000/2000" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://picsum.photos/2000/2000" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
