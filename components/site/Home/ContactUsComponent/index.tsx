import React from 'react'
import styled from 'styled-components'
import { montserrat } from '@styles/fonts'
import { Container, Row, Col } from '@styles/Grid'
import { FaPhoneAlt } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import ContactUsForm from './form';
const Wrapper = styled.div`
 background-color: ${({ theme }) => theme.colors.contactUsComponent};
  font-family: ${montserrat.style.fontFamily};
    padding: 120px  80px;
  `
const SectionHeader = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin-bottom: 64px;

`;
const Title = styled.h2`
  color: ${({ theme }) => theme.colors.white};
  font-size: 40px;
  font-weight: 600;
  line-height: 48px;
    margin-top: 10px;
    margin-bottom: 64px;
`;
const SubTitle = styled.h4`
    color: ${({ theme }) => theme.colors.secondaryText};
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    letter-spacing: 20%;
    text-transform: uppercase;
`;

const ContactInfo = styled.div`
    display: flex;
    flex-direction: column;

`;
const ContactInfoHeader = styled.h3`
  color: ${({ theme }) => theme.colors.white};
  font-size: 40px;
  font-weight: 500;
  line-height: 48px;
  margin-bottom:24px;
`;
const ContactInfoText = styled.p`
  color: ${({ theme }) => theme.colors.white};
  opacity: 0.65;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  max-width: 480px;
  margin-bottom: 32px;
`;
const ContactInfoLinks = styled.a`
display: flex;
align-items: center;
gap: 20px;
color: ${({ theme }) => theme.colors.white};
font-weight: 400;
font-size: 16px;
line-height: 24px;
margin-bottom: 16px;
text-decoration: none;


`;
const ContactInfoLinksIcon = styled.div`
width: 32px;
height: 32px;
border: 1px solid white;
border-radius: 8px;
display: flex;
align-items: center;
justify-content: center;
color: white;

`;
const ContactInfoSubTitle = styled.h4`
margin-top:56px;
margin-bottom: 24px;
font-weight: 500;
font-size: 24px;
line-height: 32px;
liter-spacing: 3%;
color: ${({ theme }) => theme.colors.white};
`;
const ContactInfoIcons = styled.div`
width: 48px;
height: 48px;
border: 1px solid white;
border-radius: 50%;
background-color: ${({ theme }) => theme.colors.white};
color:${({ theme }) => theme.colors.mainColor};
display: flex;
align-items: center;
justify-content: center;
font-size: 24px;
`;
const ContactInfoWrapperIcons = styled.div`
    display: flex;
    gap: 32px;
`;
const ContactUsComponent = () => {
  return (
    <Wrapper>
    <Container>
        <SectionHeader>
        <SubTitle>Contact Us</SubTitle>
        <Title>Our Contacts</Title>
        </SectionHeader>
      <Row>
        <Col xxl={5} lg={5} sm={12} xs={12}>
         <ContactInfo>
           <ContactInfoHeader>Get in touch</ContactInfoHeader>
           <ContactInfoText>
            The industrial pendant lighting has adjustable wire with 
            max length 59 inch, you may adjust it to the preferred 
            length you may adjust it to the preferred length
           </ContactInfoText>
            <ContactInfoLinks href="tel:+994507518119">
               <ContactInfoLinksIcon><FaPhoneAlt /></ContactInfoLinksIcon>      <span>+994 50 751 81 19</span>
            </ContactInfoLinks>
            <ContactInfoLinks href="mailto:javidkarimov96@gmail.com">
                  <ContactInfoLinksIcon><HiMail  /></ContactInfoLinksIcon>    <span>javidkarimov96@gmail.com</span>
            </ContactInfoLinks>
            <ContactInfoSubTitle>Follow us</ContactInfoSubTitle>
            <ContactInfoWrapperIcons>
              
                <ContactInfoIcons><FaFacebook /></ContactInfoIcons>
             
              
                <ContactInfoIcons><FaInstagramSquare  /></ContactInfoIcons>
             
              
                <ContactInfoIcons><FaLinkedin /></ContactInfoIcons>
             
            </ContactInfoWrapperIcons>
         </ContactInfo>
        </Col>
        <Col xxl={7} lg={7} sm={12} xs={12}>
         <ContactUsForm/>
        </Col>
      </Row>
    </Container>
    </Wrapper>
  )
}

export default ContactUsComponent