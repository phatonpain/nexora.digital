"use client";

import { motion, useReducedMotion, useMotionValue, useSpring } from "framer-motion";
import type { ReactNode } from "react";

export function Reveal({ children, className = "" }: { children: ReactNode; className?: string }) {
  const reduced = useReducedMotion();
  return <motion.div className={className} initial={false} whileInView={reduced ? {} : { y: [12, 0], opacity: [0.8, 1] }} viewport={{ once: true, amount: 0.12 }} transition={{ duration: 0.5 }}>{children}</motion.div>;
}

export function MagneticLink({ children, href, className }: { children: ReactNode; href: string; className?: string }) {
  const reduced = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 250, damping: 22 });
  const springY = useSpring(y, { stiffness: 250, damping: 22 });
  return <motion.a href={href} className={className} style={reduced ? undefined : { x: springX, y: springY }} onPointerMove={(event) => {
    if (reduced || event.pointerType !== "mouse") return;
    const rect = event.currentTarget.getBoundingClientRect();
    x.set((event.clientX - rect.left - rect.width / 2) * 0.08);
    y.set((event.clientY - rect.top - rect.height / 2) * 0.12);
  }} onPointerLeave={() => { x.set(0); y.set(0); }}>{children}</motion.a>;
}
