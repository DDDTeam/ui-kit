import { Component, type Ref } from "@robocotik/react";
import clsx from "ddd-clsx";
import styles from "./Tooltip.module.scss";

interface TooltipProps {
  text: string;
  placement?: "top" | "bottom" | "left" | "right";
  getRootRef?: Ref<HTMLElement>;
  className?: string;
  [key: string]: any;
}

interface TooltipState {
  visible: boolean;
}

export class Tooltip extends Component<TooltipProps, TooltipState> {
  state = {
    visible: false,
  };

  render() {
    console.log("too");
    const {
      placement = "right",
      children,
      text,
      getRootRef,
      className,
      ...rest
    } = this.props;

    const { visible } = this.state;

    return (
      <div
        onMouseEnter={() => this.setState({ visible: true })}
        onMouseLeave={() => this.setState({ visible: false })}
        className={styles.tooltipWrapper}
        ref={getRootRef}
        {...rest}
      >
        <div
          className={clsx(
            styles.tooltip,
            {
              [styles.visible]: visible,
              [styles.notVisible]: !visible,
              [styles.placementTop]: placement === "top",
              [styles.placementBottom]: placement === "bottom",
              [styles.placementLeft]: placement === "left",
              [styles.placementRight]: placement === "right",
            },
            className
          )}
        >
          {text}
        </div>
        {children}
      </div>
    );
  }
}
