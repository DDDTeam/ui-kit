import type { Meta, StoryObj } from "@storybook/html";
import { FileButton } from "./FileButton";
import { render } from "@robocotik/react";

const meta: Meta = {
  title: "Components/FileButton",
  tags: ["autodocs"],
  argTypes: {
    accept: {
      control: "text",
      description: "Типы принимаемых файлов",
    },
    onChange: {
      action: "fileChanged",
      description: "Обработчик изменения файла",
    },
  },
  args: {
    accept: "image/*",
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

    const fileButtonContainer = document.createElement("div");
    render(
      <FileButton
        accept="image/*"
        onChange={(e) => console.log("File changed", e)}
        {...args}
      />,
      fileButtonContainer
    );
    container.appendChild(fileButtonContainer);

    return container;
  },
};
