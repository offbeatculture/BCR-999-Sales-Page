const before = [
  "Waking up tired even after 8 hours of sleep",
  "Stomach tight, bloated, reacting to everything",
  "Body tight and braced all day",
  "Mind racing — the same thoughts, looping",
  "Grief, anger, old patterns sitting heavy in the body",
  "Living in survival mode without realising it",
];
const after = [
  "Waking up and actually feeling rested",
  "Gut settling — less reactive, more at ease",
  "Body that knows how to loosen and relax",
  "A mind that can actually be still, and calm",
  "Emotions that move through — instead of staying stuck",
  "A nervous system that knows it is safe",
];

function Dot() {
  return (
    <span className="ico">
      <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="4" /></svg>
    </span>
  );
}

export default function RealShift() {
  return (
    <section className="shift">
      <div className="wrap">
        <div className="eyebrow">The Real Shift</div>
        <h2 className="serif">What changes when the practice becomes daily.</h2>

        <div className="ba-table">
          <div className="ba-head before">Before</div>
          <div className="ba-head after">After</div>

          <div className="ba-col before">
            {before.map((t) => (
              <div className="ba-row" key={t}><Dot /><p>{t}</p></div>
            ))}
          </div>
          <div className="ba-col after">
            {after.map((t) => (
              <div className="ba-row" key={t}><Dot /><p>{t}</p></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
