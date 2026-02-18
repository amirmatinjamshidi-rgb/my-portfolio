"use client";

import { useEffect, useState } from "react";
import { motion, useSpring, AnimatePresence } from "framer-motion";

export default function CustomCursor() {
  const [isPointer, setIsPointer] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);

  const cursorX = useSpring(0, { damping: 25, stiffness: 300 });
  const cursorY = useSpring(0, { damping: 25, stiffness: 300 });

  useEffect(() => {
    setHasMounted(true);
    const isTouch =
      "ontouchstart" in window || navigator.maxTouchPoints > 0;
    setIsTouchDevice(isTouch);

    if (isTouch) return;

    document.documentElement.classList.add("custom-cursor-active");

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16);
      cursorY.set(e.clientY - 16);
    };

    const handleMouseDown = () => setIsClicked(true);
    const handleMouseUp = () => setIsClicked(false);

    const checkPointer = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      const computed = window.getComputedStyle(target).cursor;
      setIsPointer(
        computed === "pointer" || target.closest("a, button") !== null,
      );
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("mouseover", checkPointer);

    return () => {
      document.documentElement.classList.remove("custom-cursor-active");
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("mouseover", checkPointer);
    };
  }, [cursorX, cursorY]);

  if (!hasMounted || isTouchDevice) return null;

  return (
    <div
      className="fixed inset-0 pointer-events-none z-[9999]"
      aria-hidden="true"
    >
      <motion.div
        style={{ x: cursorX, y: cursorY }}
        className="relative w-8 h-8 flex items-center justify-center"
      >
        <motion.div
          animate={{
            scale: isClicked ? 0.6 : isPointer ? 1.5 : 1,
            rotate: isClicked ? 180 : 0,
            borderColor: isPointer ? "#00ff88" : "rgba(255, 255, 255, 0.5)",
          }}
          className="absolute inset-0 border-2 rounded-lg transition-colors duration-300"
        />

        <motion.div
          animate={{ scale: isClicked ? 2.5 : 1 }}
          className="w-1 h-1 bg-emerald-400 rounded-full shadow-[0_0_10px_#00ff88]"
        />

        <AnimatePresence>
          {isClicked && (
            <motion.div
              initial={{ scale: 0.5, opacity: 1 }}
              animate={{ scale: 3.5, opacity: 0 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 border border-emerald-500 rounded-full"
            />
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
