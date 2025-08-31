import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";

import Home from "./pages/Home";
import About from "./pages/About";
import Telegram from "./pages/Telegram";
import Lessons from "./pages/Lessons";
import News from "./pages/News";
import Notes from "./pages/Notes";
import Curriculum from "./pages/Curriculum";
import Instructors from "./pages/Instructors";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <div className="min-h-dvh bg-white text-black">
      <Header />
      <main>
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
      </main>

      <footer className="border-t">
        <div className="mx-auto flex w-full max-w-7xl items-start justify-between gap-4 px-4 py-8 sm:px-6 lg:px-8">
          <div className="text-sm text-gray-600">
            <div>
              Email:{" "}
              <a href="mailto:contact@dsprint.academy" className="text-dsprint hover:underline">
                contact@dsprint.academy
              </a>
            </div>
            <div>
              Telegram:{" "}
              <a href="https://t.me/DataScienceSprint" target="_blank" rel="noreferrer" className="text-dsprint hover:underline">
                t.me/DataScienceSprint
              </a>
            </div>
          </div>
          <div className="text-sm text-gray-500">© DSprint 2025</div>
        </div>
      </footer>
    </div>
  );
}
