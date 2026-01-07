import type { Meta, StoryObj } from "@storybook/html";
import { Avatar } from "./Avatar";
import { render } from "ddd-react";

const meta: Meta = {
  title: "Components/Avatar",
  tags: ["autodocs"],
  argTypes: {
    src: {
      control: "text",
      description: "URL изображения",
    },
    alt: {
      control: "text",
      description: "Альтернативный текст",
    },
    level: {
      control: "select",
      options: ["6", "7", "8", "9", "10"],
      description: "Уровень размера",
    },
  },
  args: {
    src: "https://cdn.ddfilms-static.ru/static/avatars/default.png",
    alt: "Аватар",
    level: "8",
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
    container.style.gap = "20px";

    const levels = ["6", "7", "8", "9", "10"] as const;

    levels.forEach((level) => {
      const avatarContainer = document.createElement("div");
      render(
        <Avatar
          src="https://cdn.ddfilms-static.ru/static/avatars/default.png"
          alt={`Аватар уровня ${level}`}
          level={level}
        />,
        avatarContainer
      );
      container.appendChild(avatarContainer);
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

    const avatarContainer = document.createElement("div");
    render(<Avatar {...args} />, avatarContainer);
    container.appendChild(avatarContainer);

    return container;
  },
};
