import { Component, type Ref } from "@robocotik/react";
import clsx from "ddd-clsx";
import styles from "./Badge.module.scss";

interface BadgeProps {
  mode: "low" | "high" | "medium";
  size?: "m" | "s";
  className?: string;
  getRootRef?: Ref<HTMLElement>;
  [key: string]: any;
}

export class Badge extends Component<BadgeProps> {
  render() {
    const {
      className,
      mode,
      children,
      getRootRef,
      size = "m",
      ...rest
    } = this.props;

    return (
      <span
        ref={getRootRef}
        className={clsx(
          styles.badge,
          {
            [styles.low]: mode === "low",
            [styles.medium]: mode === "medium",
            [styles.high]: mode === "high",
            [styles.badgeS]: size === "s",
          },
          className
        )}
        {...rest}
      >
        {children}
      </span>
    );
  }
}
