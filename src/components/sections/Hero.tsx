export default function Hero() {
  return (
    <section
      className="hero"
      style={{
        backgroundImage: "url('/hero_section_bg.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    >
      <div className="hero-overlay" />

      <div className="hero-inner hero-inner-up">
        <div className="hero-content hero-content-up">
          <div className="badge">
            <span className="dot">☀</span>
            <span>Daily Breathwork Membership</span>
          </div>
<h1 className="serif hero-title">
  <span style={{ display: "block", whiteSpace: "nowrap" }}>
    The shift happened in 5 days.
  </span>

  <span style={{ display: "block" }}>
    Making it permanent takes every morning after.
  </span>
</h1>

          <p className="hero-sub">
           Stress accumulates daily. Without daily practice, the body goes back to what it knows.
          </p>

          <div className="video-box video-box-up">
            <div className="play">
              <svg viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
            <div className="vlabel">Insert Video Here</div>
            <div className="vsub">Watch Dr. Valar explain the practice</div>
          </div>

          <a
  className="cta"
  href="https://rzp.io/rzp/breathwork-bcl"
  target="_blank"
  rel="noopener noreferrer"
>
  Join the Daily Practice — Cancel Anytime{" "}
  <span className="arrow">→</span>
</a>

          <div className="hero-meta">
            Mon, Tue, Thu · Breathwork · 6:45 AM
            <span className="sep">|</span>
            Wed, Fri · Workout + Breathwork · 6:15 AM
          </div>

          <div className="hero-tags">
            <span>
              <svg viewBox="0 0 24 24">
                <path d="M12 21s-7-5.2-7-11a7 7 0 0114 0c0 5.8-7 11-7 11z" />
                <circle cx="12" cy="10" r="2.5" />
              </svg>
              Live Online
            </span>

            <span>
              <svg viewBox="0 0 24 24">
                <circle cx="9" cy="8" r="3" />
                <circle cx="17" cy="9" r="2.3" />
                <path d="M3.5 20c0-3 2.5-5 5.5-5s5.5 2 5.5 5" />
                <path d="M15.5 20c0-2.4 1.6-3.8 3.5-3.8" />
              </svg>
              Community-led
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}