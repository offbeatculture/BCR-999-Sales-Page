const rows: [string, string][] = [
  ["Days", "Monday to Friday"],
  ["Mon, Tue, Thu", "Breathwork · 6:45–7:15 AM"],
  ["Wed, Fri", "Workout + Breathwork · 6:15–7:15 AM"],
  ["Format", "On Zoom - Live Only"],
  ["Recordings", "Live only. No recordings."],
  ["Sessions per month", "~20 live sessions"],
  ["Led by", "Dr Valarrmathi's Community"],
];

export default function SessionDetails() {
  return (
    <section className="details">
      <div className="wrap">
        <div className="eyebrow">Daily Breathwork Practice Session Details</div>
        <h2 className="serif">Everything you need to know before joining.</h2>

        <div className="dtable">
          {rows.map(([k, v]) => (
            <div className="drow" key={k}>
              <div className="dk">{k}</div>
              <div className="dv">{v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}