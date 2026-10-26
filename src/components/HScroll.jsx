import { useRef } from "react";
import { gsap, useGSAP } from "../gsap";

const cards = [
  { title: "Reveal", text: "Elements animate in as they enter the screen." },
  { title: "Pin", text: "A section holds still while you keep scrolling." },
  { title: "Scrub", text: "Animation progress follows the scrollbar." },
  { title: "Count", text: "Numbers tick up once they come into view." },
];

export default function HScroll() {
  const root = useRef(null);
  const track = useRef(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add(
        "(min-width: 768px) and (prefers-reduced-motion: no-preference)",
        () => {
          const distance = () => track.current.scrollWidth - window.innerWidth;
          gsap.to(track.current, {
            x: () => -distance(),
            ease: "none",
            scrollTrigger: {
              trigger: root.current,
              start: "top top",
              end: () => "+=" + distance(),
              pin: true,
              scrub: 1,
              invalidateOnRefresh: true,
            },
          });
        }
      );
      return () => mm.revert();
    },
    { scope: root }
  );

  return (
    <section className="hs" ref={root}>
      <h2 className="hs-title">What ScrollTrigger does</h2>
      <div className="h-track" ref={track}>
        {cards.map((c) => (
          <article className="h-card" key={c.title}>
            <h3>{c.title}</h3>
            <p>{c.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
