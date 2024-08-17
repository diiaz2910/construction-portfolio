import gsap from "gsap";
import { useEffect } from "react";
import { MantineProvider } from "@mantine/core";

// components
import Hero from "./components/Hero/Hero";
import Header from "./components/Header/Header";
import Portfolio from "./components/Portfolio/Portfolio";
import Projects from "./components/Projects/Projects";

// styles
import "./styles/globals.css";
import "@mantine/core/styles.css";

const App = () => {
  useEffect(() => {
    gsap.fromTo("h1", { opacity: 0 }, { opacity: 1, duration: 1 });
  }, []);

  return (
    <MantineProvider>
      <Header />
      <Hero />
      <Portfolio />
      <Projects />
    </MantineProvider>
  );
};

export default App;
