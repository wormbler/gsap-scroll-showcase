import { useRef } from "react";
import { gsap, useGSAP } from "../gsap";

const stats = [
  { value: 4, label: "Sections on this page" },
  { value: 2, label: "Pinned scenes" },
  { value: 4, label: "Cards in the sideways scroll" },
];

export default function Counters() {
  const root = useRef(null);

  useGSAP(
    () => {
      const els = gsap.utils.toArray(".count");
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        els.forEach((el) => {
          const end = Number(el.dataset.value);
          const counter = { v: 0 };
          el.textContent = "0";
          gsap.to(counter, {
            v: end,
            duration: 1.6,
            ease: "power2.out",
            snap: { v: 1 },
            onUpdate: () => {
              el.textContent = String(counter.v);
            },
            scrollTrigger: { trigger: el, start: "top 85%", once: true },
          });
        });
      });

      mm.add("(prefers-reduced-motion: reduce)", () => {
        els.forEach((el) => {
          el.textContent = el.dataset.value;
        });
      });

      return () => mm.revert();
    },
    { scope: root }
  );

  return (
    <section className="counters" ref={root}>
      <h2 className="counters-title">The numbers on this page</h2>
      <ul className="stats">
        {stats.map((s) => (
          <li key={s.label}>
            <span className="count" data-value={s.value} />
            <span className="stat-label">{s.label}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
