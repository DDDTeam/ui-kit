import type { Meta, StoryObj } from "@storybook/html";
import { Textarea } from "./Textarea";
import { render } from "@robocotik/react";

const meta: Meta = {
  title: "Components/Textarea",
  tags: ["autodocs"],
  argTypes: {
    status: {
      control: "select",
      options: ["default", "error"],
      description: "Статус поля",
    },
    top: {
      control: "text",
      description: "Текст сверху",
    },
    bottom: {
      control: "text",
      description: "Текст снизу",
    },
    placeholder: {
      control: "text",
      description: "Плейсхолдер",
    },
    value: {
      control: "text",
      description: "Значение",
    },
    onChange: {
      action: "valueChanged",
      description: "Обработчик изменения",
    },
  },
  args: {
    status: "default",
    top: "Заголовок",
    bottom: "Helper text",
    placeholder: "Enter text",
    onChange: (value: string) => console.log("Value changed", value),
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
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

    const textareaContainer = document.createElement("div");
    textareaContainer.style.width = "600px";
    render(
      <Textarea
        top="Label"
        bottom="Helper text"
        placeholder="Enter text"
        onChange={(value) => console.log("Value changed", value)}
        style={{ minHeight: "150px" }}
      />,
      textareaContainer
    );
    container.appendChild(textareaContainer);

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

    const textareaContainer = document.createElement("div");
    textareaContainer.style.width = "600px";
    render(
      <Textarea
        onChange={(value) => console.log("Value changed", value)}
        {...args}
        style={{ minHeight: "150px", ...args.style }}
      />,
      textareaContainer
    );
    container.appendChild(textareaContainer);

    return container;
  },
};
