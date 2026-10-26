import { useRef } from "react";
import { gsap, useGSAP } from "../gsap";

export default function Intro() {
  const root = useRef(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.from(".intro-line", {
          yPercent: 110,
          duration: 1.1,
          ease: "power4.out",
          stagger: 0.12,
        });
        gsap.from(".intro-sub", { opacity: 0, y: 20, duration: 0.8, delay: 0.7 });
        gsap.from(".intro-hint", { opacity: 0, duration: 0.8, delay: 1.1 });
        gsap.to(".intro-dot", {
          y: 10,
          duration: 0.9,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      });
      return () => mm.revert();
    },
    { scope: root }
  );

  return (
    <section className="intro" ref={root}>
      <div className="intro-glow" aria-hidden="true" />
      <h1 className="intro-title">
        <span className="mask">
          <span className="intro-line">Scroll-driven</span>
        </span>
        <span className="mask">
          <span className="intro-line accent">motion.</span>
        </span>
      </h1>
      <p className="intro-sub">
        A small page that shows what GSAP ScrollTrigger can do in React.
      </p>
      <p className="intro-hint">
        <span className="intro-dot" aria-hidden="true" />
        Scroll to begin
      </p>
    </section>
  );
}
