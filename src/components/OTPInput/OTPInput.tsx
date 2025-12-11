import { Component, createRef, type Ref } from "@robocotik/react";
import clsx from "@/clsx";
import { Flex } from "../Flex/Flex";
import styles from "./OTPInput.module.scss";

interface OTPInputProps {
  length: number;
  onFinish: (otp: string) => void;
  getRootRef?: Ref<HTMLElement>;
  className?: string;
  [key: string]: any;
}

interface OTPInputState {
  values: string[];
}

export class OTPInput extends Component<OTPInputProps, OTPInputState> {
  state: OTPInputState = {
    values: [],
  };

  inputRefs = Array.from({ length: this.props.length }, () =>
    createRef<HTMLInputElement>()
  );

  onMount() {
    const firstInput = this.inputRefs[0].current;
    if (firstInput) {
      firstInput.focus();
    }
  }

  handleInput = (event: Event): void => {
    const target = event.currentTarget as HTMLInputElement;
    const index = this.inputRefs.findIndex((ref) => ref.current === target);

    if (index < 0) {
      return;
    }

    const newValues = [...this.state.values];
    newValues[index] = target.value;

    if (newValues.every((v) => v !== "")) {
      this.props.onFinish(newValues.join(""));
    }

    this.setState({ values: newValues });

    if (target.value && this.inputRefs[index + 1]?.current) {
      this.inputRefs[index + 1].current!.focus();
    }
  };

  handleKeyDown = (event: KeyboardEvent): void => {
    const target = event.currentTarget as HTMLInputElement;
    const index = this.inputRefs.findIndex((ref) => ref.current === target);

    if (index === -1) {
      return;
    }

    if (event.key === "Backspace" && index > 0 && !target.value) {
      const prevInput = this.inputRefs[index - 1].current;
      if (prevInput) prevInput.focus();
    }
  };

  render() {
    const { length = 6, getRootRef, className, ...rest } = this.props;
    const { values } = this.state;

    if (values.length === 0) {
      this.state.values = Array(length).fill("");
    }

    return (
      <Flex
        className={clsx(styles.inputWrapper, className)}
        getRootRef={getRootRef}
        {...rest}
      >
        {Array.from({ length }, (_, i) => (
          <input
            type="text"
            maxLength={1}
            className={styles.input}
            value={values[i]}
            onInput={this.handleInput}
            onKeyDown={this.handleKeyDown}
            ref={this.inputRefs[i]}
          />
        ))}
      </Flex>
    );
  }
}
