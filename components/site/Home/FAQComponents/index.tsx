"use client";

import React, { useState } from "react";
import styled from "styled-components";
import { FaPlus, FaMinus } from "react-icons/fa";
import { montserrat } from "@styles/fonts";
import { Container } from "@/styles/Grid";
// Suallar siyahısı
const faqData = [
  {
    question: "Stride hansı növ tədris mərkəzləri üçün uyğundur?",
    answer:
      "Stride dil mərkəzləri, abituriyent hazırlıq mərkəzləri və digər özəl tədris müəssisələri üçün hazırlanıb. Əgər siz dərs qrupları, ödəniş, tapşırıq və iştirak kimi prosesləri idarə edirsinizsə, Stride sizin problemlərinizi həll edə bilər.",
  },
  {
    question: "Stride platformasından kimlər istifadə edə bilər?",
    answer:
      "Tədris müəssisələri, müəllimlər və administratorlar Stride-dan asanlıqla istifadə edə bilər.",
  },
  {
    question: "Stride-dan istifadə etmək üçün texniki biliklər lazımdır?",
    answer:
      "Xeyr. Stride istifadəsi çox sadədir və heç bir proqramlaşdırma biliyi tələb etmir.",
  },
];

// Stil komponentləri
const Wrapper = styled.section`
  padding: 120px 16px 80px;
  max-width: 100%;
  margin: 0 auto;
  text-align: center;
  font-family: ${montserrat.style.fontFamily};
`;

const Title = styled.h2`
  font-size: 40px;
  font-weight: 600;
  margin-bottom: 8px;
  line-height: 56px;
`;

const Subtitle = styled.p`
  font-size: 24px;
  font-weight: 500;
  line-height: 40px;
  width: 45%;
  margin: 30px auto 40px;
  color: #777;

`;

const FAQList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const FAQItem = styled.div`
  position: relative;

  padding: 10px 2px 25px;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0%;
    height: 1px;
    background-color: black;
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }
  box-shadow: 0 2px 0px rgba(0, 0, 0, 0.1);
  margin-top: 20px;
`;

const QuestionRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;

const Question = styled.h4`
  font-size: 20px;
  line-height: 32px;
  font-weight: 400;
  color: #2c2f53;
  text-align: left;
`;

const Answer = styled.p`
  width:75%;
  font-size: 16px;
  color: #555;
  margin-top: 12px;
  line-height: 24px;
  text-align: left;
  color: #2c2f53;
  opacity: 0.75;
`;

const ToggleIcon = styled.div<{ open: boolean }>`
  font-size: 16px;
  background: ${({ open }) => (open ? "black" : "#fff")};
  color: ${({ open }) => (open ? "white" : "black")};
  border-radius: 50%;
  border: ${({ open }) => (open ? "0px" : "1px solid #ddd;")};
  padding: 6px;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
`;

const ShowMoreButton = styled.button`
  background: black;
  color: white;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 55px auto;
  height: 56px;
  width: 200px;
  border-radius: 28px;
  font-size: 18px;
  line-height: 24px;
  font-weight: 500;
  cursor: pointer;

  &:hover {
    background: #333;
  }
`;

// Əsas komponent
const FAQComponent = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const toggleFAQ = (index: number) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <Container>
      <Wrapper>
        <Title>Tez-tez verilən Suallar</Title>
        <Subtitle>
          Stride Haqqında Ən Çox Verilən Suallara Burada Cavab Tapın
        </Subtitle>
        <FAQList>
          {faqData.map((item, index) => (
            <FAQItem key={index}>
              <QuestionRow onClick={() => toggleFAQ(index)}>
                <Question>{item.question}</Question>
                <ToggleIcon open={openIndex === index}>
                  {openIndex === index ? <FaMinus /> : <FaPlus />}
                </ToggleIcon>
              </QuestionRow>
              {openIndex === index && <Answer>{item.answer}</Answer>}
            </FAQItem>
          ))}
        </FAQList>
        <ShowMoreButton>Daha çox gör</ShowMoreButton>
      </Wrapper>
    </Container>
  );
};

export default FAQComponent;
