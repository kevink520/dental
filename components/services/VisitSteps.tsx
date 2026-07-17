const steps = [
  {
    num: "01",
    title: "Say hello",
    desc: "A relaxed conversation about your goals and history — no chair, no tools, no pressure.",
    offset: "",
  },
  {
    num: "02",
    title: "Your plan, in plain language",
    desc: "Digital imaging, an honest diagnosis, and options at different price points. You decide.",
    offset: "bp:mt-10",
  },
  {
    num: "03",
    title: "Treatment, unhurried",
    desc: "Noise-cancelling headphones, warm blankets, and breaks whenever you raise a hand.",
    offset: "bp:mt-20",
  },
  {
    num: "04",
    title: "Aftercare that follows up",
    desc: "A real person checks in the next day, and your recall visits are booked before you leave.",
    offset: "bp:mt-[120px]",
  },
];

export default function VisitSteps() {
  return (
    <section className="pt-16 sm:pt-24">
      <div className="flex items-center justify-between border-b border-line pb-[18px]">
        <div className="inline-flex items-center rounded-full border border-[rgba(20,20,26,0.1)] bg-white/60 px-[18px] py-2 text-[13.5px] font-medium text-ink">
          Your First Visit
        </div>
        <div className="text-sm tracking-[0.02em] text-muted3">(03)</div>
      </div>

      <div className="mt-[46px] flex flex-col gap-6 bp:flex-row bp:items-end bp:justify-between">
        <h2 className="m-0 max-w-[560px] font-serif text-[clamp(32px,3.6vw,48px)] font-medium leading-[1.08] tracking-[-0.01em] text-navy">
          Four steps. <i className="italic">Zero</i> surprises.
        </h2>
        <p className="m-0 max-w-[340px] text-[14.5px] leading-[1.6] text-muted">
          Every treatment at Lumen follows the same calm rhythm — here&apos;s
          exactly what to expect.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 bp:grid-cols-4 bp:gap-y-0">
        {steps.map((s) => (
          <div key={s.num} className={`border-t border-line-30 pt-6 ${s.offset}`}>
            <div className="font-serif text-[44px] font-medium leading-none text-navy/25">
              {s.num}
            </div>
            <div className="mt-5 font-serif text-[21px] leading-[1.2] text-navy">
              {s.title}
            </div>
            <p className="m-0 mt-3 text-[13.5px] leading-[1.6] text-muted2">
              {s.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
