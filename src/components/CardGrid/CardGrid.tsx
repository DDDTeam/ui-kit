import { Component, type Ref } from "ddd-react";
import clsx from "ddd-clsx";
import { Flex } from "../Flex/Flex";
import styles from "./CardGrid.module.scss";

interface CardGridProps {
  getRootRef?: Ref<HTMLElement>;
  className?: string;
  [key: string]: any;
}

export class CardGrid extends Component<CardGridProps> {
  render() {
    const { getRootRef, className, children, ...rest } = this.props;

    return (
      <Flex
        getRootRef={getRootRef}
        className={clsx(styles.wrapper, className)}
        direction="column"
        {...rest}
      >
        <div className={styles.grid}>{children}</div>
      </Flex>
    );
  }
}
