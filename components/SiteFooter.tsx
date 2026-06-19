"use client";

export default function SiteFooter() {
  return (
    <section className="cta" id="contact">
      <div className="cta-top">
        <div>
          <h2>
            Illuminate Your <i>Smile</i> with
            <br />
            Confidence &amp; Care
          </h2>
          <form className="cta-form" onSubmit={(e) => e.preventDefault()}>
            <div className="cta-field">
              <input
                type="email"
                placeholder="Send email to us"
                aria-label="Email address"
              />
              <button type="submit" aria-label="Submit email">
                ↗
              </button>
            </div>
          </form>
        </div>
        <div className="cta-contact">
          <div>
            <div className="contact-k">Location</div>
            <div className="contact-v">
              4517 Washington Ave.
              <br />
              Manchester, 39495
            </div>
          </div>
          <div>
            <div className="contact-k">Call Us</div>
            <div className="contact-v">+1 (201) 555-0124</div>
          </div>
          <div>
            <div className="contact-k">Email</div>
            <div className="contact-v">hello@lumendental.com</div>
          </div>
          <div>
            <div className="contact-k">Open Time</div>
            <div className="contact-v">08:00am – 07:00pm</div>
          </div>
        </div>
      </div>

      <div className="cta-cols">
        <div className="cta-logo">
          Lumen<i>Dént</i>
        </div>
        <div>
          <div className="col-head">General</div>
          <div className="col-links">
            <a href="#">Home</a>
            <a href="#about">About Us</a>
            <a href="#services">Services</a>
            <a href="#testimonials">Testimonials</a>
          </div>
        </div>
        <div>
          <div className="col-head">Company</div>
          <div className="col-links">
            <a href="#">Our Story</a>
            <a href="#">Careers</a>
            <a href="#">Press</a>
            <a href="#">Culture</a>
          </div>
        </div>
        <div>
          <div className="col-head">Resources</div>
          <div className="col-links">
            <a href="#">Patient Forms</a>
            <a href="#">Insurance</a>
            <a href="#">FAQ</a>
            <a href="#">Blog</a>
          </div>
        </div>
      </div>

      <div className="cta-bottom">
        <div className="copyright">
          © 2026, Lumen Dental. All rights reserved.
        </div>
        <div className="legal">
          <span>Terms &amp; Conditions</span>
          <span>Privacy Policy</span>
          <a
            href="https://www.vitamin.nyc/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Site by Vitamin &amp; Code
          </a>
        </div>
      </div>
    </section>
  );
}
