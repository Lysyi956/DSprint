export default function Notes() {
  const notes = [
    { t:'Python EDA — quick notes', link:'#' },
    { t:'Pandas essentials', link:'#' },
  ]
  return (
    <div className="container">
      <h1 className="h1">Notes</h1>
      <div className="grid">
        {notes.map((n,i)=>(
          <a className="card" key={i} href={n.link}>
            <h3>{n.t}</h3>
            <p className="muted">Open</p>
          </a>
        ))}
      </div>
    </div>
  )
}
