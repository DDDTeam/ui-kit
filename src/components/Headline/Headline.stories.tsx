import type { Meta, StoryObj } from "@storybook/html";
import { Headline } from "./Headline";
import { render } from "@robocotik/react";

const meta: Meta = {
  title: "Components/Headline",
  tags: ["autodocs"],
  argTypes: {
    level: {
      control: "select",
      options: ["7", "8", "9"],
      description: "Уровень заголовка",
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
      description: "Текст заголовка",
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
    children: "Заголовок",
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

    const levels = ["7", "8", "9"] as const;

    levels.forEach((level) => {
      const headlineContainer = document.createElement("div");
      render(
        <Headline level={level}>{`Заголовок уровня ${level}`}</Headline>,
        headlineContainer
      );
      container.appendChild(headlineContainer);
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

    const headlineContainer = document.createElement("div");
    render(
      <Headline color="base" {...props}>
        {children}
      </Headline>,
      headlineContainer
    );
    container.appendChild(headlineContainer);

    return container;
  },
};
