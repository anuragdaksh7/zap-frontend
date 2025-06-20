'use client';

import { useEffect } from "react";

const Cursor = () => {
useEffect(() => {
  const dot = document.getElementById("cursor-dot");
  if (!dot) return;

  let mouseX = 0;
  let mouseY = 0;
  let dotX = 0;
  let dotY = 0;

  const handleMouseMove = (e: MouseEvent) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  };

  const animate = () => {
    // Lerp toward the mouse position
    dotX += (mouseX - dotX) * 0.1;
    dotY += (mouseY - dotY) * 0.1;

    dot.style.transform = `translate(${dotX - 6}px, ${dotY - 6}px)`;
    requestAnimationFrame(animate);
  };

  window.addEventListener("mousemove", handleMouseMove);
  animate(); 

  return () => {
    window.removeEventListener("mousemove", handleMouseMove);
  };
}, []);

  return (
    <div
  id="cursor-dot"
  className="fixed top-0 left-0 w-4 h-4 rounded-full bg-cta z-[9999] pointer-events-none"
></div>

  )
}

export default Cursor