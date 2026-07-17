const items = [
  "Orthodontics",
  "Whitening",
  "Veneers",
  "Implants",
  "Clear Aligners",
  "Pediatric Care",
  "Hygiene",
  "Emergency Care",
];

function Sparkle() {
  return (
    <svg
      width="11"
      height="11"
      viewBox="0 0 24 24"
      fill="#244aa0"
      aria-hidden="true"
      className="mx-7 flex-none opacity-60"
    >
      <path d="M12 0 L14.4 9.6 L24 12 L14.4 14.4 L12 24 L9.6 14.4 L0 12 L9.6 9.6 Z" />
    </svg>
  );
}

function Row({ hidden = false }: { hidden?: boolean }) {
  return (
    <div
      className="flex flex-none items-center"
      aria-hidden={hidden || undefined}
    >
      {items.map((item, i) => (
        <span key={item} className="flex items-center">
          <span
            className={
              i % 2 === 0
                ? "font-serif text-[19px] italic text-navy"
                : "text-[13px] font-medium uppercase tracking-[0.14em] text-muted2"
            }
          >
            {item}
          </span>
          <Sparkle />
        </span>
      ))}
    </div>
  );
}

export default function Marquee() {
  return (
    <div className="mt-14 overflow-hidden border-y border-line py-[18px]">
      <div className="animate-marquee flex w-max">
        <Row />
        <Row hidden />
      </div>
    </div>
  );
}
