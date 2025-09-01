import { NavLink } from 'react-router-dom'

const links = [
  { to:'/', label:'Home' },
  { to:'/about', label:'About' },
  { to:'/telegram', label:'Telegram' },
  { to:'/lessons', label:'Lessons' },
  { to:'/news', label:'News' },
  { to:'/notes', label:'Notes' },
  { to:'/curriculum', label:'Curriculum' },
  { to:'/instructors', label:'Instructors' },
  { to:'/faq', label:'FAQ' },
  { to:'/contact', label:'Contact' },
]

export default function Header() {
  return (
    <header className="navbar">
      <div className="navbar-inner container">
        <div className="brand">
          <span className="brand-badge">✓</span> DSprint
        </div>
        <nav className="navlinks">
          {links.map(l => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({isActive}) => 'navlink' + (isActive ? ' active' : '')}
              end={l.to === '/'}
            >
              {l.label}
            </NavLink>
          ))}
        </nav>
        <div className="header-cta">
          <a className="btn" href="https://t.me/your_channel" target="_blank" rel="noreferrer">Join Telegram</a>
        </div>
      </div>
    </header>
  )
}
