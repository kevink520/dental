import Image from "next/image";

const zoom =
  "object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] motion-safe:group-hover:scale-[1.06]";

export default function About() {
  return (
    <section className="pt-16 sm:pt-24" id="about">
      <div className="flex items-center justify-between border-b border-line pb-[18px]">
        <div className="inline-flex items-center rounded-full border border-[rgba(20,20,26,0.1)] bg-white/60 px-[18px] py-2 text-[13.5px] font-medium text-ink">
          About Us
        </div>
        <div className="text-sm tracking-[0.02em] text-muted3">(01)</div>
      </div>

      <div className="mt-14">
        <p className="mx-auto my-0 max-w-[1000px] text-center font-serif text-[clamp(28px,3.5vw,50px)] font-medium leading-[1.18] tracking-[-0.01em] text-navy [text-wrap:balance]">
          <span className="group relative mx-1.5 inline-block h-[52px] w-[90px] -translate-y-[6px] overflow-hidden rounded-[12px] align-middle sm:mx-3 sm:h-[70px] sm:w-[130px]">
            <Image
              src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=400&auto=format&fit=crop"
              alt="Dental detail"
              fill
              sizes="130px"
              className={zoom}
            />
          </span>
          We create lasting relationships — built on <i className="italic">trust and care</i>. Our
          team is committed to making <i className="italic">every visit comfortable</i>, and fit for
          you.
        </p>
      </div>

      <div className="mt-16 flex flex-col items-start gap-10 sm:flex-row sm:flex-wrap sm:items-end sm:justify-between">
        <div>
          <div className="mb-[22px] text-sm text-muted2">
            Trusted by thousands for a healthier smile.
          </div>
          <div className="flex flex-wrap gap-7 sm:gap-12">
            <div>
              <div className="font-serif text-[54px] font-medium leading-none text-navy">
                98<span className="text-[24px]">%</span>
              </div>
              <div className="mt-2 text-[13.5px] text-muted2">Satisfaction</div>
            </div>
            <div>
              <div className="font-serif text-[54px] font-medium leading-none text-navy">
                5,000<span className="text-[24px]">+</span>
              </div>
              <div className="mt-2 text-[13.5px] text-muted2">
                Smiles Transformed
              </div>
            </div>
            <div>
              <div className="font-serif text-[54px] font-medium leading-none text-navy">
                4.9<span className="text-[22px]">★</span>
              </div>
              <div className="mt-2 text-[13.5px] text-muted2">Star Rating</div>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-[22px]">
          <div className="flex h-[118px] w-[118px] flex-none items-center justify-center rounded-full border border-[rgba(20,20,26,0.18)] text-center">
            <div className="font-serif text-[13px] italic leading-[1.2] text-navy">
              Best
              <br />
              Dental
              <br />
              <small className="text-[10px] not-italic tracking-[0.18em]">
                2 0 2 6
              </small>
            </div>
          </div>
          <div className="group relative h-[170px] w-[280px] overflow-hidden rounded-2xl">
            <Image
              src="https://images.unsplash.com/photo-1609840114035-3c981b782dfe?q=80&w=600&auto=format&fit=crop"
              alt="Patient in dental chair"
              fill
              sizes="280px"
              className={zoom}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
