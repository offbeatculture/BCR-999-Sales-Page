const features = [
  "Live sessions Mon–Fri, every morning",
  "Breathwork + Workout + Breathwork format",
  "Community-led, Dr. Valarrmathi's structure",
  "~20 live sessions per month",
  "Cancel anytime, no questions asked",
];

function Check() {
  return (
    <svg viewBox="0 0 24 24"><path d="M20 6L9 17l-5-5" /></svg>
  );
}

export default function Payment() {
  return (
    <section className="payment" id="join">
      <div className="wrap">
        <div className="eyebrow" style={{ color: "var(--gold-soft)" }}>Daily Breathwork Membership</div>
        <h2 className="serif">It's time to make this permanent.</h2>
        <p className="pay-sub">Continue what you started. Join the daily practice.</p>

        <div className="pay-card">
          <div className="pay-price-block">
            <div className="pay-label">Monthly Membership</div>
            <div className="pay-price">₹999 <span className="pay-period">/month</span></div>
            <div className="pay-note">Special rate for 5-day program participants</div>
          </div>
          <ul className="pay-features">
            {features.map((f) => (
              <li key={f}><Check />{f}</li>
            ))}
          </ul>
         <a
  className="cta pay-cta"
  href="https://rzp.io/rzp/breathwork-bcl"
  target="_blank"
  rel="noopener noreferrer"
>
  Join the Daily Practice — ₹999/month <span className="arrow">→</span>
</a>
          <div className="pay-cancel">Cancel anytime. No refunds on current month.</div>
        </div>
      </div>
    </section>
  );
}
