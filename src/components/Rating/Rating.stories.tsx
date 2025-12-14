import type { Meta, StoryObj } from "@storybook/html";
import { Rating } from "./Rating";
import { render } from "@robocotik/react";

const meta: Meta = {
  title: "Components/Rating",
  tags: ["autodocs"],
  argTypes: {
    rating: {
      control: "text",
      description: "Рейтинг",
    },
    mode: {
      control: "select",
      options: ["low", "medium", "high"],
      description: "Категория рейтинга",
    },
  },
  args: {
    rating: "4.5",
    mode: "medium",
  },
};

export default meta;
type Story = StoryObj;

export const AllModes: Story = {
  render: () => {
    const container = document.createElement("div");
    container.style.display = "flex";
    container.style.flexDirection = "column";
    container.style.alignItems = "center";
    container.style.gap = "10px";

    const modes = ["low", "medium", "high"] as const;

    modes.forEach((mode) => {
      const ratingContainer = document.createElement("div");
      render(<Rating rating="4.5" mode={mode} />, ratingContainer);
      container.appendChild(ratingContainer);
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

    const ratingContainer = document.createElement("div");
    render(<Rating mode="medium" rating="4.5" {...args} />, ratingContainer);
    container.appendChild(ratingContainer);

    return container;
  },
};
