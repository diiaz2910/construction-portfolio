import gsap from "gsap";
import { useEffect } from "react";
import { MantineProvider } from "@mantine/core";

// components
import Hero from "./components/Hero/Hero";
import Header from "./components/Header/Header";

//styles

const App = () => {
  useEffect(() => {
    gsap.fromTo("h1", { opacity: 0 }, { opacity: 1, duration: 1 });
  }, []);

  return (
    <MantineProvider>
      <Header />
      <Hero />
    </MantineProvider>
  );
};

export default App;
