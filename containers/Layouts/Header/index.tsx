import { Container, Row, Col } from "@/components/grid";
import Link from "next/link";
import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";
import LangDropdown from "@/components/LangDropdown";
import logo from "@/public/logo.png";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <>
      <div className={styles.headerPadding} />
      <header className={styles.headerWrapper}>
        <Container>
          <Row justify="between" align="center">
            <Col xs={4} md={2}>
              <div className={styles.logo}>
                <Link href="/">
                  <Image
                    src={logo}
                    alt="Lalasia Logo"
                    width={128}
                    height={128}
                    priority
                  />
                </Link>
              </div>
            </Col>

            <Col xs={12} md={4}>
              <nav className={styles.nav}>
                <Link href="/about">About us</Link>
                <Link href="/products">Products</Link>
                <Link href="/services">Services</Link>
                <Link href="/projects">Projects</Link>
              </nav>
            </Col>

            <Col xs={12} md={4}>
              <div className={styles.rightActions}>
                <LangDropdown />
                <button className={styles.button}>
                  <span className={styles.wpIconWrapper}>
                    <FaWhatsapp />
                  </span>
                  Bizimlə əlaqə saxla
                </button>
              </div>
            </Col>
          </Row>
        </Container>
      </header>
    </>
  );
}
