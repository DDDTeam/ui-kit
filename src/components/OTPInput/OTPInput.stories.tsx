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
    container.style.display = "flex";
    container.style.alignItems = "center";
    container.style.justifyContent = "center";
    container.style.flexDirection = "column";
    container.style.gap = "10px";
    container.style.padding = "20px";
    container.style.minHeight = "100vh";
    container.style.background = "hsl(235deg 52% 16%)";

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
    container.style.display = "flex";
    container.style.alignItems = "center";
    container.style.justifyContent = "center";
    container.style.flexDirection = "column";
    container.style.gap = "10px";
    container.style.padding = "20px";
    container.style.minHeight = "100vh";
    container.style.background = "hsl(235deg 52% 16%)";

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
