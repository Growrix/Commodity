"use client";

import { useEffect, useRef, ReactNode } from "react";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  animation?: "reveal" | "reveal-left" | "reveal-right";
  delay?: number;
  threshold?: number;
  as?: keyof JSX.IntrinsicElements;
}

export default function AnimatedSection({
  children,
  className = "",
  animation = "reveal",
  delay = 0,
  threshold = 0.12,
  as: Tag = "div",
}: AnimatedSectionProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (delay) {
            setTimeout(() => el.classList.add("is-visible"), delay);
          } else {
            el.classList.add("is-visible");
          }
          observer.unobserve(el);
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay, threshold]);

  return (
    <Tag
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`${animation} ${className}`}
    >
      {children}
    </Tag>
  );
}
