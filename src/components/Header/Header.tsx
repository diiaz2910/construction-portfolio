import { Container, SimpleGrid, Text } from "@mantine/core";
import { useEffect } from "react";

//gsap
import gsap from "gsap";

//styles
import styles from "./Header.module.css";

const Header = () => {
  useEffect(() => {
    gsap.fromTo(
      `.${styles.heroText}`,
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 1.5, ease: "power3.out" }
    );
  }, []);

  return (
    <SimpleGrid>
      <div className={styles.headerContainer}>
        <Container className={styles.header}>
          <div className={styles.logoTextContainer}>
            <Text className={styles.logoText}>My Logo</Text>
          </div>
          <nav className={styles.navCenter}>
            <a href="#home" className={styles.navLink}>
              Home
            </a>
            <a href="#portfolio" className={styles.navLink}>
              Portafolio
            </a>
            <a href="#contact" className={styles.navLink}>
              Contacto
            </a>
          </nav>
          <div className={styles.logoTextContainer}>
            <Text className={styles.logoText}>Agenda una llamada</Text>
          </div>
        </Container>
        <Container size="lg" className={styles.heroContainer}>
          <Text className={styles.heroText}>Construyendo Responsablemente</Text>
          <Text className={styles.heroText}>Construcciones NAME</Text>
        </Container>
        <Container className={styles.navBottomLinks}>
          <a href="#home">Home</a>
          <a href="#home">Home</a>
          <a href="#home">Home</a>
        </Container>
        <Container className={styles.navBottomRight}>
          <div className="slider">
            <div className="slide">
              <img src="path/to/image1.jpg" alt="" />
              <div className="slideText">
                <h3>lorem1</h3>
                <p>Lorem1</p>
              </div>
            </div>
            <div className="slide">
              <img src="path/to/image2.jpg" alt="" />
              <div className="slideText">
                <h3>lorem2</h3>
                <p>lorem2</p>
              </div>
            </div>
            <div className="slide">
              <img src="path/to/image3.jpg" alt="" />
              <div className="slideText">
                <h3>lorem3</h3>
                <p>lorem3</p>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </SimpleGrid>
  );
};

export default Header;
