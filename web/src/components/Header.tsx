import React from "react";
import { NavLink } from "react-router-dom";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/telegram", label: "Telegram" },
  { to: "/lessons", label: "Lessons" },
  { to: "/news", label: "News" },
  { to: "/notes", label: "Notes" },
  { to: "/curriculum", label: "Curriculum" },
  { to: "/instructors", label: "Instructors" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-md bg-dsprint/10 ring-1 ring-dsprint/30" />
          <span className="text-lg font-semibold">DSprint</span>
        </div>
        <nav className="hidden items-center gap-2 md:flex">
          {nav.map((n) => (
            <NavLink
              key={n.to}
              to={n.to}
              className={({ isActive }) =>
                `relative rounded-md px-3 py-2 text-sm font-medium transition ${isActive ? "text-black" : "text-gray-600 hover:text-black"}`
              }
            >
              {n.label}
              <span className="absolute inset-x-2 -bottom-1 block h-0.5 rounded-full bg-dsprint opacity-0 data-[active=true]:opacity-100" data-active={location.pathname===n.to}/>
            </NavLink>
          ))}
        </nav>
        <a
          href="https://t.me/DataScienceSprint"
          target="_blank"
          rel="noreferrer"
          className="hidden rounded-xl bg-dsprint px-3 py-2 text-sm font-semibold text-white hover:shadow-lg md:inline-flex"
        >
          Join Telegram
        </a>
        <div className="md:hidden">
          <select
            className="rounded-lg border bg-white px-2 py-1 text-sm"
            value={location.pathname}
            onChange={(e) => (window.location.href = e.target.value)}
          >
            {nav.map((n) => (
              <option key={n.to} value={n.to}>
                {n.label}
              </option>
            ))}
          </select>
        </div>
      </div>
    </header>
  );
}
