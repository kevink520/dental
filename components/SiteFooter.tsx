"use client";

export default function SiteFooter() {
  return (
    <section
      className="mt-[90px] rounded-t-[28px] bg-[linear-gradient(180deg,#e4e1d9_0%,#dedbd2_100%)] px-6 pt-10 pb-8 sm:px-[52px] sm:pt-[60px] sm:pb-10"
      id="contact"
    >
      <div className="grid grid-cols-1 gap-8 border-b border-line-strong pb-[46px] bp:grid-cols-[1.1fr_1fr] bp:gap-12">
        <div>
          <h2 className="m-0 font-serif text-[clamp(30px,3.4vw,46px)] font-medium leading-[1.08] tracking-[-0.01em] text-navy">
            Illuminate Your <i className="italic">Smile</i> with
            <br />
            Confidence &amp; Care
          </h2>
          <form
            className="mt-[34px] max-w-[380px]"
            onSubmit={(e) => e.preventDefault()}
          >
            <div className="flex items-center border-b border-line-30 pb-2.5">
              <input
                type="email"
                placeholder="Send email to us"
                aria-label="Email address"
                className="flex-1 border-none bg-transparent text-[15px] text-ink outline-none"
              />
              <button
                type="submit"
                aria-label="Submit email"
                className="cursor-pointer border-none bg-transparent text-base text-navy"
              >
                ↗
              </button>
            </div>
          </form>
        </div>
        <div className="grid grid-cols-2 content-start gap-x-6 gap-y-7 pt-1.5">
          <div>
            <div className="text-[11px] uppercase tracking-[0.08em] text-muted3">
              Location
            </div>
            <div className="mt-2 text-[14.5px] leading-[1.5] text-[#33333a]">
              4517 Washington Ave.
              <br />
              Manchester, 39495
            </div>
          </div>
          <div>
            <div className="text-[11px] uppercase tracking-[0.08em] text-muted3">
              Call Us
            </div>
            <div className="mt-2 text-[14.5px] leading-[1.5] text-[#33333a]">
              +1 (201) 555-0124
            </div>
          </div>
          <div>
            <div className="text-[11px] uppercase tracking-[0.08em] text-muted3">
              Email
            </div>
            <div className="mt-2 text-[14.5px] leading-[1.5] text-[#33333a]">
              hello@lumendental.com
            </div>
          </div>
          <div>
            <div className="text-[11px] uppercase tracking-[0.08em] text-muted3">
              Open Time
            </div>
            <div className="mt-2 text-[14.5px] leading-[1.5] text-[#33333a]">
              08:00am – 07:00pm
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-8 py-11 sm:grid-cols-2 bp:grid-cols-[2fr_1fr_1fr_1fr] bp:gap-6">
        <div className="font-serif text-2xl text-navy">
          Lumen<i className="italic">Dént</i>
        </div>
        <div>
          <div className="mb-[14px] text-[11px] uppercase tracking-[0.08em] text-muted3">
            General
          </div>
          <div className="flex flex-col gap-2.5 text-sm text-[#44444a]">
            <a className="text-inherit no-underline transition-colors hover:text-navy" href="#">
              Home
            </a>
            <a className="text-inherit no-underline transition-colors hover:text-navy" href="#about">
              About Us
            </a>
            <a className="text-inherit no-underline transition-colors hover:text-navy" href="#services">
              Services
            </a>
            <a className="text-inherit no-underline transition-colors hover:text-navy" href="#testimonials">
              Testimonials
            </a>
          </div>
        </div>
        <div>
          <div className="mb-[14px] text-[11px] uppercase tracking-[0.08em] text-muted3">
            Company
          </div>
          <div className="flex flex-col gap-2.5 text-sm text-[#44444a]">
            <a className="text-inherit no-underline transition-colors hover:text-navy" href="#">
              Our Story
            </a>
            <a className="text-inherit no-underline transition-colors hover:text-navy" href="#">
              Careers
            </a>
            <a className="text-inherit no-underline transition-colors hover:text-navy" href="#">
              Press
            </a>
            <a className="text-inherit no-underline transition-colors hover:text-navy" href="#">
              Culture
            </a>
          </div>
        </div>
        <div>
          <div className="mb-[14px] text-[11px] uppercase tracking-[0.08em] text-muted3">
            Resources
          </div>
          <div className="flex flex-col gap-2.5 text-sm text-[#44444a]">
            <a className="text-inherit no-underline transition-colors hover:text-navy" href="#">
              Patient Forms
            </a>
            <a className="text-inherit no-underline transition-colors hover:text-navy" href="#">
              Insurance
            </a>
            <a className="text-inherit no-underline transition-colors hover:text-navy" href="#">
              FAQ
            </a>
            <a className="text-inherit no-underline transition-colors hover:text-navy" href="#">
              Blog
            </a>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-3 border-t border-line-strong pt-6">
        <div className="text-[13px] text-[#8a8a90]">
          © 2026, Lumen Dental. All rights reserved.
        </div>
        <div className="flex flex-wrap gap-[26px] text-[13px] text-[#8a8a90]">
          <span>Terms &amp; Conditions</span>
          <span>Privacy Policy</span>
          <a
            href="https://www.vitamin.nyc/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-inherit no-underline transition-colors hover:text-navy"
          >
            Site by Vitamin &amp; Code
          </a>
        </div>
      </div>
    </section>
  );
}
