import type { Meta, StoryObj } from "@storybook/html";
import { Title } from "./Title";
import { render } from "@robocotik/react";

const meta: Meta = {
  title: "Components/Title",
  tags: ["autodocs"],
  argTypes: {
    level: {
      control: "select",
      options: ["1", "2", "3", "4", "5", "6"],
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
    level: "1",
    align: "center",
    color: "base",
    weight: "regular",
    children: "Title",
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

    const levels = ["1", "2", "3", "4", "5", "6"] as const;

    levels.forEach((level) => {
      const titleContainer = document.createElement("div");
      titleContainer.style.margin = "0";
      render(
        <Title
          level={level}
          align="center"
          style={{ margin: "0" }}
        >{`Title Level ${level}`}</Title>,
        titleContainer
      );
      container.appendChild(titleContainer);
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
    container.style.width = "100vw";
    container.style.background = "hsl(235deg 52% 16%)";

    const { children, ...props } = args;

    const titleContainer = document.createElement("div");
    titleContainer.style.margin = "0";
    render(
      <Title {...props} style={{ margin: "0", ...props.style }}>
        {children}
      </Title>,
      titleContainer
    );
    container.appendChild(titleContainer);

    return container;
  },
};
