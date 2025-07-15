"use client";
import React, { useState } from "react";
import { Container, Row, Col } from "@/components/grid";
import Image from "next/image";
import styles from "./ServicesCarusel.module.css";

type ItemType = {
  title: string;
  description: string;
  image: string;
};

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
        "Elyaf sement lövhəsi istehsalında sement, sellüloza, mineral dolgu maddələrinin isfadə olunduğu qeyriasbest texnologiyası isfadə olunmaqla istehsal olunur.",
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
    <div className={styles.wrapper}>
      <Container>
        <Row>
          <Col xs={12} sm={12} md={6} lg={6} xl={6}>
            <div className={styles.leftSide}>
              <Image
                src={current.image}
                alt={current.title}
                width={600}
                height={500}
              />
            </div>
          </Col>
          <Col xs={12} sm={12} md={6} lg={6} xl={6}>
            <div className={styles.rightSide}>
              {items.map((item, index) => (
                <div key={index} className={styles.itemCart}>
                  <div
                    className={`${styles.item} ${
                      activeIndex === index ? styles.active : ""
                    }`}
                    onClick={() => setActiveIndex(index)}
                  >
                    {item.title}
                  </div>
                  {activeIndex === index && (
                    <div className={styles.descriptionWrapper}>
                      <p className={styles.description}>{item.description}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ServicesCarusel;
