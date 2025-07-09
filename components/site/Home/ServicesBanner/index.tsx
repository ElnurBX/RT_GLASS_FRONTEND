import React from 'react'
import { Container , Row, Col } from '@styles/Grid'
import styled from 'styled-components'
import { FiArrowUpRight } from 'react-icons/fi';
import { montserrat } from '@styles/fonts'
import Image from 'next/image'
const Wrapper = styled.div`
  margin: 40px auto;
  font-family: ${montserrat.style.fontFamily};
  `;
  const LeftSide = styled.div`
    display: flex;
    flex-direction: column;
    
  `;
  const Title = styled.h2`
    color:${({ theme }) => theme.colors.black};
    font-size: 64px;
    font-weight: 600;
    line-height: 80px;
    margin-top:40px;
  `;
  const Description = styled.p`
    font-size: 20px;
    color: ${({ theme }) => theme.colors.black};
    opacity: 0.65;
    font-weight: 400;
    line-height: 32px;
    margin-top: 24px;
    max-width: 560px;
  `;
const ContactUsButton = styled.button`
    margin:46px 0 50px;
    color: #fff;
    min-width: 90px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    height: 52px;
    display: flex;
    background-color: #fff;
`;
const ButtonText = styled.span`
    background-color: ${({ theme }) => theme.colors.mainColor};
    border-radius: 26px;
    font-family: ${montserrat.style.fontFamily};
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;
    font-weight: 500;
    color: #fff;
    padding: 1rem 2rem;
    line-height: 20px;
    text-align: center;
    position: relative;
    &::before {
        content: "";
        width: 27px;
        height: 22px;
        position: absolute;
        top: calc(50% - 11px);
        right: -13px;
        background: ${({ theme }) => theme.colors.mainColor};
    }
`;
const ButtonIcon = styled.span`
    color: #fff;
    font-size: 25px;
    background-color: ${({ theme }) => theme.colors.mainColor};
    padding: 7px;
    display: flex;
    align-items: center;
    justify-content: center;
    align-self: center;
    width: 52px;
    height: 52px;
    border-radius: 50%;
`;
const RightSide = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;

`;
const ServicesBanner = () => {
  return (
    <Wrapper>
      <Container>
        <Row>
          <Col xs={12} sm={6} xxl={6}>
            <LeftSide>
              <Title>Xidmətlərimiz</Title>
              <Description>The industrial pendant lighting has adjustable wire with max length 59 inch, you may adjust it to the preferred length you may adjust it to the preferred length </Description>
               <ContactUsButton>
                              <ButtonText>Bizimlə Əlaqə saxlayın</ButtonText>
                              <ButtonIcon>
                              
                              <FiArrowUpRight />
                              </ButtonIcon>
                          </ContactUsButton>
            </LeftSide>
          </Col>
          <Col xs={12} sm={6} xxl={6}>
           <RightSide>
            <Image src="/servicespage.png" alt="Services Image" width={500} height={500} />
           </RightSide>
          </Col>
        </Row>
      </Container>
    </Wrapper>
  )
}


export default ServicesBanner;