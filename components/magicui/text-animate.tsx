"use client";

import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

type AnimationType = "blurInUp" | "fadeIn" | "slideUp" | "slideLeft";
type AnimationBy = "character" | "word" | "line";

interface TextAnimateProps {
  children: React.ReactNode;
  animation?: AnimationType;
  by?: AnimationBy;
  className?: string;
  duration?: number;
  delay?: number;
}

export function TextAnimate({
  children,
  animation = "blurInUp",
  by = "character",
  className,
  duration = 3,
  delay = 0,
}: TextAnimateProps) {
  const [mounted, setMounted] = useState(false);
  const text = children?.toString() || "";

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  if (!mounted) return <span className={className}>{children}</span>;

  const getElements = () => {
    if (by === "character") {
      return text.split("").map((char, i) => (
        <span
          key={`${char}-${i}`}
          className={cn(
            "inline-block opacity-0",
            animation === "blurInUp" && "animate-blur-in-up",
            animation === "fadeIn" && "animate-fade-in",
            animation === "slideUp" && "animate-slide-up",
            animation === "slideLeft" && "animate-slide-left"
          )}
          style={{
            animationDelay: `${delay + i * (duration / 20)}s`,
            animationDuration: `${duration / 3}s`,
            animationFillMode: "forwards",
          }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ));
    }

    if (by === "word") {
      return text.split(" ").map((word, i) => (
        <span
          key={`${word}-${i}`}
          className={cn(
            "inline-block opacity-0 mr-2",
            animation === "blurInUp" && "animate-blur-in-up",
            animation === "fadeIn" && "animate-fade-in",
            animation === "slideUp" && "animate-slide-up",
            animation === "slideLeft" && "animate-slide-left"
          )}
          style={{
            animationDelay: `${delay + i * (duration / 10)}s`,
            animationDuration: `${duration / 2}s`,
            animationFillMode: "forwards",
          }}
        >
          {word}
        </span>
      ));
    }

    // By line
    return (
      <span
        className={cn(
          "inline-block opacity-0",
          animation === "blurInUp" && "animate-blur-in-up",
          animation === "fadeIn" && "animate-fade-in",
          animation === "slideUp" && "animate-slide-up",
          animation === "slideLeft" && "animate-slide-left"
        )}
        style={{
          animationDelay: `${delay}s`,
          animationDuration: `${duration}s`,
          animationFillMode: "forwards",
        }}
      >
        {text}
      </span>
    );
  };

  return <span className={className}>{getElements()}</span>;
} 