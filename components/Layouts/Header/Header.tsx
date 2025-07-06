
import styled from "styled-components";
import { Container, Row, Col } from "@styles/Grid"; // Grid komponentin hardadırsa, ora uyğun yaz
import Link from "next/link";
import {montserrat} from "@styles/fonts"; 
import logo from  "@/public/logo.png";
import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";
import { SlArrowDown } from "react-icons/sl";
import LangDropdown from "./LangDropdown";
const HeaderWrapper = styled.header`
  width: 100%;
  padding:32px 0;
  background-color: #fff;
  border-bottom: 1px solid #e0e0e0;
  position: fixed;
  z-index: 1000;
  top: 0;
`;

const Logo = styled.div`
    display: flex;
    object-fit: cover;
    align-items: center;
    justify-content: center;
    margin-left: 100px;
    img {
      width: 100%;
      height: auto;
    }
    @media (max-width: 768px) {
      width: 100px; 
    }
      overflow: hidden;
    height: 40px;

`;

const Nav = styled.nav`
  display: flex;
  gap: 2rem;
    justify-content: center;
 font-family: ${montserrat.style.fontFamily};
  a {
    color: #111;
    text-decoration: none;
    font-weight: 500;
    font-size: 18px;
    line-height: 1.8;
    &:hover {
      color: ${({ theme }) => theme.colors.mainColor};
    }
  }

  @media (max-width: 768px) {
    display: none; // sadə responsive yanaşma
  }
`;

const RightActions = styled.div`
  display: flex;
  margin-right: 100px;
  justify-content: flex-end;
  align-content: center;
  gap: 1rem;
  font-family: ${montserrat.style.fontFamily};
`;

const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.mainColor};
  color: #fff;
  min-width: 90px;
  padding: 0.5rem 1rem 0.5rem 0.5rem ;
  height: 56px;
  border-radius: 28px;
  border: none;
  cursor: pointer;
  font-size: 0.9rem;
    display: flex;
    justify-content: center;
  align-items: center;
  &:hover {
    opacity: 0.9;
  }
`;

const WpIconWrapper = styled.span`
    width: 40px;
    height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 0.5rem;
  color:${({ theme }) => theme.colors.mainColor};
    font-size: 1.2rem;
    background-color: #fff;
    padding: 0.2rem;
    border-radius: 50%;
`;

const HeaderPadding = styled.div`
  height: 100px; // Header hündürlüyü qədər boşluq
  @media (max-width: 768px) {
    height: 60px; // Mobil cihazlar üçün daha az boşluq
  }
`;
// Page komponenti
export default function Header() {
  return (
    <>
       <HeaderPadding />
      <HeaderWrapper>
        <Container>
          <Row justify="space-between" align="center">
            <Col xs={4} md={2} xxl={2}>
            <Logo>  <Link href="/">
            <Image
                src={logo}         // və ya "/images/logo.png" (string kimi də ola bilər)
                alt="Lalasia Logo"
                width={120}
                height={40}
                priority           // yuxarıdakı şəkillər üçün faydalıdır
            />
            </Link></Logo>
            </Col>

            <Col xs={12} md={4} xxl={4}>
              <Nav>
                <Link href="/about">About us</Link>
                <Link href="/products">Products</Link>
                <Link href="/services">Services</Link>
                <Link href="/projects">Projects</Link>
              </Nav>
            </Col>

            <Col xs={12} md={4} xxl={4}>
                <RightActions>
                <LangDropdown />
                <Button><WpIconWrapper><FaWhatsapp /></WpIconWrapper> Bizimlə əlaqə saxla</Button>
                </RightActions>

            </Col>
          </Row>
        </Container>
      </HeaderWrapper>


    </>
  );
}
