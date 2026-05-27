// export default function HRVGraph() {
//   return (
//     <section className="graph-section">
//       <div className="wrap">
//         <div className="eyebrow">What The Data Shows</div>
//         <h2 className="serif">The nervous system improves — measurably — with daily practice.</h2>
//         <p className="graph-lead">Heart Rate Variability (HRV) is the clearest measure of how safe your nervous system feels. Higher HRV = more resilience, better sleep, less anxiety. Breathwork done daily moves this number — consistently, over time.</p>
//         <div className="graph-box">
//           <div className="graph-y-label">HRV (ms)</div>
//           <svg className="graph-svg" viewBox="0 0 700 280" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid meet">
//             {[20, 75, 130, 185, 240].map((y) => (
//               <line key={y} x1="60" y1={y} x2="680" y2={y} stroke="#d4cfc0" strokeWidth="1" strokeDasharray="4,4" />
//             ))}
//             {[
//               [50, 24, "60"], [50, 79, "50"], [50, 134, "40"], [50, 189, "30"], [50, 244, "20"],
//             ].map(([x, y, t]) => (
//               <text key={t as string} x={x as number} y={y as number} textAnchor="end" fontSize="12" fill="#9c9a8a">{t}</text>
//             ))}
//             {[
//               [60, "Start"], [195, "Week 2"], [330, "Month 1"], [465, "Month 3"], [600, "Month 6"],
//             ].map(([x, t]) => (
//               <text key={t as string} x={x as number} y={264} textAnchor="middle" fontSize="12" fill="#9c9a8a">{t}</text>
//             ))}
//             <polyline points="60,220 195,200 330,160 465,110 600,55" fill="none" stroke="#4a5a3c" strokeWidth="3" strokeLinejoin="round" strokeLinecap="round" />
//             {[[60, 220], [195, 200], [330, 160], [465, 110], [600, 55]].map(([cx, cy]) => (
//               <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="5" fill="#4a5a3c" />
//             ))}
//             <polygon points="60,220 195,200 330,160 465,110 600,55 600,240 60,240" fill="#4a5a3c" opacity="0.08" />
//             <line x1="60" y1="20" x2="60" y2="240" stroke="#b0a990" strokeWidth="1.5" />
//             <line x1="60" y1="240" x2="680" y2="240" stroke="#b0a990" strokeWidth="1.5" />
//           </svg>
//           <div className="graph-caption">Average HRV improvement across practitioners doing daily breathwork — 6 month tracked cohort.</div>
//         </div>
//       </div>
//     </section>
//   );
// }

export default function HRVGraph() {
  const withoutPractice = [
    [70, 112],
    [205, 165],
    [340, 205],
    [475, 230],
    [610, 245],
  ];

  const withPractice = [
    [70, 112],
    [205, 95],
    [340, 75],
    [475, 55],
    [610, 45],
  ];

  return (
    <section className="graph-section">
      <div className="wrap">
        <div className="eyebrow">What The Data Shows</div>

        <h2 className="serif">
          The nervous system improves — measurably — with daily practice.
        </h2>

        <p className="graph-lead">
          Heart Rate Variability (HRV) is the clearest measure of how safe your
          nervous system feels. Higher HRV = more resilience, better sleep, less
          anxiety. Breathwork done daily moves this number — consistently, over
          time.
        </p>

        <div className="graph-box">
          <div className="graph-legend">
            <span>
              <i className="dash-line" /> Without daily practice
            </span>
            <span>
              <i className="solid-line" /> With daily practice
            </span>
          </div>

          <div className="graph-y-label">% of day in safe mode</div>

          <svg
            className="graph-svg"
            viewBox="0 0 700 300"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid meet"
          >
            {/* Horizontal grid lines */}
            {[30, 58, 86, 114, 142, 170, 198, 226, 254].map((y) => (
              <line
                key={y}
                x1="70"
                y1={y}
                x2="660"
                y2={y}
                stroke="#e7e2d6"
                strokeWidth="1"
              />
            ))}

            {/* Vertical grid lines */}
            {[70, 205, 340, 475, 610].map((x) => (
              <line
                key={x}
                x1={x}
                y1="30"
                x2={x}
                y2="254"
                stroke="#eee9de"
                strokeWidth="1"
              />
            ))}

            {/* Y labels */}
            {[
              [60, 34, "100%"],
              [60, 62, "90%"],
              [60, 90, "80%"],
              [60, 118, "70%"],
              [60, 146, "60%"],
              [60, 174, "50%"],
              [60, 202, "40%"],
              [60, 230, "30%"],
              [60, 258, "20%"],
            ].map(([x, y, t]) => (
              <text
                key={t as string}
                x={x as number}
                y={y as number}
                textAnchor="end"
                fontSize="12"
                fill="#8d8a80"
              >
                {t}
              </text>
            ))}

            {/* X labels */}
            {[
              [70, "After 5 days"],
              [205, "Week 1–2"],
              [340, "Month 1–2"],
              [475, "Month 3"],
              [610, "6 months+"],
            ].map(([x, t]) => (
              <text
                key={t as string}
                x={x as number}
                y="282"
                textAnchor="middle"
                fontSize="12"
                fill="#8d8a80"
              >
                {t}
              </text>
            ))}

            {/* Without daily practice dotted line */}
            <polyline
              points={withoutPractice.map(([x, y]) => `${x},${y}`).join(" ")}
              fill="none"
              stroke="#8d8a80"
              strokeWidth="2"
              strokeDasharray="5,5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {withoutPractice.map(([cx, cy]) => (
              <circle
                key={`without-${cx}-${cy}`}
                cx={cx}
                cy={cy}
                r="5"
                fill="#8d8a80"
              />
            ))}

            {/* With daily practice line */}
            <polyline
              points={withPractice.map(([x, y]) => `${x},${y}`).join(" ")}
              fill="none"
              stroke="#36a77a"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {withPractice.map(([cx, cy]) => (
              <circle
                key={`with-${cx}-${cy}`}
                cx={cx}
                cy={cy}
                r="5"
                fill="#36a77a"
              />
            ))}

            {/* Axis */}
            <line
              x1="70"
              y1="30"
              x2="70"
              y2="254"
              stroke="#d7d0c2"
              strokeWidth="1.2"
            />

            <line
              x1="70"
              y1="254"
              x2="660"
              y2="254"
              stroke="#d7d0c2"
              strokeWidth="1.2"
            />
          </svg>

          <div className="graph-caption">
            Consistent daily practice helps the nervous system spend more of the
            day in a safe, regulated state.
          </div>
        </div>
      </div>
    </section>
  );
}