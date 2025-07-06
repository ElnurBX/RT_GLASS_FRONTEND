import { Container } from "@/styles/Grid";
import React from "react";
import styled from "styled-components";
import { montserrat } from "@styles/fonts";
import { FiArrowUpRight } from "react-icons/fi";
import HeroBannerSlider from "./slider";
const Title = styled.h1`
    color: ${({ theme }) => theme.colors.black};
    font-family: ${montserrat.style.fontFamily};
    font-size: 80px;
    text-align: center;
    margin-top: 48px;
    font-weight: 600;
    line-height: 1.2;
`;
const Subtitle = styled.h2`
    color: ${({ theme }) => theme.colors.black};
    opacity: 0.65;
    font-weight: 400;
    font-size: 20px;
    max-width: 736px;
    text-align: center;
    margin: 12px auto;
    font-family: ${montserrat.style.fontFamily};
`;
const ContactUsButton = styled.button`
    margin: 20px auto;
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
const HeroBannerWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
`;
const HeroBanner = () => {
    return (
    <section>
        <Container>
            <HeroBannerWrapper>
            <Title>Grow your users</Title>
            <Subtitle>
                Powerful, self-serve product and growth analytics to help you
                convert, engage, and retain more users. Trusted by over 4,000
                startups.
            </Subtitle>
            <ContactUsButton>
                <ButtonText>Bizimlə Əlaqə saxlayın</ButtonText>
                <ButtonIcon>
                
                <FiArrowUpRight />
                </ButtonIcon>
            </ContactUsButton>
            </HeroBannerWrapper>
            
        </Container>
        <HeroBannerSlider/>
        </section>
    );
};

export default HeroBanner;
