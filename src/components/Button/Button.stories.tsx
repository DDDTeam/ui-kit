import type { Meta, StoryObj } from "@storybook/html";
import { Button } from "./Button";
import { render } from "@robocotik/react";

const meta: Meta = {
  title: "Components/Button",
  tags: ["autodocs"],
  argTypes: {
    mode: {
      control: "select",
      options: ["primary", "secondary", "tertiary", "quaternary"],
      description: "Тип кнопки",
    },
    size: {
      control: "select",
      options: ["l", "m", "s", "xs"],
      description: "Размер кнопки",
    },
    borderRadius: {
      control: "select",
      options: ["lg", "l"],
      description: "Скругление углов",
    },
    disabled: {
      control: "boolean",
      description: "Отключенное состояние",
    },
    children: {
      control: "text",
      description: "Текст кнопки",
    },
    onClick: {
      action: "clicked",
      description: "Обработчик клика",
    },
    onMouseEnter: {
      action: "mouseEnter",
      description: "Обработчик наведения",
    },
    onMouseLeave: {
      action: "mouseLeave",
      description: "Обработчик ухода курсора",
    },
    before: {
      control: "text",
      description: "Контент перед текстом",
    },
    after: {
      control: "text",
      description: "Контент после текста",
    },
  },
  args: {
    children: "Кнопка",
    mode: "primary",
    size: "m",
    borderRadius: "l",
    disabled: false,
  },
};

export default meta;
type Story = StoryObj;

export const AllModes: Story = {
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

    const modes = ["primary", "secondary", "tertiary", "quaternary"] as const;

    modes.forEach((mode) => {
      const buttonContainer = document.createElement("div");
      render(
        <Button mode={mode}>{`${
          mode.charAt(0).toUpperCase() + mode.slice(1)
        } Button`}</Button>,
        buttonContainer
      );
      container.appendChild(buttonContainer);
    });

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

    const { children, ...props } = args;

    const buttonContainer = document.createElement("div");
    render(
      <Button mode="primary" {...props}>
        {children}
      </Button>,
      buttonContainer
    );
    container.appendChild(buttonContainer);

    return container;
  },
};
