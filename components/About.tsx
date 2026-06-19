import Image from "next/image";

export default function About() {
  return (
    <section className="section" id="about">
      <div className="section-head">
        <div className="chip">About Us</div>
        <div className="section-num">(01)</div>
      </div>

      <div className="about-statement">
        <p>
          <span className="inline-img">
            <Image
              src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=400&auto=format&fit=crop"
              alt="Dental detail"
              fill
              sizes="130px"
            />
          </span>
          We create lasting relationships — built on <i>trust and care</i>. Our
          team is committed to making <i>every visit comfortable</i>, and fit for
          you.
        </p>
      </div>

      <div className="about-foot">
        <div>
          <div className="stats-label">
            Trusted by thousands for a healthier smile.
          </div>
          <div className="stats">
            <div>
              <div className="stat-num">
                98<span>%</span>
              </div>
              <div className="stat-cap">Satisfaction</div>
            </div>
            <div>
              <div className="stat-num">
                5,000<span>+</span>
              </div>
              <div className="stat-cap">Smiles Transformed</div>
            </div>
            <div>
              <div className="stat-num">
                4.9<span>★</span>
              </div>
              <div className="stat-cap">Star Rating</div>
            </div>
          </div>
        </div>

        <div className="about-badges">
          <div className="badge-seal">
            <div>
              Best
              <br />
              Dental
              <br />
              <small>2 0 2 6</small>
            </div>
          </div>
          <div className="about-patient">
            <Image
              src="https://images.unsplash.com/photo-1609840114035-3c981b782dfe?q=80&w=600&auto=format&fit=crop"
              alt="Patient in dental chair"
              fill
              sizes="280px"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
