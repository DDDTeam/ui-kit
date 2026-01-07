import type { Meta, StoryObj } from "@storybook/html";
import { FileButton } from "./FileButton";
import { render } from "ddd-react";

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

    const fileButtonContainer = document.createElement("div");
    render(
      <FileButton
        accept="image/*"
        onChange={(e) => console.log("Файл изменен", e)}
        {...args}
      />,
      fileButtonContainer
    );
    container.appendChild(fileButtonContainer);

    return container;
  },
};
