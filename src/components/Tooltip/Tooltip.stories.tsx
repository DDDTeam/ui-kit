import type { Meta, StoryObj } from "@storybook/html";
import { Tooltip } from "./Tooltip";
import { render } from "@robocotik/react";

const meta: Meta = {
  title: "Components/Tooltip",
  tags: ["autodocs"],
  argTypes: {
    text: {
      control: "text",
      description: "Текст тултипа",
    },
    placement: {
      control: "select",
      options: ["top", "bottom", "left", "right"],
      description: "Расположение тултипа",
    },
    children: {
      control: "text",
      description: "Текст кнопки/элемента",
    },
  },
  args: {
    text: "Подсказка",
    placement: "right",
    children: "Наведите",
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
    container.style.gap = "50px";

    const placements: Array<"top" | "bottom" | "left" | "right"> = [
      "top",
      "left",
      "right",
      "bottom",
    ];

    const placementLabels: Record<string, string> = {
      top: "Cверху",
      bottom: "Cнизу",
      left: "Cлева",
      right: "Cправа",
    };

    placements.forEach((placement) => {
      const tooltipContainer = document.createElement("div");
      render(
        <Tooltip text="Подсказка" placement={placement}>
          <div
            style={{
              padding: "10px 20px",
              background: "var(--color-accent-2)",
              color: "white",
              borderRadius: "4px",
              cursor: "pointer",
              fontFamily: '"Golos UI", Arial, sans-serif',
            }}
          >
            {placementLabels[placement]}
          </div>
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
    container.style.justifyContent = "center";
    container.style.alignItems = "center";

    const { children, text, placement } = args;

    const tooltipContainer = document.createElement("div");
    render(
      <Tooltip text={text} placement={placement}>
        <div
          style={{
            padding: "10px 20px",
            background: "var(--color-accent-2)",
            color: "white",
            borderRadius: "4px",
            cursor: "pointer",
            fontFamily: '"Golos UI", Arial, sans-serif',
          }}
        >
          {children}
        </div>
      </Tooltip>,
      tooltipContainer
    );
    container.appendChild(tooltipContainer);

    return container;
  },
};
