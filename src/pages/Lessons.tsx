export default function Lessons() {
  const items = [
    { title:'Python for Data: EDA Basics', date:'01.08.2025', dur:'45 min' },
    { title:'Pandas: cleaning & joins', date:'08.08.2025', dur:'55 min' },
    { title:'Visualization: Matplotlib intro', date:'15.08.2025', dur:'50 min' },
  ]
  return (
    <div className="container">
      <h1 className="h1">Lesson Recordings</h1>
      <div className="grid">
        {items.map((x,i)=>(
          <div className="card" key={i}>
            <h3>{x.title}</h3>
            <p className="muted">{x.date} • {x.dur}</p>
            <button className="btn">Watch</button>
          </div>
        ))}
      </div>
    </div>
  )
}
