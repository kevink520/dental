import Image from "next/image";

const zoom =
  "object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] motion-safe:group-hover:scale-[1.06]";

export default function Hero() {
  return (
    <section className="grid grid-cols-1 items-stretch gap-10 pt-[34px] pb-2.5 bp:grid-cols-[1.02fr_1fr]">
      <div className="flex flex-col justify-between pt-5">
        <div>
          <h1 className="m-0 font-serif text-[clamp(44px,5.4vw,76px)] font-medium leading-[0.98] tracking-[-0.018em] text-navy">
            Caring for Your <i className="italic">Smile</i>, One Visit at a Time.
          </h1>
          <p className="mt-[26px] max-w-[430px] text-base leading-[1.6] text-muted">
            Your smile is more than just an expression — it&apos;s a reflection
            of your confidence, health, and everyday happiness.
          </p>
          <div className="mt-[30px]">
            <a
              className="inline-flex cursor-pointer items-center gap-2.5 rounded-full bg-ink px-[26px] py-4 text-[15px] font-medium text-white no-underline transition hover:-translate-y-0.5 hover:bg-black"
              href="#contact"
            >
              Set Appointment <span>↗</span>
            </a>
          </div>
        </div>
        <div className="mt-12">
          <div className="mb-4 text-xs uppercase tracking-[0.06em] text-muted3">
            Caring for families across the city
          </div>
          <div className="flex flex-wrap items-center gap-[34px] font-bold text-ink opacity-40">
            <span className="text-[18px] tracking-[-0.02em]">Meridian</span>
            <span className="font-serif text-[19px] font-semibold italic">
              Northgate
            </span>
            <span className="text-[17px] tracking-[0.04em]">CLARITY</span>
            <span className="text-[18px] font-semibold">zenwell</span>
          </div>
        </div>
      </div>

      <div className="relative">
        <div className="group relative h-[460px] w-full overflow-hidden rounded-[22px] bp:h-[600px]">
          <Image
            src="/images/a-smiling-young-woman.png"
            alt="Smiling young woman"
            fill
            sizes="(max-width: 980px) 100vw, 600px"
            priority
            className={zoom}
          />
        </div>
      </div>
    </section>
  );
}
