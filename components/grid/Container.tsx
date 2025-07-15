import styles from "./Container.module.css";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
}

export default function Container({ children, className = "" }: Props) {
  return <div className={`${styles.container} ${className}`}>{children}</div>;
}
