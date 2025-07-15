import React from 'react';
import { Container, Row, Col } from '@/components/grid';
import Image from 'next/image';
import { FiArrowUpRight } from 'react-icons/fi';
import styles from './ServicesBanner.module.css';

const ServicesBanner = () => {
  return (
    <div className={styles.wrapper}>
      <Container>
        <Row>
          <Col xs={12} sm={6} xl={6}>
            <div className={styles.leftSide}>
              <h2 className={styles.title}>Xidmətlərimiz</h2>
              <p className={styles.description}>
                The industrial pendant lighting has adjustable wire with max length 59 inch, you may adjust it to the preferred length you may adjust it to the preferred length
              </p>
              <button className={styles.contactUsButton}>
                <span className={styles.buttonText}>Bizimlə Əlaqə saxlayın</span>
                <span className={styles.buttonIcon}>
                  <FiArrowUpRight />
                </span>
              </button>
            </div>
          </Col>

          <Col xs={12} sm={6} xl={6}>
            <div className={styles.rightSide}>
              <Image
                src="/servicespage.png"
                alt="Services Image"
                width={500}
                height={500}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ServicesBanner;
