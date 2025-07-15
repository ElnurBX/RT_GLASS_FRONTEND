"use client";
import { Container } from "@/components/grid";
import React from "react";
import styles from "./AboutUs.module.css";

const WIDTH = 1000;
const HEIGHT = 1000;

const generatePath = (width: number, height: number) => {
  const px = (x: number) => (x / width).toFixed(4);
  const py = (y: number) => (y / height).toFixed(4);

  return `
    M ${px(110)} ${py(220)}
    A ${px(70)} ${py(70)} 0 0 1 ${px(180)} ${py(150)}
    L ${px(920)} ${py(240)}
    A ${px(70)} ${py(70)} 0 0 1 ${px(990)} ${py(300)}
    L ${px(990)} ${py(780)}
    A ${px(70)} ${py(70)} 0 0 1 ${px(940)} ${py(830)}
    L ${px(180)} ${py(950)}
    A ${px(70)} ${py(70)} 0 0 1 ${px(110)} ${py(880)}
    Z
  `;
};

const AboutUsComponent = () => {
  const path = generatePath(WIDTH, HEIGHT);

  return (
    <Container>
      <div className={styles.containerWrapper}>
        <svg width="0" height="0">
          <defs>
            <clipPath id="clip-shape" clipPathUnits="objectBoundingBox">
              <path d={path} />
            </clipPath>
          </defs>
        </svg>

        <div className={styles.wrapper}>
          <div className={styles.clippedBox} />
        </div>

        <div className={styles.wrapper}>
          <div className={styles.clippedBox2}></div>
          <div className={styles.textBox}>
            <div className={styles.contentText}>
              <h2 className={styles.title}>We Are Experts in Building Dreams</h2>
              <p className={styles.subtitle}>
                Construction is a general term meaning the art and science to form
                objects, systems, or organizations, and comes from Latin
                constructio and Old French construction.
              </p>
              <button className={styles.button}>Əlaqə saxlayın</button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default AboutUsComponent;
