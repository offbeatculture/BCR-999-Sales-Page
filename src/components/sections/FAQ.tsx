import { useState } from "react";

const items = [
  { q: "What if I miss a day?", a: "That's fine. You come back the next morning and continue. One skipped day doesn't undo the practice. Consistency over time is what matters — not perfection." },
  { q: "I already know the techniques from the 5-day program. Why do I need this?", a: "Knowing and doing every morning are different things. The 5 days gave you the understanding. This gives you the structure that makes it stick." },
  { q: "Is Dr. Valarrmathi present in every session?", a: "This is a community-led session. Dr. Valar has designed the structure — the community holds the practice together every morning." },
  { q: "How is this different from just doing breathwork on my own?", a: "Doing it alone, it's easy to shorten, skip, or stop. The community and the fixed time remove that choice, and hold you accountable." },
  { q: "Can I cancel anytime?", a: "Yes. There are no refunds on the current month — but you can cancel anytime and you won't be charged for the next one. No questions asked." },
  { q: "Can I get the recordings?", a: "There are no recordings — and that's intentional. A recording can be watched later. Later becomes never. The live session at 6:30 AM is what creates the accountability. The group is there. The time is fixed. This is what makes the practice actually happen." },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section
      className="faq"
      style={{
        backgroundImage: "url('/section_4_bg.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="wrap">
        <div className="eyebrow">FAQ</div>
        <h2 className="serif">Frequently Asked Questions</h2>
        <div className="faq-list">
          {items.map((it, i) => (
            <div className={`faq-item${open === i ? " open" : ""}`} key={it.q}>
              <button className="faq-q" onClick={() => setOpen(open === i ? null : i)}>
                {it.q} <span className="plus">+</span>
              </button>
              <div className="faq-a"><p>{it.a}</p></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}