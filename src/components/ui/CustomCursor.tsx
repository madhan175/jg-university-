"use client";

import { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export default function CustomCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  const dotX = useMotionValue(-100);
  const dotY = useMotionValue(-100);
  const dotXSpring = useSpring(dotX, { damping: 40, stiffness: 1000 });
  const dotYSpring = useSpring(dotY, { damping: 40, stiffness: 1000 });

  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - (isHovering ? 32 : 16));
      cursorY.set(e.clientY - (isHovering ? 32 : 16));
      dotX.set(e.clientX - 4);
      dotY.set(e.clientY - 4);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName.toLowerCase() === 'button' || target.tagName.toLowerCase() === 'a' || target.closest('button') || target.closest('a')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);
    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [cursorX, cursorY, dotX, dotY, isHovering]);

  return (
    <>
      <motion.div
        className={`fixed top-0 left-0 rounded-full border border-white/30 pointer-events-none z-[9999] mix-blend-difference transition-all duration-300 ${isHovering ? "w-16 h-16 bg-white/10" : "w-8 h-8"}`}
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
        }}
      />
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-white rounded-full pointer-events-none z-[9999]"
        style={{
          x: dotXSpring,
          y: dotYSpring,
        }}
      />
      <motion.div
        className="fixed top-0 left-0 w-[400px] h-[400px] bg-cyan-500/10 blur-[100px] rounded-full pointer-events-none z-[9997]"
        style={{
          x: useSpring(cursorX, { damping: 50, stiffness: 200 }),
          y: useSpring(cursorY, { damping: 50, stiffness: 200 }),
          translateX: "-50%",
          translateY: "-50%",
        }}
      />
    </>
  );
}
