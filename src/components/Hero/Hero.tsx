import gsap from "gsap";
import { useEffect } from "react";
import { Container, Text, Title, SimpleGrid } from "@mantine/core";

// styles
import styles from "./Hero.module.css";

const Hero = () => {
  useEffect(() => {
    gsap.fromTo(
      `.${styles.heroText}`,
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, duration: 1.5, ease: "power3.out" }
    );
  }, []);

  return (
    <SimpleGrid>
      <Container size="lg" className={styles.heroContainer}>
        <Title
          className={styles.heroText}
          style={{ fontSize: "1.5rem", marginTop: "20px" }}
        >
          Welcome to my portfolio
        </Title>
        <Text
          className={styles.heroText}
          style={{ fontSize: "1.5rem", marginTop: "20px" }}
        >
          I'm building a portfolio
        </Text>
      </Container>
    </SimpleGrid>
  );
};

export default Hero;
