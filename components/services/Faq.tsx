"use client";

import { useState } from "react";
import { faqs } from "../data";

export default function Faq() {
  const [open, setOpen] = useState(0);

  return (
    <section className="pt-16 sm:pt-24" id="faq">
      <div className="flex items-center justify-between border-b border-line pb-[18px]">
        <div className="inline-flex items-center rounded-full border border-[rgba(20,20,26,0.1)] bg-white/60 px-[18px] py-2 text-[13.5px] font-medium text-ink">
          Questions, Answered
        </div>
        <div className="text-sm tracking-[0.02em] text-muted3">(05)</div>
      </div>

      <div className="mt-[46px] grid grid-cols-1 gap-10 bp:grid-cols-[0.78fr_1.22fr] bp:gap-16">
        <div>
          <h2 className="m-0 font-serif text-[clamp(32px,3.4vw,46px)] font-medium leading-[1.08] tracking-[-0.01em] text-navy">
            The things patients <i className="italic">actually</i> ask us.
          </h2>
          <p className="mt-6 max-w-[380px] text-[14.5px] leading-[1.65] text-muted">
            Can&apos;t find your answer? Call us — a real person picks up
            between 8am and 7pm, six days a week.
          </p>
          <a
            className="mt-8 inline-flex cursor-pointer items-center gap-2.5 rounded-full border border-[rgba(20,20,26,0.14)] bg-white/55 px-[24px] py-[14px] text-[14.5px] font-medium text-ink no-underline transition hover:-translate-y-0.5 hover:bg-white/85"
            href="#contact"
          >
            +1 (201) 555-0124
          </a>
        </div>

        <div>
          {faqs.map((f, i) => {
            const isOpen = i === open;
            const isLast = i === faqs.length - 1;
            return (
              <div
                key={f.q}
                className={`border-t border-line ${isLast ? "border-b" : ""}`}
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                  className="flex w-full cursor-pointer items-center justify-between gap-6 bg-transparent py-6 text-left"
                >
                  <span
                    className={`font-serif text-[clamp(19px,1.8vw,23px)] leading-[1.25] transition-colors duration-300 ${
                      isOpen ? "text-navy" : "text-ink/80"
                    }`}
                  >
                    {f.q}
                  </span>
                  <span
                    className={`flex h-9 w-9 flex-none items-center justify-center rounded-full border text-[16px] leading-none transition-all duration-300 ${
                      isOpen
                        ? "rotate-45 border-ink bg-ink text-white"
                        : "border-line text-muted2"
                    }`}
                  >
                    +
                  </span>
                </button>
                <div
                  className={`grid transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                    isOpen
                      ? "grid-rows-[1fr] pb-6 opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="m-0 max-w-[56ch] text-[14px] leading-[1.65] text-muted">
                      {f.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
