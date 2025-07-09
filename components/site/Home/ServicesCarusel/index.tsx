import React, { useState } from "react";
import styled from "styled-components";
import { montserrat } from "@styles/fonts";
import { Container, Row, Col } from "@styles/Grid";
import Image from "next/image";

type ItemType = {
  title: string;
  description: string;
  image: string;
};

const Wrapper = styled.div`
  margin: 40px auto;
  font-family: ${montserrat.style.fontFamily};
`;

const LeftSide = styled.div`
  border-radius: 20px;
  height: 568px;
  max-width: 620px;
  overflow: hidden;

  img {
    height: 100% !important;
    width: 100% !important;
  }
`;

const RightSide = styled.div`
  padding: 48px 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 32px;
`;

const Item = styled.div<{ $active: boolean }>`
  cursor: pointer;
  padding: 2px 27px;
  font-weight: 500;
  border-left: ${({ $active }) =>
    $active ? "3px solid #009688" : "3px solid #15141140"};
  color: ${({ $active }) => ($active ? "#000" : "#777")};
  transition: 0.3s ease;
`;

const ItemCart = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  cursor: pointer;

  &:hover {
    ${Item} {
      color: #000;
      border-left: 3px solid #009688;
    }
  }
`;

const DescriptionWrapper = styled.div`
  padding: 8px 0 16px 12px;
  border-left: 3px solid #009688;
  animation: fadeIn 0.3s ease;
  padding: 2px 27px;
  max-width: 550px;
  width: 100%;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-5px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const Description = styled.p`
  font-size: 15px;
  color: #444;
  line-height: 1.6;
  margin-top: 6px;
`;

const ServicesCarusel: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(1);

  const items: ItemType[] = [
    {
      title: "Camlı korkuluk",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum.",
      image: "/image1.jpg",
    },
    {
      title: "Elyaf sement plitələri",
      description:
        "Elyaf sement lövhəsi istehsalında sement, sellüloza, mineral dolgu maddələrinin isfadə olunduğu qeyriasbest texnologiyası (NT) isfadə olunmaqla  istehsal olunur. Fiber sement lövhələri binaların xarici üzlənməsi üçün müxtəlif iqlim şəraində kində geniş isfadə olunur. Elyaf sement plitələri, asbest-sement təbəqələrinə  bənzətməklə  aşağıdakı səthlərə sahib ola bilər: düz boyalı (RAL kataloğuna görə), toxumalı örtüklü və daş çiplərlə.",
      image: "/defaultservic.jpg",
    },
    {
      title: "Ofis ara bölmə",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vel pulvinar nunc.",
      image: "/image3.jpg",
    },
    {
      title: "Saçak kanopy",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non libero at metus.",
      image: "/image4.jpg",
    },
    {
      title: "Qatlanılan qapılar",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vel massa euismod, viverra risus.",
      image: "/image2.jpg",
    },
  ];

  const current = items[activeIndex];

  return (
    <Wrapper>
      <Container>
        <Row>
          <Col xs={12} sm={12} md={6} lg={6} xxl={6}>
            <LeftSide>
              <Image
                src={current.image}
                alt={current.title}
                width={600}
                height={500}
                style={{ width: "100%", height: "auto", objectFit: "cover" }}
              />
            </LeftSide>
          </Col>
          <Col xs={12} sm={12} md={6} lg={6} xxl={6}>
            <RightSide>
              {items.map((item, index) => (
                <ItemCart key={index}>
                  <Item
                    $active={activeIndex === index}
                    onClick={() => setActiveIndex(index)}
                  >
                    {item.title}
                  </Item>
                  {activeIndex === index && (
                    <DescriptionWrapper>
                      <Description>{item.description}</Description>
                    </DescriptionWrapper>
                  )}
                </ItemCart>
              ))}
            </RightSide>
          </Col>
        </Row>
      </Container>
    </Wrapper>
  );
};

export default ServicesCarusel;
