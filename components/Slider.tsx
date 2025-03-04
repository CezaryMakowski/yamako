"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import Image from "next/image";
import styles from "./Slider.module.css";
import { useState } from "react";
import { EffectCoverflow, Thumbs, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/thumbs";
export default function Slider() {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
  const gallery = [
    "/where/yamako_mapa.webp",
    "/where/yamako_entry.jpg",
    "/where/yamako_domofon.webp",
    "/where/yamako_mapa.webp",
    "/where/yamako_entry.jpg",
    "/where/yamako_domofon.webp",
    "/where/yamako_mapa.webp",
    "/where/yamako_entry.jpg",
    "/where/yamako_domofon.webp",
  ];

  return (
    <>
      <Swiper
        className={styles.mySwiper}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        modules={[Thumbs, EffectCoverflow, Autoplay]}
        slidesPerView={1}
        effect="coverflow"
        coverflowEffect={{
          rotate: 20,
          stretch: 0,
          depth: 300,
          modifier: 1,
          slideShadows: true,
        }}
        slideToClickedSlide
        breakpoints={{
          1024: {
            slidesPerView: 3,
          },
        }}
        // autoplay={{ delay: 3000 }}
        centeredSlides
      >
        {gallery.map((image, index) => (
          <SwiperSlide key={`slide-${index}`}>
            <Image
              src={image}
              className={styles.slide}
              alt={`obraz galerii${index}`}
              width={1500}
              height={1000}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        className={styles.mySwiperThumbs}
        onSwiper={setThumbsSwiper}
        modules={[Thumbs]}
        slidesPerView={"auto"}
        watchSlidesProgress
        spaceBetween={15}
      >
        {gallery.map((image, index) => (
          <SwiperSlide key={`slide-thumb${index}`} className={styles.thumb}>
            <Image
              src={image}
              className={styles.slide}
              alt={`miniaturka obrazu galerii${index}`}
              width={1500}
              height={1000}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
