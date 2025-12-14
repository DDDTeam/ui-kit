import type { Meta, StoryObj } from "@storybook/html";
import { Flex } from "./Flex";
import { render } from "@robocotik/react";

const meta: Meta = {
  title: "Components/Flex",
  tags: ["autodocs"],
  argTypes: {
    direction: {
      control: "select",
      options: ["column", "row"],
      description: "Направление",
    },
    align: {
      control: "select",
      options: ["start", "center", "end", "top"],
      description: "Выравнивание по поперечной оси",
    },
    justify: {
      control: "select",
      options: ["start", "center", "end", "between", "around"],
      description: "Выравнивание по главной оси",
    },
    onClick: {
      action: "clicked",
      description: "Обработчик клика",
    },
  },
  args: {
    direction: "row",
    align: "center",
    justify: "start",
  },
};

export default meta;
type Story = StoryObj;

export const AllDirections: Story = {
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

    const directions = ["row", "column"] as const;
    const cardsCount = 3;

    directions.forEach((direction) => {
      const flexContainer = document.createElement("div");
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
          Item {i + 1}
        </div>
      ));

      render(
        <Flex
          direction={direction}
          style={{
            padding: "20px",
            background: "hsl(210deg 30% 87%)",
            gap: "10px",
          }}
        >
          {cards}
        </Flex>,
        flexContainer
      );
      container.appendChild(flexContainer);
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

    const flexContainer = document.createElement("div");
    const cardsCount = 3;
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
        Item {i + 1}
      </div>
    ));

    render(
      <Flex
        {...args}
        style={{
          padding: "20px",
          background: "hsl(210deg 30% 87%)",
          gap: "10px",
          minWidth: "200px",
        }}
      >
        {cards}
      </Flex>,
      flexContainer
    );
    container.appendChild(flexContainer);

    return container;
  },
};
