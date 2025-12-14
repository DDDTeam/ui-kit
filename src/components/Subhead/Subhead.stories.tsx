import type { Meta, StoryObj } from "@storybook/html";
import { Subhead } from "./Subhead";
import { render } from "@robocotik/react";

const meta: Meta = {
  title: "Components/Subhead",
  tags: ["autodocs"],
  argTypes: {
    level: {
      control: "select",
      options: ["7", "8", "9", "10", "11"],
      description: "Уровень подзаголовка",
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
    opacity: {
      control: "select",
      options: ["100", "80", "70", "60", "50", "30"],
      description: "Прозрачность",
    },
    children: {
      control: "text",
      description: "Текст подзаголовка",
    },
    onClick: {
      action: "clicked",
      description: "Обработчик клика",
    },
  },
  args: {
    level: "9",
    align: "left",
    color: "base",
    weight: "regular",
    opacity: "100",
    children: "Подзаголовок",
  },
};

export default meta;
type Story = StoryObj;

export const AllLevels: Story = {
  render: () => {
    const container = document.createElement("div");
    container.style.display = "flex";
    container.style.flexDirection = "column";
    container.style.alignItems = "center";
    container.style.gap = "10px";

    const levels = ["7", "8", "9", "10", "11"] as const;

    levels.forEach((level) => {
      const subheadContainer = document.createElement("div");
      render(
        <Subhead level={level}>{`Подзаголовок уровня ${level}`}</Subhead>,
        subheadContainer
      );
      container.appendChild(subheadContainer);
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

    const subheadContainer = document.createElement("div");
    render(<Subhead {...props}>{children}</Subhead>, subheadContainer);
    container.appendChild(subheadContainer);

    return container;
  },
};
