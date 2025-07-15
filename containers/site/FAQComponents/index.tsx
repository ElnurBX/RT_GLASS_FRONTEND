"use client";

import React, { useState } from "react";
import { Container } from "@/components/grid";
import styles from "./FAQComponent.module.css";
import { FaPlus, FaMinus } from "react-icons/fa";

const faqData = [
  {
    question: "Stride hansı növ tədris mərkəzləri üçün uyğundur?",
    answer: "Stride dil mərkəzləri, abituriyent hazırlıq mərkəzləri və digər özəl tədris müəssisələri üçün hazırlanıb...",
  },
  {
    question: "Stride platformasından kimlər istifadə edə bilər?",
    answer: "Tədris müəssisələri, müəllimlər və administratorlar Stride-dan asanlıqla istifadə edə bilər.",
  },
  {
    question: "Stride-dan istifadə etmək üçün texniki biliklər lazımdır?",
    answer: "Xeyr. Stride istifadəsi çox sadədir və heç bir proqramlaşdırma biliyi tələb etmir.",
  },
];

const FAQComponent = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const toggleFAQ = (index: number) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <Container>
      <section className={styles.wrapper}>
        <h2 className={styles.title}>Tez-tez verilən Suallar</h2>
        <p className={styles.subtitle}>Stride Haqqında Ən Çox Verilən Suallara Burada Cavab Tapın</p>
        <div className={styles.faqList}>
          {faqData.map((item, index) => (
            <div className={styles.faqItem} key={index}>
              <div className={styles.questionRow} onClick={() => toggleFAQ(index)}>
                <h4 className={styles.question}>{item.question}</h4>
                <div className={`${styles.toggleIcon} ${openIndex === index ? styles.toggleOpen : styles.toggleClosed}`}>
                  {openIndex === index ? <FaMinus /> : <FaPlus />}
                </div>
              </div>
              {openIndex === index && <p className={styles.answer}>{item.answer}</p>}
            </div>
          ))}
        </div>
        <button className={styles.showMore}>Daha çox gör</button>
      </section>
    </Container>
  );
};

export default FAQComponent;
