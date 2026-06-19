"use client";

import { useState } from "react";
import Image from "next/image";
import { testimonials, stars } from "./data";

const zoom =
  "object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] motion-safe:group-hover:scale-[1.06]";

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const total = testimonials.length;
  const t = testimonials[index];
  const tPrev = testimonials[(index - 1 + total) % total];

  const prev = () => setIndex((i) => (i - 1 + total) % total);
  const next = () => setIndex((i) => (i + 1) % total);

  const label = `(0${index + 1} — 0${total})`;

  return (
    <section className="pt-16 sm:pt-24" id="testimonials">
      <div className="flex items-center justify-between border-b border-line pb-[18px]">
        <div className="inline-flex items-center rounded-full border border-[rgba(20,20,26,0.1)] bg-white/60 px-[18px] py-2 text-[13.5px] font-medium text-ink">
          Testimonials
        </div>
        <div className="text-sm tracking-[0.02em] text-muted3">(03)</div>
      </div>

      <div className="mt-[54px] grid grid-cols-1 items-center gap-8 bp:grid-cols-[0.78fr_1fr] bp:gap-14">
        <div className="flex items-end gap-4">
          <div className="group relative mb-5 h-[120px] w-[90px] flex-none overflow-hidden rounded-[14px] sm:h-[150px] sm:w-[120px]">
            <Image src={tPrev.src} alt={tPrev.name} fill sizes="120px" className={zoom} />
          </div>
          <div className="group relative h-[280px] w-[220px] flex-none overflow-hidden rounded-[18px] sm:h-[330px] sm:w-[280px]">
            <Image
              src={t.src}
              alt={`${t.name}, happy patient`}
              fill
              sizes="280px"
              className={zoom}
            />
          </div>
        </div>

        <div>
          <p className="m-0 font-serif text-[clamp(24px,2.4vw,34px)] leading-[1.32] tracking-[-0.01em] text-navy">
            — {t.quote}
          </p>
          <div className="mt-7 text-[15px] font-semibold text-ink">
            {t.name} <span className="font-normal text-muted3">· {t.role}</span>
          </div>
          <div className="mt-[26px]">
            <div className="text-xs uppercase tracking-[0.04em] text-muted3">
              Customer Satisfaction
            </div>
            <div className="mt-2 flex items-center gap-3">
              <div className="font-serif text-[34px] text-ink">
                {t.score}
                <span className="text-[18px] text-muted3">/5</span>
              </div>
              <div className="text-[18px] tracking-[2px] text-[#e7a23d]">
                {stars(t.stars)}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-11 flex items-center justify-between border-t border-line pt-[22px]">
        <button
          type="button"
          onClick={prev}
          className="inline-flex cursor-pointer items-center gap-2 bg-transparent text-sm text-ink transition hover:text-navy"
        >
          ← Previous
        </button>
        <div className="text-[13.5px] text-muted3">{label}</div>
        <button
          type="button"
          onClick={next}
          className="inline-flex cursor-pointer items-center gap-2 bg-transparent text-sm text-ink transition hover:text-navy"
        >
          Next →
        </button>
      </div>
    </section>
  );
}
