"use client";

import { useState } from "react";
import Image from "next/image";
import { testimonials, stars } from "./data";

const thumb =
  "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop";

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const t = testimonials[index];
  const tPrev = testimonials[(index - 1 + testimonials.length) % testimonials.length];
  const total = testimonials.length;

  const prev = () => setIndex((i) => (i - 1 + total) % total);
  const next = () => setIndex((i) => (i + 1) % total);

  const label = `(0${index + 1} — 0${total})`;

  return (
    <section className="section" id="testimonials">
      <div className="section-head">
        <div className="chip">Testimonials</div>
        <div className="section-num">(03)</div>
      </div>

      <div className="tst-grid">
        <div className="tst-media">
          <div className="tst-thumb">
            <Image src={tPrev.src} alt={tPrev.name} fill sizes="120px" />
          </div>
          <div className="tst-main">
            <Image
              src={t.src}
              alt={`${t.name}, happy patient`}
              fill
              sizes="280px"
            />
          </div>
        </div>

        <div>
          <p className="tst-quote">— {t.quote}</p>
          <div className="tst-name">
            {t.name} <span>· {t.role}</span>
          </div>
          <div className="tst-meta">
            <div className="tst-meta-label">Customer Satisfaction</div>
            <div className="tst-score-row">
              <div className="tst-score">
                {t.score}
                <span>/5</span>
              </div>
              <div className="tst-stars">{stars(t.stars)}</div>
            </div>
          </div>
        </div>
      </div>

      <div className="tst-nav">
        <button type="button" onClick={prev}>
          ← Previous
        </button>
        <div className="tst-index">{label}</div>
        <button type="button" onClick={next}>
          Next →
        </button>
      </div>
    </section>
  );
}
