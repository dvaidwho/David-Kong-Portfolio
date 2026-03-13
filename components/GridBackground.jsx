"use client"
import { useEffect, useRef } from "react"

export default function GridBackground() {
  const rows = new Array(100).fill(1)
  const cols = new Array(80).fill(1)
  const activeCell = useRef(null)

  useEffect(() => {
    function getColor() {
      return document.documentElement.getAttribute("data-theme") === "dark"
        ? "#27272a"  // zinc-800
        : "#d1d5db"  // gray-300 #57d464 #d1d5db
        
    }

    function setActive(cell) {
      if (activeCell.current === cell) return
      if (activeCell.current) {
        activeCell.current.style.transitionDuration = "1000ms"
        activeCell.current.style.backgroundColor = ""
      }
      if (cell) {
        cell.style.transitionDuration = "0ms"
        cell.style.backgroundColor = getColor()
      }
      activeCell.current = cell ?? null
    }

    function handleMouseMove(e) {
      const elements = document.elementsFromPoint(e.clientX, e.clientY)
      const cell = elements.find(el => el.hasAttribute("data-grid-cell"))
      setActive(cell ?? null)
    }

    function handleMouseLeave() {
      setActive(null)
    }

    window.addEventListener("mousemove", handleMouseMove)
    document.addEventListener("mouseleave", handleMouseLeave)
    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [])

  return (
    <div className="fixed inset-0 -z-10">
      <div
        style={{
          transform: "translate(-40%,-60%) skewX(-48deg) skewY(14deg) scale(0.675) translateZ(0)",
          maskImage: "radial-gradient(ellipse at center, black 40%, transparent 75%)",
          WebkitMaskImage: "radial-gradient(ellipse at center, black 40%, transparent 75%)",
        }}
        className="absolute -top-1/2 left-1/2 flex flex-col p-4"
      >
        {rows.map((_, i) => (
          <div key={i} className="flex">
            {cols.map((_, j) => (
              <div
                key={j}
                data-grid-cell=""
                style={{ transition: "background-color 1000ms" }}
                className="h-8 w-16 border-r border-b border-gray-200 dark:border-zinc-700"
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
