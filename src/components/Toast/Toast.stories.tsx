import type { Meta, StoryObj } from "@storybook/html";
import { Toast } from "./Toast";
import { render } from "@robocotik/react";

const meta: Meta = {
  title: "Components/Toast",
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: "select",
      options: ["success", "error", "info"],
      description: "Тип уведомления",
    },
    message: {
      control: "text",
      description: "Сообщение",
    },
    isActive: {
      control: "boolean",
      description: "Видимость уведомления",
    },
    id: {
      control: "number",
      description: "ID уведомления",
    },
  },
  args: {
    type: "info",
    message: "Сообщение уведомления",
    isActive: true,
    id: 1,
  },
};

export default meta;
type Story = StoryObj;

export const AllTypes: Story = {
  render: () => {
    const container = document.createElement("div");
    container.style.display = "flex";
    container.style.alignItems = "center";
    container.style.justifyContent = "center";
    container.style.flexDirection = "column";
    container.style.gap = "30px";
    container.style.padding = "20px";
    container.style.minHeight = "100vh";
    container.style.background = "hsl(235deg 52% 16%)";

    const types = ["success", "error", "info"] as const;

    types.forEach((type, index) => {
      const toastContainer = document.createElement("div");
      render(
        <Toast
          type={type}
          message={`${
            type === "success"
              ? "Успешно"
              : type === "error"
              ? "Ошибка"
              : "Информация"
          }: сообщение`}
          isActive={true}
          id={index + 1}
        />,
        toastContainer
      );
      container.appendChild(toastContainer);
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

    const toastContainer = document.createElement("div");
    render(
      <Toast
        type="info"
        message="Сообщение"
        isActive={true}
        id={100}
        {...args}
      />,
      toastContainer
    );
    container.appendChild(toastContainer);

    return container;
  },
};
