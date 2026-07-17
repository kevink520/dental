"use client";

import { useState } from "react";
import Image from "next/image";
import { serviceDetails } from "../data";

export default function ServiceIndex() {
  const [active, setActive] = useState(0);
  const current = serviceDetails[active];

  return (
    <section className="pt-16 sm:pt-24" id="index">
      <div className="flex items-center justify-between border-b border-line pb-[18px]">
        <div className="inline-flex items-center rounded-full border border-[rgba(20,20,26,0.1)] bg-white/60 px-[18px] py-2 text-[13.5px] font-medium text-ink">
          Complete Care Index
        </div>
        <div className="text-sm tracking-[0.02em] text-muted3">(01)</div>
      </div>

      <div className="mt-[46px] grid grid-cols-1 items-start gap-10 bp:grid-cols-[1.06fr_0.94fr] bp:gap-14">
        <div>
          {serviceDetails.map((s, i) => {
            const isActive = i === active;
            const isLast = i === serviceDetails.length - 1;
            return (
              <a
                key={s.key}
                href="#contact"
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                className={`group block border-t border-line no-underline ${
                  isLast ? "border-b" : ""
                }`}
              >
                <div
                  className={`flex items-center gap-5 py-6 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] sm:gap-7 ${
                    isActive ? "bp:translate-x-3" : ""
                  }`}
                >
                  <span
                    className={`w-7 flex-none font-sans text-[12px] font-medium tracking-[0.04em] transition-colors ${
                      isActive ? "text-navy" : "text-[#b6b6bb]"
                    }`}
                  >
                    {s.num}
                  </span>

                  <span className="min-w-0 flex-1">
                    <span className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                      <span
                        className={`font-serif text-[clamp(26px,2.9vw,38px)] leading-[1.05] tracking-[-0.01em] transition-colors duration-300 ${
                          isActive
                            ? "font-semibold text-navy"
                            : "font-medium text-ink/75"
                        }`}
                      >
                        {s.name}
                      </span>
                      <span className="hidden text-[12.5px] italic font-serif text-muted3 sm:inline">
                        {s.tagline}
                      </span>
                    </span>
                    <span className="mt-[10px] hidden flex-wrap gap-2 bp:flex">
                      {s.treatments.map((t) => (
                        <span
                          key={t}
                          className={`rounded-full border px-3 py-[5px] text-[11.5px] font-medium transition-colors duration-300 ${
                            isActive
                              ? "border-[rgba(36,74,160,0.3)] bg-white/70 text-navy"
                              : "border-line-soft bg-white/40 text-muted2"
                          }`}
                        >
                          {t}
                        </span>
                      ))}
                    </span>
                  </span>

                  <span className="flex flex-none items-center gap-4 sm:gap-6">
                    <span className="hidden text-right sm:block">
                      <span
                        className={`block text-[13.5px] font-semibold transition-colors ${
                          isActive ? "text-ink" : "text-muted2"
                        }`}
                      >
                        {s.price}
                      </span>
                      <span className="block text-[11.5px] text-muted3">
                        {s.duration}
                      </span>
                    </span>
                    <span
                      className={`flex h-11 w-11 items-center justify-center rounded-full border text-[15px] transition-all duration-300 ${
                        isActive
                          ? "border-ink bg-ink text-white"
                          : "border-line text-muted2 group-hover:border-ink group-hover:bg-ink group-hover:text-white"
                      }`}
                    >
                      ↗
                    </span>
                  </span>
                </div>

                <span className="mb-6 block overflow-hidden rounded-[16px] bp:hidden">
                  <span className="relative block h-[200px] w-full">
                    <Image
                      src={s.src}
                      alt={s.name}
                      fill
                      sizes="100vw"
                      className="object-cover"
                    />
                  </span>
                </span>
              </a>
            );
          })}
        </div>

        <div className="sticky top-8 hidden bp:block">
          <div className="relative h-[560px] w-full overflow-hidden rounded-[22px]">
            {serviceDetails.map((s, i) => (
              <Image
                key={s.key}
                src={s.src}
                alt={s.name}
                fill
                sizes="(max-width: 980px) 0px, 480px"
                priority={i === 0}
                className={`object-cover transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  i === active
                    ? "scale-100 opacity-100"
                    : "scale-[1.06] opacity-0"
                }`}
              />
            ))}

            <div className="absolute top-5 right-5 rounded-full border border-white/40 bg-white/65 px-4 py-2 text-[12px] font-medium tracking-[0.06em] text-ink backdrop-blur-sm">
              {current.num} / 06
            </div>

            <div className="absolute inset-x-5 bottom-5 flex items-end justify-between gap-4 rounded-[16px] border border-white/50 bg-white/70 p-5 backdrop-blur-md">
              <div className="min-w-0">
                <div className="text-[11px] uppercase tracking-[0.08em] text-muted2">
                  {current.num} — {current.tagline}
                </div>
                <div className="mt-1.5 truncate font-serif text-[22px] leading-none text-navy">
                  {current.name}
                </div>
              </div>
              <div className="flex-none rounded-full bg-ink px-4 py-2 text-[12px] font-medium text-white">
                {current.duration}
              </div>
            </div>
          </div>

          <p className="m-0 mt-5 max-w-[46ch] text-[13.5px] leading-[1.6] text-muted2">
            {current.desc}
          </p>
        </div>
      </div>
    </section>
  );
}
