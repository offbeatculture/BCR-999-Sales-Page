export default function WhatThisIs() {
  return (
    <section
      className="whatis"
      style={{
        backgroundImage: "url('/section_3_bg.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "top left",
      }}
    >
      <div className="wrap">
        <div className="eyebrow">☀ WHAT THIS IS..</div>

        <h2 className="serif">
          A community-led daily breathwork practice.
          <br />
          Live. Mon–Fri.
        </h2>

        <p className="lead">
          By now, you know what your breath can do. This is the practice that
          sets a new baseline for your body.
        </p>

        <p className="lead">
          Every weekday, a community member trained by Dr. Valarrmathi leads the
          session live - with the group, together.
        </p>

        <div className="sched-grid">
          <div className="sched-col">
            <span className="day-pill">MON / TUE / THU</span>

            <h3 className="serif">Breathwork</h3>

            <div className="sched-time">
              6:45 – 7:15 AM &nbsp;·&nbsp; 30 Minutes
            </div>

            <div className="modality">
              <div className="ico">
                <svg viewBox="0 0 24 24">
                  <path d="M12 4v6" />
                  <path d="M12 10c-1 3-4 3.5-5.5 2.5C5 11.5 5 9 6.5 8 8.5 6.7 11 8 12 10z" />
                  <path d="M12 10c1 3 4 3.5 5.5 2.5C19 11.5 19 9 17.5 8 15.5 6.7 13 8 12 10z" />
                </svg>
              </div>
              <div>
                <h4>Diaphragmatic breathing</h4>
                <p>The first signal to the body that it is safe. Before the day has even begun.</p>
              </div>
            </div>

            <div className="modality">
              <div className="ico">
                <span className="num">4-7<br />-8</span>
              </div>
              <div>
                <h4>4-7-8 breathwork</h4>
                <p>Directly activates the vagus nerve — the one nerve that controls your gut, your sleep, your heart rate, and your ability to feel calm.</p>
              </div>
            </div>

            <div className="modality">
              <div className="ico">
                <svg viewBox="0 0 24 24">
                  <path d="M3 9c2-2 4-2 6 0s4 2 6 0 4-2 6 0" />
                  <path d="M3 15c2-2 4-2 6 0s4 2 6 0 4-2 6 0" />
                </svg>
              </div>
              <div>
                <h4>Nadi Shodhana</h4>
                <p>Clears what stress has already started building since you woke up.</p>
              </div>
            </div>
          </div>

          <div className="sched-col">
            <span className="day-pill">WED / FRI</span>

            <h3 className="serif">Workout + Breathwork</h3>

            <div className="sched-time">
              6:15 – 7:15 AM &nbsp;·&nbsp; 60 Minutes
            </div>

            <div className="modality">
              <div className="ico">
                <svg viewBox="0 0 24 24">
                  <path d="M6.5 9v6M17.5 9v6M4 10.5v3M20 10.5v3M6.5 12h11" />
                </svg>
              </div>
              <div>
                <h4>Fitness expert-led movement</h4>
                <p>A guided 30 minutes workout targeting the specific stress zones in the body.</p>
              </div>
            </div>

            <div className="modality">
              <div className="ico">
                <svg viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="7" />
                  <circle cx="12" cy="12" r="2.6" />
                  <path d="M12 2v3M12 19v3M2 12h3M19 12h3" />
                </svg>
              </div>
              <div>
                <h4>Stress zone targeting</h4>
                <p>The body holds stress in muscles, not just breath. These sessions move it out physically, zone by zone.</p>
              </div>
            </div>

            <div className="modality">
              <div className="ico">
                <svg viewBox="0 0 24 24">
                  <path d="M12 3c2 2.5 2 5 0 7s-2 4.5 0 7" />
                  <path d="M12 3c-2 2.5-2 5 0 7s2 4.5 0 7" />
                  <circle cx="12" cy="20" r="1" />
                </svg>
              </div>
              <div>
                <h4>Breathwork integration</h4>
                <p>30 minutes of breathwork after the workout. Movement loosens what's stored. Breath lets it go.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="whatis-cta">
          <a className="cta" href="#join">
            Join the Daily Practice — Cancel Anytime <span className="arrow">→</span>
          </a>
        </div>

        <div className="whatis-tags">
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
    </section>
  );
}