"use client";

import React from 'react'
import styled from 'styled-components'

const Title = styled.h1`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 2rem;
  text-align: center;
  margin-top: 100px;
`;

const AboutUs = () => {
  return (
    <Title>Bu Hissə hələ hazırlanmayıb !!</Title>
  );
};

export default AboutUs;
