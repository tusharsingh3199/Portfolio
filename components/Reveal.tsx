"use client";
import { useEffect, useRef } from "react";

export default function Reveal({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const r = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const e = r.current!;
    const o = new IntersectionObserver(([x]) => { if (x.isIntersecting) { e.classList.add("in"); o.disconnect(); } }, { threshold: 0.12 });
    o.observe(e);
    return () => o.disconnect();
  }, []);
  return <div ref={r} className={`rv ${className}`}>{children}</div>;
}
