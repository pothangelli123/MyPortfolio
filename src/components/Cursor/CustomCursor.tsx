"use client";

import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const cursor = cursorRef.current;
    const dot = dotRef.current;

    if (!cursor || !dot) return;

    const mouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;

      // Update main cursor
      cursor.style.left = `${clientX}px`;
      cursor.style.top = `${clientY}px`;

      // Update small dot with delay
      setTimeout(() => {
        dot.style.left = `${clientX}px`;
        dot.style.top = `${clientY}px`;
      }, 0);

      setMousePosition({ x: clientX, y: clientY });
    };

    const handleMouseEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.classList.contains("cursor-hover")
      ) {
        cursor.classList.add("scale-150", "opacity-50");
        dot.classList.add("scale-75");
      }
    };

    const handleMouseLeave = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.classList.contains("cursor-hover")
      ) {
        cursor.classList.remove("scale-150", "opacity-50");
        dot.classList.remove("scale-75");
      }
    };

    window.addEventListener("mousemove", mouseMove);
    document.addEventListener("mouseenter", handleMouseEnter, true);
    document.addEventListener("mouseleave", handleMouseLeave, true);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
      document.removeEventListener("mouseenter", handleMouseEnter, true);
      document.removeEventListener("mouseleave", handleMouseLeave, true);
    };
  }, []);

  return (
    <>
      {/* Main cursor ring */}
      <div
        ref={cursorRef}
        className="fixed w-8 h-8 border-2 border-white rounded-full pointer-events-none z-50 transition-transform duration-300 transform -translate-x-1/2 -translate-y-1/2"
      />
      {/* Small dot */}
      <div
        ref={dotRef}
        className="fixed w-2 h-2 bg-white rounded-full pointer-events-none z-50 transition-all duration-100 -translate-x-1/2 -translate-y-1/2"
      />
      {/* Hide default cursor */}
      <style>{`
        * {
          cursor: none;
        }
      `}</style>
    </>
  );
}
