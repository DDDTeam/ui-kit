import type { Meta, StoryObj } from "@storybook/html";
import { Title } from "./Title";
import { render } from "ddd-react";

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
    container.style.maxHeight = "100vh";
    container.style.overflow = "auto";

    const levels = ["1", "2", "3", "4", "5", "6"] as const;

    levels.forEach((level) => {
      const titleContainer = document.createElement("div");
      titleContainer.style.margin = "0";
      render(
        <Title
          level={level}
          align="center"
          style={{ margin: "0" }}
        >{`Заголовок уровня ${level}`}</Title>,
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
    container.style.width = "100%";
    container.style.boxSizing = "border-box";
    container.style.maxHeight = "100vh";
    container.style.overflow = "auto";

    const { children, ...props } = args;

    const titleContainer = document.createElement("div");
    titleContainer.style.margin = "0";
    titleContainer.style.width = "100%";
    titleContainer.style.maxWidth = "100%";
    titleContainer.style.boxSizing = "border-box";
    titleContainer.style.overflowWrap = "break-word";
    titleContainer.style.overflow = "auto";
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
