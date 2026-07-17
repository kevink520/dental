export default function ServicesCta() {
  return (
    <section className="pt-24 text-center sm:pt-32">
      <div className="text-xs uppercase tracking-[0.08em] text-muted3">
        New patients welcome
      </div>
      <h2 className="mx-auto my-0 mt-5 max-w-[760px] font-serif text-[clamp(38px,4.6vw,64px)] font-medium leading-[1.04] tracking-[-0.015em] text-navy [text-wrap:balance]">
        Ready when <i className="italic">you</i> are.
      </h2>
      <p className="mx-auto mt-6 max-w-[440px] text-base leading-[1.6] text-muted">
        Book online in under a minute, or call and talk to a human. Either
        way, you&apos;ll leave knowing exactly what comes next.
      </p>
      <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
        <a
          className="inline-flex cursor-pointer items-center gap-2.5 rounded-full bg-ink px-[28px] py-4 text-[15px] font-medium text-white no-underline transition hover:-translate-y-0.5 hover:bg-black"
          href="#contact"
        >
          Set Appointment <span>↗</span>
        </a>
        <a
          className="inline-flex cursor-pointer items-center gap-2.5 rounded-full border border-[rgba(20,20,26,0.14)] bg-white/55 px-[28px] py-4 text-[15px] font-medium text-ink no-underline transition hover:-translate-y-0.5 hover:bg-white/85"
          href="#faq"
        >
          Read the FAQ
        </a>
      </div>
    </section>
  );
}
