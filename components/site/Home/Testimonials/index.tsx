'use client';

import React from 'react';
import styled from 'styled-components';
import TestimonialCard from './TestimonialCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

// Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Demo data
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
    name: 'Bang Upin',
    title: 'Pedagang Asongan',
    avatar: '/avatar1.png',
    image: '/room.jpg',
    message:
      'Terimakasih banyak, kini ruanganku menjadi lebih mewah dan terlihat mahal',
  },
  {
    name: 'Bang Upin',
    title: 'Pedagang Asongan',
    avatar: '/avatar1.png',
    image: '/room.jpg',
    message:
      'Terimakasih banyak, kini ruanganku menjadi lebih mewah dan terlihat mahal',
  },
  {
    name: 'Bang Upin',
    title: 'Pedagang Asongan',
    avatar: '/avatar1.png',
    image: '/room.jpg',
    message:
      'Terimakasih banyak, kini ruanganku menjadi lebih mewah dan terlihat mahal',
  },
];

// Styled Components
const Wrapper = styled.section`
  background-color: ${({ theme }) => theme.colors.mainColor };
  padding: 80px 0;
  color: white;
  text-align: center;
  position: relative;
`;

const Title = styled.h2`
  font-size: 40px;
  line-height: 1.2;
  font-weight: 600;
  margin-bottom: 16px;
`;

const Subtitle = styled.p`
  color: #1eac82;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 16px;
  line-height: 1.5;
  margin-bottom: 40px;
`;

const StyledSwiper = styled(Swiper)`
  width: 100%;
  max-width: 1100px;
  padding: 40px 0;
  margin: 0 auto;

  .swiper-slide {
    display: flex;
    justify-content: center;
  }

  .swiper-pagination-bullet {
    background: ${({ theme }) => theme.colors.secondaryText || '#1eac82'};
  }

  .swiper-button-prev,
  .swiper-button-next {
    display: none !important; /* hide default arrows */
  }
`;

const NavButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 20;
  background-color: ${({ theme }) => theme.colors.secondaryText || '#1eac82'};
  color: white;
  border: none;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &.prev {
    left: 375px;
  }

  &.next {
    right:375px;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const Testimonials = () => {
  return (
    <Wrapper>
      <Subtitle>Testimonials</Subtitle>
      <Title>Our Client Reviews</Title>

      <NavButton className="prev" id="custom-prev">
        <FaArrowLeft />
      </NavButton>
      <NavButton className="next" id="custom-next">
        <FaArrowRight />
      </NavButton>

      <StyledSwiper
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={32}
        slidesPerView={3}
        loop
      
        navigation={{
          prevEl: '#custom-prev',
          nextEl: '#custom-next',
        }}
        
      >
        {testimonials.map((item, index) => (
          <SwiperSlide key={index}>
            <TestimonialCard {...item} />
          </SwiperSlide>
        ))}
      </StyledSwiper>
    </Wrapper>
  );
};

export default Testimonials;
