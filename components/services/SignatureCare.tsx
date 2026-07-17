import Image from "next/image";

const zoom =
  "object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] motion-safe:group-hover:scale-[1.06]";

const points = [
  "Shade-matched to your skin tone and features",
  "Preview your result with a digital smile mock-up",
  "Enamel-safe whitening, supervised in-chair",
  "A maintenance plan that keeps it bright",
];

function Check() {
  return (
    <span className="mt-[3px] flex h-[22px] w-[22px] flex-none items-center justify-center rounded-full bg-navy/10">
      <svg
        width="11"
        height="11"
        viewBox="0 0 12 12"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M2 6.2 L4.8 9 L10 3"
          stroke="#244aa0"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

export default function SignatureCare() {
  return (
    <section className="pt-16 sm:pt-24">
      <div className="flex items-center justify-between border-b border-line pb-[18px]">
        <div className="inline-flex items-center rounded-full border border-[rgba(20,20,26,0.1)] bg-white/60 px-[18px] py-2 text-[13.5px] font-medium text-ink">
          Signature Care
        </div>
        <div className="text-sm tracking-[0.02em] text-muted3">(02)</div>
      </div>

      <div className="mt-[46px] grid grid-cols-1 items-center gap-10 bp:grid-cols-[1fr_1fr] bp:gap-16">
        <div className="relative">
          <div className="group relative h-[380px] w-full overflow-hidden rounded-[22px] bp:h-[520px]">
            <Image
              src="https://images.unsplash.com/photo-1588776813677-77aaf5595b83?q=80&w=1000&auto=format&fit=crop"
              alt="Dentist performing precise cosmetic work under a surgical lamp"
              fill
              sizes="(max-width: 980px) 100vw, 540px"
              className={zoom}
            />
          </div>
          <div className="absolute -bottom-5 right-5 rounded-[16px] border border-white/50 bg-white/75 px-5 py-4 shadow-[0_14px_36px_-16px_rgba(20,20,26,0.3)] backdrop-blur-md bp:right-8">
            <div className="font-serif text-[26px] leading-none text-navy">
              8 shades
            </div>
            <div className="mt-1 text-[11.5px] uppercase tracking-[0.07em] text-muted2">
              Brighter, in 2 visits
            </div>
          </div>
        </div>

        <div>
          <h2 className="m-0 font-serif text-[clamp(32px,3.6vw,48px)] font-medium leading-[1.08] tracking-[-0.01em] text-navy">
            A brighter smile, <i className="italic">designed</i> around you.
          </h2>
          <p className="mt-6 max-w-[480px] text-base leading-[1.65] text-muted">
            Our most-requested treatment pairs in-chair whitening with subtle
            reshaping and edge bonding. Nothing off-the-shelf — every plan
            starts with how your smile fits your face, not a shade chart.
          </p>

          <ul className="m-0 mt-8 flex list-none flex-col gap-[14px] p-0">
            {points.map((p) => (
              <li
                key={p}
                className="flex items-start gap-3 text-[14.5px] leading-[1.5] text-ink"
              >
                <Check />
                {p}
              </li>
            ))}
          </ul>

          <div className="mt-9 flex flex-wrap items-center gap-5">
            <a
              className="inline-flex cursor-pointer items-center gap-2.5 rounded-full bg-ink px-[26px] py-4 text-[15px] font-medium text-white no-underline transition hover:-translate-y-0.5 hover:bg-black"
              href="#contact"
            >
              Book a Consultation <span>↗</span>
            </a>
            <span className="text-[13px] text-muted3">
              Consultations from $50 · credited toward treatment
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
