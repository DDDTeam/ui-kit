import type { Meta, StoryObj } from "@storybook/html";
import { FormItem } from "./FormItem";
import { render } from "@robocotik/react";

const meta: Meta = {
  title: "Components/FormItem",
  tags: ["autodocs"],
  argTypes: {
    mode: {
      control: "select",
      options: ["primary", "secondary", "tertiary"],
      description: "Режим поля",
    },
    type: {
      control: "select",
      options: ["text", "password"],
      description: "Тип поля",
    },
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
    mode: "primary",
    type: "text",
    status: "default",
    top: "Заголовок",
    bottom: "Подсказка",
    placeholder: "Введите текст",
    onChange: (value: string) => console.log("Значение изменилось", value),
  },
};

export default meta;
type Story = StoryObj;

export const AllModes: Story = {
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

    const modes = ["primary", "secondary", "tertiary"] as const;

    modes.forEach((mode) => {
      const formItemContainer = document.createElement("div");
      render(
        <FormItem
          mode={mode}
          top={`${mode.charAt(0).toUpperCase() + mode.slice(1)} Mode`}
          placeholder="Enter text"
          onChange={(value) => console.log("Value changed", value)}
        />,
        formItemContainer
      );
      container.appendChild(formItemContainer);
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

    const formItemContainer = document.createElement("div");
    render(
      <FormItem
        mode="primary"
        onChange={(value) => console.log("Значение изменилось", value)}
        {...args}
      />,
      formItemContainer
    );
    container.appendChild(formItemContainer);

    return container;
  },
};
