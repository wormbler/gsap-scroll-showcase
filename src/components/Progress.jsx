import { useRef } from "react";
import { gsap, useGSAP } from "../gsap";

export default function Progress() {
  const bar = useRef(null);

  useGSAP(() => {
    const mm = gsap.matchMedia();
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      gsap.to(bar.current, {
        scaleX: 1,
        ease: "none",
        scrollTrigger: {
          trigger: document.documentElement,
          start: "top top",
          end: "bottom bottom",
          scrub: 0.3,
        },
      });
    });
    return () => mm.revert();
  });

  return <div className="progress" ref={bar} aria-hidden="true" />;
}
