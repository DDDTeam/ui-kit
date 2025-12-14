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
    onChange: (checked: boolean) => console.log("Switch changed", checked),
  },
};

export default meta;
type Story = StoryObj;

export const States: Story = {
  render: () => {
    const container = document.createElement("div");
    container.style.display = "flex";
    container.style.alignItems = "center";
    container.style.justifyContent = "center";
    container.style.flexDirection = "column";
    container.style.gap = "20px";
    container.style.padding = "20px";
    container.style.minHeight = "100vh";
    container.style.background = "hsl(235deg 52% 16%)";

    const switchContainer1 = document.createElement("div");
    switchContainer1.style.width = "360px";
    switchContainer1.style.height = "80px";
    render(
      <Switch
        checked={false}
        onChange={(checked) => console.log("Switch changed", checked)}
        style={{ width: "100%" }}
      />,
      switchContainer1
    );
    container.appendChild(switchContainer1);

    const switchContainer2 = document.createElement("div");
    switchContainer2.style.width = "360px";
    switchContainer2.style.height = "80px";
    render(
      <Switch
        checked={true}
        onChange={(checked) => console.log("Switch changed", checked)}
        style={{ width: "100%" }}
      />,
      switchContainer2
    );
    container.appendChild(switchContainer2);

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

    const switchContainer = document.createElement("div");
    switchContainer.style.width = "360px";
    switchContainer.style.height = "80px";
    render(
      <Switch {...args} style={{ width: "100%", ...args.style }} />,
      switchContainer
    );
    container.appendChild(switchContainer);

    return container;
  },
};
