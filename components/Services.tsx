"use client";

import { useState } from "react";
import Image from "next/image";
import { services } from "./data";

const specialists = [
  "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=200&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=200&auto=format&fit=crop",
];

export default function Services() {
  const [active, setActive] = useState(1);
  const current = services[active];

  return (
    <section className="section" id="services">
      <div className="section-head">
        <div className="chip">Our Services</div>
        <div className="section-num">(02)</div>
      </div>

      <div className="services-grid">
        <div>
          {services.map((s, i) => {
            const isActive = i === active;
            return (
              <button
                key={s.key}
                type="button"
                className={`svc-row${isActive ? " active" : ""}`}
                onClick={() => setActive(i)}
                aria-pressed={isActive}
              >
                <div className="svc-row-top">
                  <div className="svc-name">
                    {s.name} <span className="svc-num">{s.num}</span>
                  </div>
                  <div className="svc-mark">{isActive ? "" : "+"}</div>
                </div>
                <div className="svc-sub">{s.sub}</div>
              </button>
            );
          })}
        </div>

        <div className="svc-img">
          <Image
            src={current.src}
            alt={current.name}
            fill
            sizes="(max-width: 980px) 100vw, 360px"
          />
        </div>

        <div className="svc-card">
          <p>{current.desc}</p>
          <div className="svc-card-foot">
            <div className="avatars">
              <div className="avatar-stack">
                {specialists.map((src, i) => (
                  <span className="avatar" key={i}>
                    <Image src={src} alt="" fill sizes="34px" />
                  </span>
                ))}
              </div>
              <div className="avatars-label">
                Our Dental
                <br />
                Specialists
              </div>
            </div>
            <a className="btn-dark sm" href="#contact">
              Read More ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
