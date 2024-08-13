import gsap from "gsap";
import { useEffect } from "react";

const App = () => {
  useEffect(() => {
    gsap.fromTo("h1", { opacity: 0 }, { opacity: 1, duration: 1 });
  }, []);

  return (
    <div>
      <h1>Welcome To My Portfolio</h1>
    </div>
  );
};

export default App;
