import type { Meta, StoryObj } from "@storybook/html";
import { OTPInput } from "./OTPInput";
import { render } from "@robocotik/react";

const meta: Meta = {
  title: "Components/OTPInput",
  tags: ["autodocs"],
  argTypes: {
    length: {
      control: "number",
      description: "Количество полей",
    },
    onFinish: {
      action: "otpFinished",
      description: "Обработчик завершения ввода",
    },
  },
  args: {
    length: 6,
    onFinish: (otp: string) => console.log("OTP введен", otp),
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => {
    const container = document.createElement("div");

    const otpContainer = document.createElement("div");
    render(
      <OTPInput
        length={6}
        onFinish={(otp) => console.log("OTP введен", otp)}
      />,
      otpContainer
    );
    container.appendChild(otpContainer);

    return container;
  },
};

export const Playground: Story = {
  render: (args) => {
    const container = document.createElement("div");

    const otpContainer = document.createElement("div");
    render(
      <OTPInput
        onFinish={(otp) => console.log("OTP введен", otp)}
        length={6}
        {...args}
      />,
      otpContainer
    );
    container.appendChild(otpContainer);

    return container;
  },
};
