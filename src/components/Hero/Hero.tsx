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
            {/* <Button>Button</Button> */}
          </Text>
          <Text className={styles.heroTextLeftTop}>
            (01) <br /> Acerca de nosotros
          </Text>
          <Text className={styles.heroTextLeftBottom}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Reprehenderit molestiae unde consequatur tempore aliquid ab
            temporibus sed placeat rerum, autem magnam, dolorem quis inventore
            iste tempora alias culpa repellat error.
          </Text>
        </Container>
      </div>
    </SimpleGrid>
  );
};

export default Hero;
