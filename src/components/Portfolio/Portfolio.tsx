import { Container, SimpleGrid, Text } from "@mantine/core";
import { Carousel } from "@mantine/carousel";

//gsap

//styles
import styles from "./Portfolio.module.css";

const Hero = () => {
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
        <Carousel slideSize="70%" height={200} slideGap="md" withIndicators>
          <Carousel.Slide>1</Carousel.Slide>
          <Carousel.Slide>2</Carousel.Slide>
          <Carousel.Slide>3</Carousel.Slide>
        </Carousel>
      </div>
    </SimpleGrid>
  );
};

export default Hero;
