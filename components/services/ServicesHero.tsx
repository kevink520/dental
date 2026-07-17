import Image from "next/image";

const zoom =
  "object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] motion-safe:group-hover:scale-[1.06]";

const stats = [
  { value: "06", label: "Treatments" },
  { value: "12", label: "Specialists" },
  { value: "98%", label: "Satisfaction" },
  { value: "Same-day", label: "Availability" },
];

export default function ServicesHero() {
  return (
    <section className="pt-[54px] pb-2.5 sm:pt-[70px]">
      <div className="grid grid-cols-1 items-stretch gap-12 bp:grid-cols-[1.04fr_0.96fr]">
        <div className="flex flex-col justify-between">
          <div>
            <div className="rise-in flex items-center gap-3">
              <span className="inline-flex items-center rounded-full border border-[rgba(20,20,26,0.1)] bg-white/60 px-[18px] py-2 text-[13.5px] font-medium text-ink">
                Our Services
              </span>
              <span className="text-sm tracking-[0.02em] text-muted3">
                Home — Services
              </span>
            </div>

            <h1
              className="rise-in m-0 mt-[30px] font-serif text-[clamp(46px,5.6vw,78px)] font-medium leading-[0.98] tracking-[-0.018em] text-navy"
              style={{ "--rise-delay": "80ms" } as React.CSSProperties}
            >
              Complete care,
              <br />
              for every <i className="italic">smile</i> you love.
            </h1>

            <p
              className="rise-in mt-[26px] max-w-[440px] text-base leading-[1.6] text-muted"
              style={{ "--rise-delay": "160ms" } as React.CSSProperties}
            >
              From a child&apos;s first check-up to a full smile restoration —
              six treatments, one team, and a plan that&apos;s always explained
              before it begins.
            </p>

            <div
              className="rise-in mt-[32px] flex flex-wrap items-center gap-4"
              style={{ "--rise-delay": "240ms" } as React.CSSProperties}
            >
              <a
                className="inline-flex cursor-pointer items-center gap-2.5 rounded-full bg-ink px-[26px] py-4 text-[15px] font-medium text-white no-underline transition hover:-translate-y-0.5 hover:bg-black"
                href="#contact"
              >
                Set Appointment <span>↗</span>
              </a>
              <a
                className="inline-flex cursor-pointer items-center gap-2.5 rounded-full border border-[rgba(20,20,26,0.14)] bg-white/55 px-[26px] py-4 text-[15px] font-medium text-ink no-underline transition hover:-translate-y-0.5 hover:bg-white/85"
                href="#index"
              >
                Explore treatments
              </a>
            </div>
          </div>

          <div
            className="rise-in mt-12 grid grid-cols-2 gap-y-6 border-t border-line pt-6 sm:grid-cols-4"
            style={{ "--rise-delay": "320ms" } as React.CSSProperties}
          >
            {stats.map((s) => (
              <div key={s.label}>
                <div className="font-serif text-[30px] font-medium leading-none text-navy">
                  {s.value}
                </div>
                <div className="mt-[7px] text-[11.5px] uppercase tracking-[0.07em] text-muted3">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="group relative ml-auto h-[440px] w-full overflow-hidden rounded-[22px] bp:h-[580px] bp:w-[92%]">
            <Image
              src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=1000&auto=format&fit=crop"
              alt="Dentist reviewing a digital x-ray with a patient"
              fill
              sizes="(max-width: 980px) 100vw, 520px"
              priority
              className={zoom}
            />
          </div>

          <div className="group absolute bottom-8 left-0 hidden h-[190px] w-[240px] overflow-hidden rounded-[18px] border-[5px] border-[#edeae4] bp:block">
            <Image
              src="https://images.unsplash.com/photo-1600170311833-c2cf5280ce49?q=80&w=500&auto=format&fit=crop"
              alt="3D digital dental scan on a tablet"
              fill
              sizes="240px"
              className={zoom}
            />
          </div>

          <div className="absolute -top-7 right-4 flex h-[118px] w-[118px] items-center justify-center bp:-right-2">
            <svg
              viewBox="0 0 118 118"
              className="animate-spin-slow absolute inset-0 h-full w-full"
              aria-hidden="true"
            >
              <defs>
                <path
                  id="badge-circle"
                  d="M 59,59 m -44,0 a 44,44 0 1,1 88,0 a 44,44 0 1,1 -88,0"
                />
              </defs>
              <circle cx="59" cy="59" r="58" fill="#16161c" />
              <text
                fill="#edeae4"
                fontSize="10.5"
                letterSpacing="2.6"
                fontFamily="inherit"
              >
                <textPath href="#badge-circle">
                  BOOK A VISIT · LUMEN DENTAL ·
                </textPath>
              </text>
            </svg>
            <span className="relative text-[19px] text-[#edeae4]">↗</span>
          </div>

          <div className="absolute top-[54%] right-5 hidden items-center gap-2.5 rounded-full border border-white/50 bg-white/70 px-4 py-2.5 shadow-[0_10px_30px_-12px_rgba(20,20,26,0.25)] backdrop-blur-sm bp:flex">
            <span className="animate-pulse-dot h-2 w-2 rounded-full bg-navy" />
            <span className="text-[12.5px] font-medium text-ink">
              Same-day appointments
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
