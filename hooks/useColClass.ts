import styles from "@/components/grid/Col.module.css";
import clsx from "clsx";

type Span = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

interface ColClassOptions {
  xs?: Span;
  sm?: Span;
  md?: Span;
  lg?: Span;
  xl?: Span;

  offsetXs?: Span;
  offsetSm?: Span;
  offsetMd?: Span;
  offsetLg?: Span;
  offsetXl?: Span;

  className?: string;
}

export function useColClass(options: ColClassOptions) {
  const {
    xs,
    sm,
    md,
    lg,
    xl,
    offsetXs,
    offsetSm,
    offsetMd,
    offsetLg,
    offsetXl,
    className = "",
  } = options;

  return clsx(
    styles.col,

    xs && styles[`xs-${xs}`],
    sm && styles[`sm-${sm}`],
    md && styles[`md-${md}`],
    lg && styles[`lg-${lg}`],
    xl && styles[`xl-${xl}`],

    offsetXs && styles[`offset-xs-${offsetXs}`],
    offsetSm && styles[`offset-sm-${offsetSm}`],
    offsetMd && styles[`offset-md-${offsetMd}`],
    offsetLg && styles[`offset-lg-${offsetLg}`],
    offsetXl && styles[`offset-xl-${offsetXl}`],

    className
  );
}
