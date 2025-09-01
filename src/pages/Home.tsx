export default function Home() {
  return (
    <div className="container">
      <section className="hero">
        <h1 className="h1">Welcome to DSprint</h1>
        <p className="muted">Free lessons on Data Science, Python & Analytics. Cohorts, recordings, notes.</p>
      </section>

      <section className="section">
        <div className="grid">
          <div className="card">
            <h3>Next Cohort</h3>
            <p>Sep 13 — Oct 13 (upcoming). Join our Telegram for updates.</p>
          </div>
          <div className="card">
            <h3>Recordings</h3>
            <p>Watch past lessons at your own pace.</p>
          </div>
          <div className="card">
            <h3>Notes</h3>
            <p>Summaries, links and materials in one place.</p>
          </div>
        </div>
      </section>
    </div>
  )
}
