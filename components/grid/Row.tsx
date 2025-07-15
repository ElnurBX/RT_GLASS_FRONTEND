import { ReactNode } from "react";
import styles from "./Row.module.css";
import clsx from "clsx";

type Justify = "start" | "center" | "end" | "between" | "around" | "evenly";
type Align = "start" | "center" | "end" | "stretch";
type Gap = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 8 | 10 | 12;

interface RowProps {
  children: ReactNode;
  justify?: Justify;
  align?: Align;
  gap?: Gap;
  className?: string;
}

export default function Row({
  children,
  justify = "start",
  align = "stretch",
  gap = 0,
  className = "",
}: RowProps) {
  const classes = clsx(
    styles.row,
    styles[`justify-${justify}`],
    styles[`align-${align}`],
    styles[`gap-${gap}`],
    className
  );

  return <div className={classes}>{children}</div>;
}
