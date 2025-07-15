'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import TestimonialCard from '@/components/TestimonialCard';
import styles from './Testimonials.module.css';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const testimonials = [
  {
    name: 'Bang Upin',
    title: 'Pedagang Asongan',
    avatar: '/avatar1.png',
    image: '/room.jpg',
    message:
      'Terimakasih banyak, kini ruanganku menjadi lebih mewah dan terlihat mahal',
  },
  {
    name: 'Siti Nurhaliza',
    title: 'Designer',
    avatar: '/avatar1.png',
    image: '/room.jpg',
    message:
      'Saya sangat puas dengan hasil desainnya! Ruangan terasa lebih nyaman dan elegan.',
  },
  {
    name: 'Agus Salim',
    title: 'Arsitek',
    avatar: '/avatar1.png',
    image: '/room.jpg',
    message:
      'Pelayanan luar biasa dan hasil melebihi ekspektasi saya. Sangat direkomendasikan!',
  },
  {
    name: 'Maya Fitri',
    title: 'Content Creator',
    avatar: '/avatar1.png',
    image: '/room.jpg',
    message:
      'Transformasi ruanganku benar-benar mengagumkan. Terima kasih tim yang hebat!',
  },
];

const Testimonials = () => {
  return (
    <section className={styles.wrapper}>
      <p className={styles.subtitle}>Testimonials</p>
      <h2 className={styles.title}>Our Client Reviews</h2>

      <button className={`${styles.navButton} ${styles.prev}`} id="custom-prev">
        <FaArrowLeft />
      </button>
      <button className={`${styles.navButton} ${styles.next}`} id="custom-next">
        <FaArrowRight />
      </button>

      <Swiper
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={32}
        slidesPerView={3}
        loop
        className={styles.swiper}
        navigation={{
          prevEl: '#custom-prev',
          nextEl: '#custom-next',
        }}
        // pagination={{ clickable: true }}
      >
        {testimonials.map((item, index) => (
          <SwiperSlide key={index}>
            <TestimonialCard {...item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
