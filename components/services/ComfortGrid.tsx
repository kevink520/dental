import Image from "next/image";

const zoom =
  "object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] motion-safe:group-hover:scale-[1.06]";

const features = [
  {
    title: "Sedation options",
    desc: "Nitrous and oral sedation for anxious patients — you set the pace, always.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M20 13.2A8.1 8.1 0 0 1 10.8 4 8.5 8.5 0 1 0 20 13.2Z"
          stroke="#244aa0"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "0% monthly plans",
    desc: "Split larger treatments into twelve interest-free payments, arranged in minutes.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect
          x="3"
          y="5.5"
          width="18"
          height="13"
          rx="2.5"
          stroke="#244aa0"
          strokeWidth="1.5"
        />
        <path d="M3 10h18" stroke="#244aa0" strokeWidth="1.5" />
        <path
          d="M7 14.5h4"
          stroke="#244aa0"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Family block scheduling",
    desc: "Back-to-back chairs for the whole household — one trip, zero waiting.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect
          x="3.5"
          y="5"
          width="17"
          height="15.5"
          rx="2.5"
          stroke="#244aa0"
          strokeWidth="1.5"
        />
        <path
          d="M8 3v4M16 3v4M3.5 10h17"
          stroke="#244aa0"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
];

export default function ComfortGrid() {
  return (
    <section className="pt-16 sm:pt-24">
      <div className="flex items-center justify-between border-b border-line pb-[18px]">
        <div className="inline-flex items-center rounded-full border border-[rgba(20,20,26,0.1)] bg-white/60 px-[18px] py-2 text-[13.5px] font-medium text-ink">
          Comfort, Considered
        </div>
        <div className="text-sm tracking-[0.02em] text-muted3">(04)</div>
      </div>

      <div className="mt-[46px] grid grid-cols-1 items-stretch gap-6 bp:grid-cols-[1.14fr_1fr]">
        <div className="group relative min-h-[340px] overflow-hidden rounded-[22px] bp:min-h-[460px]">
          <Image
            src="https://images.unsplash.com/photo-1598256989800-fe5f95da9787?q=80&w=1000&auto=format&fit=crop"
            alt="A calm, sunlit Lumen Dental treatment room"
            fill
            sizes="(max-width: 980px) 100vw, 560px"
            className={zoom}
          />
          <div className="absolute inset-x-5 bottom-5 rounded-[16px] border border-white/50 bg-white/70 p-5 backdrop-blur-md">
            <div className="font-serif text-[20px] leading-[1.25] text-navy">
              Quiet rooms, warm light, <i className="italic">unhurried</i>{" "}
              appointments.
            </div>
            <div className="mt-1.5 text-[12.5px] text-muted2">
              Designed with anxious patients in mind — because most of us are.
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="flex flex-1 items-start gap-5 rounded-[18px] border border-line-soft bg-white/55 p-[26px] transition-colors hover:bg-white/80"
            >
              <span className="flex h-11 w-11 flex-none items-center justify-center rounded-full border border-line bg-white/70">
                {f.icon}
              </span>
              <div>
                <div className="font-serif text-[20px] leading-[1.2] text-navy">
                  {f.title}
                </div>
                <p className="m-0 mt-2 text-[13.5px] leading-[1.6] text-muted2">
                  {f.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
