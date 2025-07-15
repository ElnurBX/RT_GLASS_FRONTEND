"use client";
import { ReactNode } from "react";
import { useColClass } from "@/hooks/useColClass"; // hook'u sən artıq yaratmısan

// ✅ 1-dən 12-yə qədər rəqəmlər üçün tip
type Span = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

// ✅ Col üçün prop-lar
interface ColProps {
  children: ReactNode;

  // responsive sütun genişlikləri
  xs?: Span;
  sm?: Span;
  md?: Span;
  lg?: Span;
  xl?: Span;

  // offset (sol boşluq)
  offsetXs?: Span;
  offsetSm?: Span;
  offsetMd?: Span;
  offsetLg?: Span;
  offsetXl?: Span;

  // əlavə className (isteğe bağlı)
  className?: string;
}

// ✅ Komponent
export default function Col(props: ColProps) {
  const className = useColClass(props); 

  return <div className={className}>{props.children}</div>;
}
