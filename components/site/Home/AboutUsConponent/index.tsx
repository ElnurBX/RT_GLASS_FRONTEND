import { Container } from "@/styles/Grid";
import React from "react";
import styled from "styled-components";

const WIDTH = 1000;
const HEIGHT = 1000;

// SVG path koordinatlarını nisbətləşdiririk
const generatePath = (width: number, height: number) => {
  const px = (x: number) => (x / width).toFixed(4);
  const py = (y: number) => (y / height).toFixed(4);

  return `
    M ${px(110)} ${py(220)}
    A ${px(70)} ${py(70)} 0 0 1 ${px(180)} ${py(150)}
    L ${px(920)} ${py(240)}
    A ${px(70)} ${py(70)} 0 0 1 ${px(990)} ${py(300)}
    L ${px(990)} ${py(780)}
    A ${px(70)} ${py(70)} 0 0 1 ${px(940)} ${py(830)}
    L ${px(180)} ${py(950)}
    A ${px(70)} ${py(70)} 0 0 1 ${px(110)} ${py(880)}
    Z
  `;
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #eee;
`;

const ClippedBox = styled.div`
width: 664px;
height: 680px;
  background: url('/aboutus.png');
  background-size: 100% 90% ;
  background-repeat: no-repeat;

  background-position: center left;
  clip-path: url(#clip-shape);
  z-index: 2;
  position: absolute;
  left:0;
`;
const ClippedBox2 =  styled.div`
width: 1015px;
height: 875px;

  background: ${({ theme }) => theme.colors.mainColor || '#1eac82'};
  transform: rotateY(180deg);
  background-size: cover;
  background-position: center;
  clip-path: url(#clip-shape);
  z-index: 1;
  position: absolute;
  right: 0;
`;
const ContainerWrapper = styled.div`
width: 1200px;
  position: relative;
  display: flex;
  width: 100%;
  height: 100%;
`;

const TextBox = styled.div`
  
  z-index: 3;
  position: absolute;
  border-radius: 5%;
  height: 700px;
    width: 100%;
  max-width: 893px;
  right: 100px;
    top: 150px;
  display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  clip-path: polygon(0 10%, 100% 0, 100% 100%, 0 90%);
`;

const Title = styled.h2`
  font-size: 40px;
  width: 100%;
  max-width: 435px;
  line-height: 1.4;
  font-weight: 600;
  margin-bottom: 16px;

  @media (max-width: 768px) {
    font-size: 24px;
  }
    color: ${({ theme }) => theme.colors.white };
`;

const Subtitle = styled.p`
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
  margin-bottom: 24px;
  opacity: 0.8;
  color: ${({ theme }) => theme.colors.white };

`;

const Button = styled.button`
    height: 56px;
    width: 200px;
    font-size: 18px;
    line-height: 24px;
  background-color: white;
  color: ${({ theme }) => theme.colors.mainColor};
  border: none;
  padding: 12px 24px;
  border-radius: 10px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #fff;
  }
`;

const  ContentText = styled.div`
    max-width: 520px;
    width: 100%;
    text-align: left;
    margin-left:30%;
`;

const AboutUsComponent = () => {
  const path = generatePath(WIDTH, HEIGHT);

  return (
    <Container>
    <ContainerWrapper>
      <svg width="0" height="0">
        <defs>
          <clipPath id="clip-shape" clipPathUnits="objectBoundingBox">
            <path d={path} />
          </clipPath>
        </defs>
      </svg>
      <Wrapper>
        <ClippedBox />
      </Wrapper>
      <svg width="0" height="0">
        <defs>
          <clipPath id="clip-shape" clipPathUnits="objectBoundingBox">
            <path d={path} />
          </clipPath>
        </defs>
      </svg>
      <Wrapper>
        <ClippedBox2 >
         
        </ClippedBox2> 
        <TextBox>
            <ContentText>
            <Title>We Are Experts in Building Dreams</Title>
            <Subtitle>
              Construction is a general term meaning the art and science to form
              objects, systems, or organizations, and comes from Latin
              constructio and Old French construction.
            </Subtitle>
            <Button>Əlaqə saxlayın</Button>
            </ContentText>
          </TextBox>
      </Wrapper>
    </ContainerWrapper>
    </Container>
  );
};

export default AboutUsComponent;
