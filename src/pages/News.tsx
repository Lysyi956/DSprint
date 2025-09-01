export default function News() {
  const news = [
    { t:'New cohort dates announced', d:'Sep 13 — Oct 13' },
    { t:'Added fresh notes for Pandas lesson', d:'check Notes page' },
  ]
  return (
    <div className="container">
      <h1 className="h1">News</h1>
      <div className="grid">
        {news.map((n,i)=>(
          <div className="card" key={i}>
            <h3>{n.t}</h3>
            <p className="muted">{n.d}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
