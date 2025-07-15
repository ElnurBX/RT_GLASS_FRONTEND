"use client";
import { Container } from "@/components/grid";
import { FiArrowUpRight } from "react-icons/fi";
import HeroBannerSlider from "./slider";
import styles from "./HeroBanner.module.css";

export default function HeroBanner() {
  return (
    <section>
      <Container>
        <div className={styles["hero-banner-wrapper"]}>
          <h1 className={styles.title}>Grow your users</h1>
          <h2 className={styles.subtitle}>
            Powerful, self-serve product and growth analytics to help you convert,
            engage, and retain more users. Trusted by over 4,000 startups.
          </h2>
          <button className={styles["contact-us-button"]}>
            <span className={styles["button-text"]}>Bizimlə Əlaqə saxlayın</span>
            <span className={styles["button-icon"]}>
              <FiArrowUpRight />
            </span>
          </button>
        </div>
      </Container>
      <HeroBannerSlider />
    </section>
  );
}
