"use client";
import AboutUsComponent from "@/components/site/Home/AboutUsConponent";
import FAQComponent from "@/components/site/Home/FAQComponents";
import HeroBanner from "@/components/site/Home/HeroBanner";
import Testimonials from "@/components/site/Home/Testimonials";
import Test from "@/components/site/test/test";
import styled from "styled-components";

const Title = styled.h1`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 2rem;
  text-align: center;
  margin-top: 100px;
`;

export default function HomePage() {
  return <main>
    <HeroBanner />
    <AboutUsComponent />
    <Testimonials />
    <FAQComponent  />
    <Test/>
  </main>;
}
