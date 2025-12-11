import { Component, type Ref } from "@robocotik/react";
import clsx from "ddd-clsx";
import styles from "./Separator.module.scss";

interface SeparatorProps {
  mode: "primary" | "secondary";
  className?: string;
  getRootRef?: Ref<HTMLElement>;
  [key: string]: any;
}

export class Separator extends Component<SeparatorProps> {
  render() {
    const { className, mode, getRootRef, ...rest } = this.props;

    return (
      <hr
        ref={getRootRef}
        className={clsx(
          styles.separator,
          {
            [styles.primary]: mode === "primary",
            [styles.secondary]: mode === "secondary",
          },
          className
        )}
        {...rest}
      />
    );
  }
}
