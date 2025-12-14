import type { Meta, StoryObj } from "@storybook/html";
import { CardGrid } from "./CardGrid";
import { render } from "@robocotik/react";

const meta: Meta = {
  title: "Components/CardGrid",
  tags: ["autodocs"],
  argTypes: {
    children: {
      control: "text",
      description: "Содержимое сетки",
    },
  },
  args: {},
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => {
    const container = document.createElement("div");
    container.style.width = "100%";
    container.style.boxSizing = "border-box";
    container.style.display = "flex";
    container.style.justifyContent = "center";

    const cardGridContainer = document.createElement("div");
    cardGridContainer.style.width = "50%";
    cardGridContainer.style.maxWidth = "100%";

    const cardsCount = 6;
    const cards = Array.from({ length: cardsCount }, (_, i) => (
      <div
        key={i}
        style={{
          padding: "20px",
          background: "hsl(233deg 52% 34%)",
          borderRadius: "10px",
          color: "hsl(48deg 14% 93%)",
        }}
      >
        Card {i + 1}
      </div>
    ));

    render(<CardGrid>{cards}</CardGrid>, cardGridContainer);
    container.appendChild(cardGridContainer);

    return container;
  },
};

export const Playground: Story = {
  render: (args) => {
    const container = document.createElement("div");
    container.style.width = "100%";
    container.style.boxSizing = "border-box";
    container.style.display = "flex";
    container.style.justifyContent = "center";

    const cardGridContainer = document.createElement("div");
    cardGridContainer.style.width = "50%";
    cardGridContainer.style.maxWidth = "100%";

    render(<CardGrid {...args}></CardGrid>, cardGridContainer);
    container.appendChild(cardGridContainer);

    return container;
  },
};
