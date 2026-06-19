import Image from "next/image";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-copy">
        <div>
          <h1>
            Caring for Your <i>Smile</i>, One Visit at a Time.
          </h1>
          <p className="hero-lede">
            Your smile is more than just an expression — it&apos;s a reflection
            of your confidence, health, and everyday happiness.
          </p>
          <div className="hero-cta">
            <a className="btn-dark" href="#contact">
              Set Appointment <span>↗</span>
            </a>
          </div>
        </div>
        <div style={{ marginTop: "48px" }}>
          <div className="brands-label">Caring for families across the city</div>
          <div className="brands">
            <span style={{ fontSize: "18px", letterSpacing: "-0.02em" }}>
              Meridian
            </span>
            <span
              className="serif"
              style={{ fontSize: "19px", fontStyle: "italic", fontWeight: 600 }}
            >
              Northgate
            </span>
            <span style={{ fontSize: "17px", letterSpacing: "0.04em" }}>
              CLARITY
            </span>
            <span style={{ fontSize: "18px", fontWeight: 600 }}>zenwell</span>
          </div>
        </div>
      </div>

      <div className="hero-media">
        <div className="hero-img">
          <Image
            src="/images/a-smiling-young-woman.png"
            alt="Smiling young woman"
            fill
            sizes="(max-width: 980px) 100vw, 600px"
            priority
          />
        </div>
        {/*<div className="hero-card">
          <div className="hero-card-bar">
            <span className="dot" style={{ background: "#f15b50" }} />
            <span className="dot" style={{ background: "#f5b73d" }} />
            <span className="dot" style={{ background: "#46c06a" }} />
            <span
              style={{
                marginLeft: "6px",
                fontSize: "10.5px",
                color: "#8a8a90",
                letterSpacing: "0.02em",
              }}
            >
              Lumen · Product
            </span>
          </div>
          <div className="hero-card-body">
            <div className="hero-card-title">
              Glowing
              <br />
              Toothbrush
            </div>
            <div className="hero-card-specs">
              <div>
                <div className="spec-k">Bristle Type</div>
                <div className="spec-v">Soft</div>
              </div>
              <div>
                <div className="spec-k">Handle</div>
                <div className="spec-v">Ergonomic</div>
              </div>
            </div>
          </div>
        </div>*/}
      </div>
    </section>
  );
}
