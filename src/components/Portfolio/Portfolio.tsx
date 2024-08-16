import { Container, SimpleGrid, Text } from "@mantine/core";

//gsap

//styles
import styles from "./Portfolio.module.css";

const Portfolio = () => {
  return (
    <SimpleGrid>
      <div className={styles.headerContainer}>
        <Container className={styles.heroContainer}>
          <Text className={styles.heroTextRight}>
            <ul>Text1</ul>
            <ul>Text2</ul>
            <ul>Text4</ul>
            <ul>Text3</ul>
            <ul>Text3</ul>
          </Text>
          <Text className={styles.heroTextLeftTop}>
            (02) <br /> Nuestra especialidad
          </Text>
          <Text className={styles.heroTextLeftBottom}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Reprehenderit molestiae unde consequatur.
            <h6>Description - Location</h6>
          </Text>
        </Container>
        <Container className={styles.carouselContainer}>
          <Text>Carousel</Text>
        </Container>
      </div>
    </SimpleGrid>
  );
};

export default Portfolio;
