"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper";
import Image from "next/image";
import styles from "./Slider.module.css";
import { useEffect, useState } from "react";
import { EffectCoverflow, Thumbs } from "swiper/modules";
import expand from "@/public/expand.svg";
import "swiper/css";
import "swiper/css/thumbs";

type ZoomedImage = {
  src: string;
  alt: string;
} | null;
export default function Slider() {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
  const [zoomedImage, setZoomedImage] = useState<ZoomedImage>(null);
  const gallery = [
    { src: "/where/yamako_mapa.webp", alt: "mapa dojazdu" },
    { src: "/where/yamako_entry.jpg", alt: "wejście do gabinetu" },
    { src: "/where/yamako_domofon.webp", alt: "domofon" },
    { src: "/where/yamako_sesja_1.webp", alt: "przebieg sesji 1" },
    { src: "/where/yamako_sesja_2.webp", alt: "przebieg sesji 2" },
    { src: "/where/yamako_sesja_3.webp", alt: "przebieg sesji 3" },
  ];

  function Zoom({ image }: { image: ZoomedImage }) {
    if (!image) return null;
    return (
      <div
        className={styles.zoomedContainer}
        onClick={() => setZoomedImage(null)}
      >
        <Image
          className={styles.zoomedImage}
          src={image.src}
          alt={image.alt}
          width={1500}
          height={1000}
        />
      </div>
    );
  }

  useEffect(() => {
    console.log(zoomedImage);
  }, [zoomedImage]);

  return (
    <>
      <Swiper
        className={styles.mySwiper}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        modules={[Thumbs, EffectCoverflow]}
        slidesPerView={1}
        initialSlide={3}
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
        centeredSlides
      >
        {gallery.map((image, index) => (
          <SwiperSlide key={`slide-${index}`}>
            <div>
              <Image
                src={image.src}
                className={styles.slide}
                alt={image.alt}
                width={1500}
                height={1000}
              />
              <div
                className={styles.expand}
                onClick={() => setZoomedImage(image)}
              >
                <Image src={expand} alt="zwiększ" width={50} height={50} />
              </div>
            </div>
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
        centeredSlides
        initialSlide={2}
      >
        {gallery.map((image, index) => (
          <SwiperSlide key={`slide-thumb${index}`} className={styles.thumb}>
            <Image
              src={image.src}
              className={styles.slide}
              alt={image.alt}
              width={1500}
              height={1000}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <Zoom image={zoomedImage} />
    </>
  );
}
