"use client";

import { useState } from "react";
import Image from "next/image";
import { services } from "./data";

const specialists = [
  "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=200&auto=format&fit=crop",
];

const zoom =
  "object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] motion-safe:group-hover:scale-[1.06]";

export default function Services() {
  const [active, setActive] = useState(1);
  const current = services[active];

  return (
    <section className="pt-16 sm:pt-24" id="services">
      <div className="flex items-center justify-between border-b border-line pb-[18px]">
        <div className="inline-flex items-center rounded-full border border-[rgba(20,20,26,0.1)] bg-white/60 px-[18px] py-2 text-[13.5px] font-medium text-ink">
          Our Services
        </div>
        <div className="text-sm tracking-[0.02em] text-muted3">(02)</div>
      </div>

      <div className="mt-[46px] grid grid-cols-1 items-stretch gap-8 bp:grid-cols-[1fr_0.92fr_0.92fr]">
        <div>
          {services.map((s, i) => {
            const isActive = i === active;
            const isLast = i === services.length - 1;
            return (
              <button
                key={s.key}
                type="button"
                className={`w-full cursor-pointer border-t border-line bg-transparent py-5 text-left transition-opacity ${
                  isLast ? "border-b border-line" : ""
                }`}
                onClick={() => setActive(i)}
                aria-pressed={isActive}
              >
                <div className="flex items-baseline justify-between">
                  <div
                    className={`font-serif text-[29px] tracking-[-0.01em] transition-colors ${
                      isActive
                        ? "font-semibold text-navy"
                        : "font-medium text-[#aeaeb3]"
                    }`}
                  >
                    {s.name}{" "}
                    <span className="font-sans text-xs font-medium text-[#a7a7ac]">
                      {s.num}
                    </span>
                  </div>
                  <div className="text-[18px] leading-none text-[#bcbcc1]">
                    {isActive ? "" : "+"}
                  </div>
                </div>
                <div
                  className={`mt-2 text-[12.5px] text-muted2 ${
                    isActive ? "block" : "hidden"
                  }`}
                >
                  {s.sub}
                </div>
              </button>
            );
          })}
        </div>

        <div className="group relative h-[280px] w-full overflow-hidden rounded-[18px] bp:h-[340px]">
          <Image
            src={current.src}
            alt={current.name}
            fill
            sizes="(max-width: 980px) 100vw, 360px"
            className={zoom}
          />
        </div>

        <div className="flex flex-col justify-between rounded-[18px] border border-line-soft bg-white/55 p-[26px]">
          <p className="m-0 font-serif text-xl leading-[1.4] text-ink">
            {current.desc}
          </p>
          <div className="mt-6 flex items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="flex">
                {specialists.map((src, i) => (
                  <span
                    key={i}
                    className={`group relative h-[34px] w-[34px] overflow-hidden rounded-full border-2 border-white ${
                      i > 0 ? "-ml-2.5" : ""
                    }`}
                  >
                    <Image src={src} alt="" fill sizes="34px" className={zoom} />
                  </span>
                ))}
              </div>
              <div className="text-[12.5px] leading-[1.3] text-muted2">
                Our Dental
                <br />
                Specialists
              </div>
            </div>
            <a
              className="inline-flex cursor-pointer items-center gap-[7px] whitespace-nowrap rounded-full bg-ink px-[18px] py-[11px] text-[13.5px] font-medium text-white no-underline transition hover:-translate-y-0.5 hover:bg-black"
              href="#contact"
            >
              Read More ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
