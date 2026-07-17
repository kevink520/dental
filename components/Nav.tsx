import Link from "next/link";

export default function Nav() {
  return (
    <nav className="flex items-center justify-between pt-[26px] pb-2">
      <Link
        href="/"
        className="font-serif text-[25px] tracking-[-0.01em] text-navy no-underline"
      >
        Lumen<i className="italic">Dént</i>
      </Link>
      <div className="flex items-center gap-3">
        <button
          className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-[rgba(20,20,26,0.12)] bg-white/55 transition hover:bg-white/85"
          aria-label="Search"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <circle cx="7" cy="7" r="5" stroke="#244aa0" strokeWidth="1.5" />
            <line
              x1="11"
              y1="11"
              x2="15"
              y2="15"
              stroke="#244aa0"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </button>
        <button
          className="flex h-11 w-11 cursor-pointer flex-col items-center justify-center gap-1 rounded-full border border-[rgba(20,20,26,0.12)] bg-white/55 transition hover:bg-white/85"
          aria-label="Menu"
        >
          <span className="h-[1.6px] w-4 rounded-[2px] bg-navy" />
          <span className="h-[1.6px] w-4 rounded-[2px] bg-navy" />
        </button>
        <a
          className="ml-1.5 hidden cursor-pointer items-center gap-2 rounded-full bg-ink px-[22px] py-[13px] text-[14.5px] font-medium text-white no-underline transition hover:-translate-y-0.5 hover:bg-black sm:inline-flex"
          href="#contact"
        >
          Contact <span className="text-[13px]">↗</span>
        </a>
      </div>
    </nav>
  );
}
