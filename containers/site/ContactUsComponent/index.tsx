"use client";
import React from "react";
import { Container, Row, Col } from "@/components/grid";
import styles from "./ContactUsComponent.module.css";
import { FaPhoneAlt } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { FaFacebook, FaLinkedin, FaInstagramSquare } from "react-icons/fa";
import ContactUsForm from "@/components/ContactUsComponentForm";

const ContactUsComponent = () => {
  return (
    <div className={styles.wrapper}>
      <Container>
        <div className={styles.sectionHeader}>
          <h4 className={styles.subTitle}>Contact Us</h4>
          <h2 className={styles.title}>Our Contacts</h2>
        </div>
        <Row>
          <Col xl={5} lg={5} sm={12} xs={12}>
            <div className={styles.contactInfo}>
              <h3 className={styles.contactInfoHeader}>Get in touch</h3>
              <p className={styles.contactInfoText}>
                The industrial pendant lighting has adjustable wire with max length 59 inch,
                you may adjust it to the preferred length you may adjust it to the preferred length
              </p>

              <a href="tel:+994507518119" className={styles.contactInfoLink}>
                <div className={styles.contactInfoLinkIcon}><FaPhoneAlt /></div>
                <span>+994 50 751 81 19</span>
              </a>

              <a href="mailto:javidkarimov96@gmail.com" className={styles.contactInfoLink}>
                <div className={styles.contactInfoLinkIcon}><HiMail /></div>
                <span>javidkarimov96@gmail.com</span>
              </a>

              <h4 className={styles.contactInfoSubTitle}>Follow us</h4>
              <div className={styles.contactInfoWrapperIcons}>
                <div className={styles.contactInfoIcon}><FaFacebook /></div>
                <div className={styles.contactInfoIcon}><FaInstagramSquare /></div>
                <div className={styles.contactInfoIcon}><FaLinkedin /></div>
              </div>
            </div>
          </Col>

          <Col xl={7} lg={7} sm={12} xs={12}>
            <ContactUsForm />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ContactUsComponent;
