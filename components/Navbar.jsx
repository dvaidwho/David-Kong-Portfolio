"use client"

import { useState, useEffect } from "react"
import { useTheme } from "next-themes"
import Link from "next/link"
import Image from "next/image"


const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { resolvedTheme, setTheme } = useTheme()

  useEffect(() => setMounted(true), [])

  return (
    <nav className="bg-white dark:bg-zinc-900 px-6 py-3 shadow-md fixed top-0 w-full z-50">
      <div className="max-w-4xl mx-auto flex items-center justify-between">

        {/* Left - Profile */}
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/profile.png"
            alt="David Kong"
            width={44}
            height={44}
            className="rounded-full object-cover"
            quality={100}
            sizes="44px"
          />
          <div className="flex flex-col leading-tight">
            <span className="font-bold text-base dark:text-white">David Kong</span>
            <span className="text-gray-500 dark:text-gray-400 text-sm">CS @ UMass Lowell</span>
          </div>
        </Link>

        {/* Hamburger + toggle - mobile only */}
        <div className="lg:hidden flex items-center gap-2">
          {mounted && (
            <button
              onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
              className="flex items-center p-1.5 rounded-lg hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
              aria-label="Toggle theme"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/darkmode-toggle.png"
                alt="Toggle theme"
                width={20}
                height={20}
                style={{ filter: resolvedTheme === "dark" ? "brightness(0) invert(1)" : "brightness(0)" }}
              />
            </button>
          )}
          <button
            className="text-gray-800 dark:text-white"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d={menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>

        {/* Mobile dropdown */}
        <div className={`lg:hidden absolute top-full left-0 right-0 bg-white dark:bg-zinc-900 overflow-hidden transition-all duration-500 ease-in-out ${menuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"}`}>
          <ul className="flex flex-col text-base">
            {navLinks.map((link, index) => (
              <li key={link.name} className={`py-2 px-6 ${index !== navLinks.length - 1 ? "border-b" : ""}`}>
                <a href={link.href} className="underline-hover block hover:text-gray-500" onClick={() => setMenuOpen(false)}>
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Desktop links + toggle */}
        <div className="hidden lg:flex items-center gap-6 text-base dark:text-white">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="underline-hover hover:text-gray-500 dark:hover:text-gray-400">
              {link.name}
            </a>
          ))}
          {mounted && (
            <button
              onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
              className="flex items-center p-1.5 rounded-lg hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
              aria-label="Toggle theme"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/darkmode-toggle.png"
                alt="Toggle theme"
                width={20}
                height={20}
                style={{ filter: resolvedTheme === "dark" ? "brightness(0) invert(1)" : "brightness(0)" }}
              />
            </button>
          )}
        </div>
      </div>

    </nav>
  )
}
