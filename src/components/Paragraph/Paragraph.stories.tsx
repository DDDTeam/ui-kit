import type { Meta, StoryObj } from "@storybook/html";
import { Paragraph } from "./Paragraph";
import { render } from "@robocotik/react";

const meta: Meta = {
  title: "Components/Paragraph",
  tags: ["autodocs"],
  argTypes: {
    level: {
      control: "select",
      options: ["7", "8", "9"],
      description: "Уровень текста",
    },
    align: {
      control: "select",
      options: ["center", "left"],
      description: "Выравнивание",
    },
    color: {
      control: "select",
      options: ["dark", "base", "light", "accent", "blue", "error"],
      description: "Цвет текста",
    },
    weight: {
      control: "select",
      options: ["regular", "bold"],
      description: "Жирность",
    },
    children: {
      control: "text",
      description: "Текст параграфа",
    },
    onClick: {
      action: "clicked",
      description: "Обработчик клика",
    },
  },
  args: {
    level: "8",
    align: "left",
    color: "base",
    weight: "regular",
    children: "Paragraph",
  },
};

export default meta;
type Story = StoryObj;

export const AllLevels: Story = {
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

    const levels = ["7", "8", "9"] as const;

    levels.forEach((level) => {
      const paragraphContainer = document.createElement("div");
      render(
        <Paragraph level={level}>{`Paragraph Level ${level}`}</Paragraph>,
        paragraphContainer
      );
      container.appendChild(paragraphContainer);
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

    const paragraphContainer = document.createElement("div");
    render(<Paragraph {...props}>{children}</Paragraph>, paragraphContainer);
    container.appendChild(paragraphContainer);

    return container;
  },
};
