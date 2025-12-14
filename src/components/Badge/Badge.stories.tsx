import type { Meta, StoryObj } from "@storybook/html";
import { Badge } from "./Badge";
import { render } from "@robocotik/react";

const meta: Meta = {
  title: "Components/Badge",
  tags: ["autodocs"],
  argTypes: {
    mode: {
      control: "select",
      options: ["low", "high", "medium"],
      description: "Вид бейджа",
    },
    size: {
      control: "select",
      options: ["m", "s"],
      description: "Размер бейджа",
    },
    children: {
      control: "text",
      description: "Содержимое бейджа",
    },
  },
  args: {
    mode: "low",
    size: "m",
    children: "Бейдж",
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
    container.style.gap = "10px";
    container.style.padding = "20px";
    container.style.minHeight = "100vh";
    container.style.width = "100%";
    container.style.background = "hsl(235deg 52% 16%)";

    const modes = ["low", "medium", "high"] as const;

    modes.forEach((mode) => {
      const badgeContainer = document.createElement("div");
      badgeContainer.style.position = "relative";
      badgeContainer.style.display = "flex";
      badgeContainer.style.justifyContent = "center";
      badgeContainer.style.alignItems = "center";
      render(
        <Badge
          mode={mode}
          style={{ position: "static", top: "auto", left: "auto" }}
        >
          {"бейдж"}
        </Badge>,
        badgeContainer
      );
      container.appendChild(badgeContainer);
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
    container.style.width = "100%";
    container.style.background = "hsl(235deg 52% 16%)";

    const { children, ...props } = args;

    const badgeContainer = document.createElement("div");
    badgeContainer.style.position = "relative";
    badgeContainer.style.display = "flex";
    badgeContainer.style.justifyContent = "center";
    badgeContainer.style.alignItems = "center";
    render(
      <Badge
        mode="low"
        {...props}
        style={{
          position: "static",
          top: "auto",
          left: "auto",
          ...props.style,
        }}
      >
        {children}
      </Badge>,
      badgeContainer
    );
    container.appendChild(badgeContainer);

    return container;
  },
};
