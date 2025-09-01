import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import About from './pages/About'
import Telegram from './pages/Telegram'
import Lessons from './pages/Lessons'
import News from './pages/News'
import Notes from './pages/Notes'
import Curriculum from './pages/Curriculum'
import Instructors from './pages/Instructors'
import FAQ from './pages/FAQ'
import Contact from './pages/Contact'

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/telegram" element={<Telegram/>} />
        <Route path="/lessons" element={<Lessons/>} />
        <Route path="/news" element={<News/>} />
        <Route path="/notes" element={<Notes/>} />
        <Route path="/curriculum" element={<Curriculum/>} />
        <Route path="/instructors" element={<Instructors/>} />
        <Route path="/faq" element={<FAQ/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="*" element={<Home/>} />
      </Routes>
    </>
  )
}
