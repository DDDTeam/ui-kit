import type { Meta, StoryObj } from "@storybook/html";
import { Spacing } from "./Spacing";
import { render } from "@robocotik/react";

const meta: Meta = {
  title: "Components/Spacing",
  tags: ["autodocs"],
  argTypes: {
    level: {
      control: "select",
      options: ["7", "8", "9", "10"],
      description: "Уровень отступа",
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
    container.style.flexDirection = "row";
    container.style.flexWrap = "wrap";
    container.style.gap = "40px";

    const levels = ["7", "8", "9", "10"] as const;

    levels.forEach((level) => {
      const spacingContainer = document.createElement("div");
      if (level === "7") {
        spacingContainer.style.display = "flex";
        spacingContainer.style.alignItems = "center";
        spacingContainer.style.gap = "10px";
      } else {
        spacingContainer.style.display = "flex";
        spacingContainer.style.flexDirection = "column";
        spacingContainer.style.alignItems = "center";
        spacingContainer.style.gap = "10px";
      }

      const beforeDiv = document.createElement("div");
      beforeDiv.style.padding = "20px";
      beforeDiv.style.background = "hsl(233deg 52% 34%)";
      beforeDiv.style.borderRadius = "10px";
      beforeDiv.style.color = "hsl(48deg 14% 93%)";
      beforeDiv.textContent = "До";
      spacingContainer.appendChild(beforeDiv);

      const spacingElement = document.createElement("div");
      render(<Spacing level={level} />, spacingElement);
      spacingContainer.appendChild(spacingElement);

      const afterDiv = document.createElement("div");
      afterDiv.style.padding = "20px";
      afterDiv.style.background = "hsl(233deg 52% 34%)";
      afterDiv.style.borderRadius = "10px";
      afterDiv.style.color = "hsl(48deg 14% 93%)";
      afterDiv.textContent = "После";
      spacingContainer.appendChild(afterDiv);

      container.appendChild(spacingContainer);
    });

    return container;
  },
};

export const Playground: Story = {
  render: (args) => {
    const container = document.createElement("div");

    const spacingContainer = document.createElement("div");
    const level = args.level || "8";
    if (level === "7") {
      spacingContainer.style.display = "flex";
      spacingContainer.style.alignItems = "center";
      spacingContainer.style.gap = "10px";
    } else {
      spacingContainer.style.display = "flex";
      spacingContainer.style.flexDirection = "column";
      spacingContainer.style.alignItems = "center";
      spacingContainer.style.gap = "10px";
    }

    const beforeDiv = document.createElement("div");
    beforeDiv.style.padding = "20px";
    beforeDiv.style.background = "hsl(233deg 52% 34%)";
    beforeDiv.style.borderRadius = "10px";
    beforeDiv.style.color = "hsl(48deg 14% 93%)";
    beforeDiv.textContent = "До";
    spacingContainer.appendChild(beforeDiv);

    const spacingElement = document.createElement("div");
    render(<Spacing {...args} />, spacingElement);
    spacingContainer.appendChild(spacingElement);

    const afterDiv = document.createElement("div");
    afterDiv.style.padding = "20px";
    afterDiv.style.background = "hsl(233deg 52% 34%)";
    afterDiv.style.borderRadius = "10px";
    afterDiv.style.color = "hsl(48deg 14% 93%)";
    afterDiv.textContent = "После";
    spacingContainer.appendChild(afterDiv);

    container.appendChild(spacingContainer);

    return container;
  },
};
