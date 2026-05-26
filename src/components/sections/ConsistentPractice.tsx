const cards = [
  {
    stage: "Week 1–2",
    text: "The mornings feel lighter. Sleep improves. The body starts loosening. You notice you're not as heavy getting out of bed.",
  },
  {
    stage: "Month 1–2",
    text: "The body stops being so tight. Muscles start to feel less rigid. The stiffness that's been with you for years begins to ease. You start feeling flexible and loose.",
  },
  {
    stage: "Month 3 - 6",
    text: "Safety becomes the default state. You start and end your day from a place of calm. Small things stop triggering big reactions.",
  },
  {
    stage: "Month 6 - 12",
    text: "A new baseline. Decisions get clearer. Sleep deepens. Gut calms down. BP stabilises. The body starts working with you, not against you.",
  },
];

export default function ConsistentPractice() {
  return (
    <section className="timeline">
      <div className="wrap">
        <div className="eyebrow">
          What Consistent Breathwork Practice Can Do
        </div>

        <h2 className="serif">
          What consistent breathwork practice can do.
        </h2>

        <div className="tl-grid">
          {cards.map((c) => (
            <div className="tl-card" key={c.stage}>
              <div className="stage">{c.stage}</div>
              <p>{c.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}