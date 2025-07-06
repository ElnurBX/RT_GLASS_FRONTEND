import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/navigation';
import styled from 'styled-components';

const slides = [
  { id: 1, image: '/image1.jpg', alt: 'Chair 1' },
  { id: 2, image: '/image2.jpg', alt: 'Chair 2' },
  { id: 3, image: '/image3.jpg', alt: 'Chair 3' },
  { id: 4, image: '/image4.jpg', alt: 'Chair 4' },
  { id: 5, image: '/image1.jpg', alt: 'Chair 1' },
  { id: 6, image: '/image2.jpg', alt: 'Chair 2' },
  { id: 7, image: '/image3.jpg', alt: 'Chair 3' },
  { id: 8, image: '/image4.jpg', alt: 'Chair 4' },
];
const ContentWrapper = styled.div`
width: 100%;
margin: 0 auto;
padding: 10px 0;
position: relative;
&::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 20%;
  border-radius:0 0 50% 50% ;
  background: #fff;
  z-index:2;
}
  &::after {
  content: '';
  position: absolute;
  width: 100%;
  height: 20%;
    content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 20%;
  border-radius:50% 50% 0 0  ;
  background: #fff;
  z-index:2;
  }
`;

function HeroBannerSlider() {
  return (
    <ContentWrapper>
      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={4}
        loop={true}
        grabCursor={true}
   
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              style={{
                position: 'relative',
                width: '100%',
                height: '400px',
                borderRadius: '10px',
                overflow: 'hidden',
              }}
            >
              <Image
                src={slide.image}
                alt={slide.alt}
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </ContentWrapper>
  );
}

export default HeroBannerSlider;
