import type { Meta, StoryObj } from "@storybook/html";
import { Switch } from "./Switch";
import { render } from "@robocotik/react";

const meta: Meta = {
  title: "Components/Switch",
  tags: ["autodocs"],
  argTypes: {
    checked: {
      control: "boolean",
      description: "Состояние переключателя",
    },
    onChange: {
      action: "changed",
      description: "Обработчик изменения",
    },
  },
  args: {
    checked: false,
    onChange: (checked: boolean) =>
      console.log("Переключатель изменился", checked),
  },
};

export default meta;
type Story = StoryObj;

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

    const switchContainer = document.createElement("div");
    switchContainer.style.width = "361px";
    switchContainer.style.height = "80px";
    render(
      <Switch {...args} style={{ width: "100%", ...args.style }} />,
      switchContainer
    );
    container.appendChild(switchContainer);

    return container;
  },
};
