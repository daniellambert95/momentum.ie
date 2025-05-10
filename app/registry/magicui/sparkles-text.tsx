"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface SparklesTextProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
}

export function SparklesText({ children, className, ...props }: SparklesTextProps) {
  return (
    <span
      className={cn(
        "gradient-text inline-flex animate-background-shine bg-[linear-gradient(110deg,#939393,45%,#1e293b,55%,#939393)] bg-[length:250%_100%] bg-clip-text text-transparent",
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
} 