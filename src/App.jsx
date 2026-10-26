import { useEffect } from "react";
import { ScrollTrigger } from "./gsap";
import Progress from "./components/Progress";
import Intro from "./components/Intro";
import Pinned from "./components/Pinned";
import HScroll from "./components/HScroll";
import Counters from "./components/Counters";
import Footer from "./components/Footer";

export default function App() {
  useEffect(() => {
    // Recalculate trigger positions once fonts and images have loaded.
    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener("load", refresh);
    return () => window.removeEventListener("load", refresh);
  }, []);

  return (
    <>
      <Progress />
      <main>
        <Intro />
        <Pinned />
        <HScroll />
        <Counters />
      </main>
      <Footer />
    </>
  );
}
