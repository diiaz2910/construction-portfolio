import { Container, SimpleGrid, Text } from "@mantine/core";

//gsap

//styles
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <SimpleGrid>
      <div className={styles.headerContainer}>
        <Container className={styles.heroContainer}>
          <Text className={styles.heroTextRight}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda,
            quaerat? Perferendis reiciendis veniam eos iusto at, lauda
          </Text>
        </Container>
      </div>
    </SimpleGrid>
  );
};

export default Hero;
