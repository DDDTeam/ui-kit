import type { Meta, StoryObj } from "@storybook/html";
import { Tooltip } from "./Tooltip";
import { render } from "@robocotik/react";

const meta: Meta = {
  title: "Components/Tooltip",
  tags: ["autodocs"],
  argTypes: {
    text: {
      control: "text",
      description: "Текст подсказки",
    },
    placement: {
      control: "select",
      options: ["top", "bottom", "left", "right"],
      description: "Позиция подсказки",
    },
    children: {
      control: "text",
      description: "Элемент, к которому привязана подсказка",
    },
  },
  args: {
    text: "Tooltip text",
    placement: "right",
    children: "Hover me",
  },
};

export default meta;
type Story = StoryObj;

export const AllPlacements: Story = {
  render: () => {
    const container = document.createElement("div");
    container.style.display = "flex";
    container.style.alignItems = "center";
    container.style.justifyContent = "center";
    container.style.flexDirection = "column";
    container.style.gap = "40px";
    container.style.padding = "40px";
    container.style.minHeight = "100vh";
    container.style.background = "hsl(235deg 52% 16%)";

    const placements = ["top", "bottom", "left", "right"] as const;

    placements.forEach((placement) => {
      const tooltipContainer = document.createElement("div");
      render(
        <Tooltip text={`Tooltip ${placement}`} placement={placement}>
          <button
            style={{
              padding: "10px 20px",
              background: "#007bff",
              color: "white",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            Hover me ({placement})
          </button>
        </Tooltip>,
        tooltipContainer
      );
      container.appendChild(tooltipContainer);
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

    const { children, ...props } = args;

    const tooltipContainer = document.createElement("div");
    render(
      <Tooltip {...props}>
        <button
          style={{
            padding: "10px 20px",
            background: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          {children}
        </button>
      </Tooltip>,
      tooltipContainer
    );
    container.appendChild(tooltipContainer);

    return container;
  },
};
