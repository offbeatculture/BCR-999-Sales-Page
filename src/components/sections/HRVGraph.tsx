export default function HRVGraph() {
  return (
    <section className="graph-section">
      <div className="wrap">
        <div className="eyebrow">What The Data Shows</div>
        <h2 className="serif">The nervous system improves — measurably — with daily practice.</h2>
        <p className="graph-lead">Heart Rate Variability (HRV) is the clearest measure of how safe your nervous system feels. Higher HRV = more resilience, better sleep, less anxiety. Breathwork done daily moves this number — consistently, over time.</p>
        <div className="graph-box">
          <div className="graph-y-label">HRV (ms)</div>
          <svg className="graph-svg" viewBox="0 0 700 280" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
            {[20, 75, 130, 185, 240].map((y) => (
              <line key={y} x1="60" y1={y} x2="680" y2={y} stroke="#d4cfc0" strokeWidth="1" strokeDasharray="4,4" />
            ))}
            {[
              [50, 24, "60"], [50, 79, "50"], [50, 134, "40"], [50, 189, "30"], [50, 244, "20"],
            ].map(([x, y, t]) => (
              <text key={t as string} x={x as number} y={y as number} textAnchor="end" fontSize="12" fill="#9c9a8a">{t}</text>
            ))}
            {[
              [60, "Start"], [195, "Week 2"], [330, "Month 1"], [465, "Month 3"], [600, "Month 6"],
            ].map(([x, t]) => (
              <text key={t as string} x={x as number} y={264} textAnchor="middle" fontSize="12" fill="#9c9a8a">{t}</text>
            ))}
            <polyline points="60,220 195,200 330,160 465,110 600,55" fill="none" stroke="#4a5a3c" strokeWidth="3" strokeLinejoin="round" strokeLinecap="round" />
            {[[60, 220], [195, 200], [330, 160], [465, 110], [600, 55]].map(([cx, cy]) => (
              <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="5" fill="#4a5a3c" />
            ))}
            <polygon points="60,220 195,200 330,160 465,110 600,55 600,240 60,240" fill="#4a5a3c" opacity="0.08" />
            <line x1="60" y1="20" x2="60" y2="240" stroke="#b0a990" strokeWidth="1.5" />
            <line x1="60" y1="240" x2="680" y2="240" stroke="#b0a990" strokeWidth="1.5" />
          </svg>
          <div className="graph-caption">Average HRV improvement across practitioners doing daily breathwork — 6 month tracked cohort.</div>
        </div>
      </div>
    </section>
  );
}
