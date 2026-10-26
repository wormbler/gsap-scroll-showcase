import { useRef } from "react";
import { gsap, useGSAP } from "../gsap";

export default function Pinned() {
  const root = useRef(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: root.current,
            start: "top top",
            end: "+=1800",
            pin: true,
            scrub: 1,
          },
        });
        tl.fromTo(
          ".pin-word",
          { scale: 0.55 },
          { scale: 1.25, duration: 3, ease: "none" }
        ).from(
          ".pin-line",
          { y: 30, opacity: 0, stagger: 0.8, duration: 0.8, ease: "power2.out" },
          0.6
        );
      });
      return () => mm.revert();
    },
    { scope: root }
  );

  return (
    <section className="pinned" ref={root}>
      <div className="pin-inner">
        <h2 className="pin-word">Pinned</h2>
        <div className="pin-lines">
          <p className="pin-line">The section stays put while you keep scrolling.</p>
          <p className="pin-line">Your scroll position drives the animation.</p>
          <p className="pin-line">Scroll back up and it plays in reverse.</p>
        </div>
      </div>
    </section>
  );
}
