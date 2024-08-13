import { Container, Text } from "@mantine/core";
import styles from "../styles/Header.module.css";

const Header = () => {
  return (
    <div className={styles.headerContainer}>
      <Container className={styles.header}>
        <div className={styles.logo}>
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
        <div className={styles.logo}>
          <Text className={styles.logoText}>Agenda una llamada</Text>
        </div>
      </Container>
    </div>
  );
};

export default Header;
