import gsap from "gsap";
import { useEffect } from "react";
import { MantineProvider } from "@mantine/core";

// components
import Hero from "./components/Hero/AboutUs";
import Header from "./components/Header/Header";
import Portfolio from "./components/Portfolio/Portfolio";

const App = () => {
  useEffect(() => {
    gsap.fromTo("h1", { opacity: 0 }, { opacity: 1, duration: 1 });
  }, []);

  return (
    <MantineProvider>
      <Header />
      <Hero />
      <Portfolio />
    </MantineProvider>
  );
};

export default App;
