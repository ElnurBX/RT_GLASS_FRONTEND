import React from "react";
import styled from "styled-components";
import Image from "next/image";
import { montserrat } from "@styles/fonts";
import { IoStarSharp } from "react-icons/io5";
type Props = {
  name: string;
  title: string;
  avatar: string;
  image: string; // room.jpg
  message: string;
};

const Card = styled.div`
  background-color: white;
  font-family: ${montserrat.style.fontFamily};
  color: black;
  width: 350px;
  height: 450px;
  padding: 21px;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 10px 10px rgba(255, 255, 255, 0.06);
  position: relative;
`;

const ImageWrapper = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  object-fit: cover;
  z-index: 0;
  top: 0;
  left: 0;
`;

const Info = styled.div`
  width: 312px;
  padding: 22px;
  text-align: center;
  background: black;
  color: white;
  border-radius: 30px;
  position: absolute;
  bottom: 24px;
  left: 21px;
  background: #181818;
`;

const AvatarWrapper = styled.div`
  position: absolute;
  top: -35px;
  left: 50%;
  transform: translateX(-50%);
  width: 70px;
  height: 70px;
  background-color: ${({ theme }) => theme.colors.black};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 10px rgba(23, 23, 23, 0.4);
`;

const AvatarImage = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  overflow: hidden;
`;

const Name = styled.h4`
  margin-top: 20px;
  margin-bottom: 4px;
  font-weight: 500;
  font-size: 16px;
  line-height: 1.2;
`;

const Title = styled.p`
  margin-top: 8px;
  font-weight: 400;
  font-size: 12px;
  opacity: 0.6;
`;

const Message = styled.p`
  font-weight: 400;
  font-size: 14px;
  opacity: 0.8;
  line-height: 20px;
    margin: 10px auto;
    text-align: center;
    max-width: 240px;
`;

const Stars = styled.div`
 font-size: 12px;
  margin-top: 5px;
  color: ${({ theme }) => theme.colors.starColor};
`;

const TestimonialCard = ({ name, title, avatar, image, message }: Props) => {
  return (
    <Card>
      <ImageWrapper>
        <Image
          src={image}
          alt="Room background"
          fill
          style={{ objectFit: "cover" }}
        />
      </ImageWrapper>
      <Info>
        <AvatarWrapper>
          <AvatarImage>
            <Image
              src={avatar}
              alt={name}
              width={60}
              height={60}
              style={{ objectFit: "cover" }}
            />
          </AvatarImage>
        </AvatarWrapper>
        <Name>{name}</Name>
        <Title>{title}</Title>
        <Message>“{message}”</Message>
        <Stars><IoStarSharp /><IoStarSharp /><IoStarSharp /><IoStarSharp /><IoStarSharp /></Stars>
      </Info>
    </Card>
  );
};

export default TestimonialCard;
