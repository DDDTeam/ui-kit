import type { Meta, StoryObj } from "@storybook/html";
import { Logo } from "./Logo";
import { render } from "ddd-react";

const meta: Meta = {
  title: "Components/Logo",
  tags: ["autodocs"],
  argTypes: {
    level: {
      control: "select",
      options: ["7", "8"],
      description: "Уровень размера",
    },
  },
  args: {
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

    const levels = ["7", "8"] as const;

    levels.forEach((level) => {
      const logoContainer = document.createElement("div");
      render(<Logo level={level} />, logoContainer);
      container.appendChild(logoContainer);
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

    const logoContainer = document.createElement("div");
    render(<Logo {...args} />, logoContainer);
    container.appendChild(logoContainer);

    return container;
  },
};
