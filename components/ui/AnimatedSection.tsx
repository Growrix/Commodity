"use client";

import { useEffect, useRef, ReactNode, ElementType } from "react";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  animation?: "reveal" | "reveal-left" | "reveal-right";
  delay?: number;
  threshold?: number;
  as?: ElementType;
}

export default function AnimatedSection({
  children,
  className = "",
  animation = "reveal",
  delay = 0,
  threshold = 0.05,
  as: Tag = "div",
}: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let timeoutId: ReturnType<typeof setTimeout> | null = null;
    let fallbackId: ReturnType<typeof setTimeout> | null = null;

    const show = () => {
      if (delay) {
        timeoutId = setTimeout(() => el.classList.add("is-visible"), delay);
      } else {
        el.classList.add("is-visible");
      }
    };

    // Safety fallback: always show content within 1.4s regardless of observer
    fallbackId = setTimeout(show, Math.max(delay + 1400, 1400));

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (fallbackId !== null) clearTimeout(fallbackId);
          show();
          observer.unobserve(el);
        }
      },
      { threshold, rootMargin: "0px 0px 80px 0px" }
    );

    observer.observe(el);

    return () => {
      if (timeoutId !== null) clearTimeout(timeoutId);
      if (fallbackId !== null) clearTimeout(fallbackId);
      observer.disconnect();
    };
  }, [delay, threshold]);

  return (
    <Tag ref={ref} className={`${animation} ${className}`}>
      {children}
    </Tag>
  );
}
