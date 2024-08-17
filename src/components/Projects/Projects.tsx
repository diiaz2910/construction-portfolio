import { Container, SimpleGrid, Text } from "@mantine/core";
import { MantineProvider } from "@mantine/core";

//gsap

//styles
import styles from "./Projects.module.css";

const Projects = () => {
  return (
    <MantineProvider>
      <SimpleGrid>
        <div className={styles.headerContainer}>
          <Container className={styles.heroContainer}>
            <Text className={styles.heroTextRight}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Assumenda, quaerat? Perferendis reiciendis veniam eos iusto at,
              lauda
            </Text>
            <Text className={styles.heroTextLeftTop}>
              (01) <br /> Acerca de nosotros
            </Text>
            <Text className={styles.heroTextLeftBottom}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Reprehenderit molestiae
            </Text>
          </Container>
        </div>
      </SimpleGrid>
    </MantineProvider>
  );
};

export default Projects;
