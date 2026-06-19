export default function Nav() {
  return (
    <nav className="nav">
      <div className="logo">
        Lumen<i>Dént</i>
      </div>
      <div className="nav-actions">
        <button className="icon-btn" aria-label="Search">
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
          className="icon-btn"
          aria-label="Menu"
          style={{ flexDirection: "column", gap: "4px" }}
        >
          <span
            style={{
              width: "16px",
              height: "1.6px",
              background: "#244aa0",
              borderRadius: "2px",
            }}
          />
          <span
            style={{
              width: "16px",
              height: "1.6px",
              background: "#244aa0",
              borderRadius: "2px",
            }}
          />
        </button>
        <a className="btn-dark nav" href="#contact" style={{ marginLeft: "6px" }}>
          Contact <span style={{ fontSize: "13px" }}>↗</span>
        </a>
      </div>
    </nav>
  );
}
