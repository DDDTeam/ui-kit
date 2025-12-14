import type { Meta, StoryObj } from "@storybook/html";
import { IconButton } from "./IconButton";
import { render } from "@robocotik/react";
import Star from "@/assets/star.svg?react";

const meta: Meta = {
  title: "Components/IconButton",
  tags: ["autodocs"],
  argTypes: {
    mode: {
      control: "select",
      options: ["primary", "secondary", "tertiary", "quaternary"],
      description: "Тип кнопки",
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
    children: {
      control: "text",
      description: "Иконка или содержимое",
    },
  },
  args: {
    mode: "primary",
  },
};

export default meta;
type Story = StoryObj;

export const AllModes: Story = {
  render: () => {
    const container = document.createElement("div");
    container.style.display = "flex";
    container.style.flexDirection = "column";
    container.style.alignItems = "center";
    container.style.gap = "10px";

    const modes = ["primary", "secondary", "tertiary", "quaternary"] as const;

    modes.forEach((mode) => {
      const buttonContainer = document.createElement("div");
      render(
        <IconButton
          mode={mode}
          style={{ width: "48px", height: "48px", minWidth: "48px" }}
        >
          <Star
            style={{
              width: "24px",
              height: "24px",
              color: "var(--color-text)",
              fill: "var(--color-text)",
            }}
          />
        </IconButton>,
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
    container.style.justifyContent = "center";
    container.style.alignItems = "center";

    const { children, ...props } = args;

    const buttonContainer = document.createElement("div");
    render(
      <IconButton
        mode="primary"
        {...props}
        style={{
          width: "48px",
          height: "48px",
          minWidth: "48px",
          ...props.style,
        }}
      >
        {children || (
          <Star
            style={{
              width: "24px",
              height: "24px",
              color: "var(--color-text)",
              fill: "var(--color-text)",
            }}
          />
        )}
      </IconButton>,
      buttonContainer
    );
    container.appendChild(buttonContainer);

    return container;
  },
};
