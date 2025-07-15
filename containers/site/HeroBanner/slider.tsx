"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Image from "next/image";
import "swiper/css";
import "swiper/css/navigation";
import styles from "./Slider.module.css";

const slides = [
  { id: 1, image: "/image1.jpg", alt: "Chair 1" },
  { id: 2, image: "/image2.jpg", alt: "Chair 2" },
  { id: 3, image: "/image3.jpg", alt: "Chair 3" },
  { id: 4, image: "/image4.jpg", alt: "Chair 4" },
  { id: 5, image: "/image1.jpg", alt: "Chair 1" },
  { id: 6, image: "/image2.jpg", alt: "Chair 2" },
  { id: 7, image: "/image3.jpg", alt: "Chair 3" },
  { id: 8, image: "/image4.jpg", alt: "Chair 4" },
];

function HeroBannerSlider() {
  return (
    <div className={styles["content-wrapper"]}>
      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={4}
        loop
        grabCursor
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id} style={{ maxWidth: "462px",   marginRight: "20px", }}>
            <div
              style={{
                position: "relative",
                width: "100%",
                height: "400px",
                borderRadius: "10px",
                overflow: "hidden",
                maxWidth: "462px",
             
              }}
              className="swiper-slide-image"
            >
              <Image
                src={slide.image}
                alt={slide.alt}
                
                style={{ objectFit: "cover" }}
               fill
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default HeroBannerSlider;
