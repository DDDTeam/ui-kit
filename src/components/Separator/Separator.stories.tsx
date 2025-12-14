import type { Meta, StoryObj } from "@storybook/html";
import { Separator } from "./Separator";
import { render } from "@robocotik/react";

const meta: Meta = {
  title: "Components/Separator",
  tags: ["autodocs"],
  argTypes: {
    mode: {
      control: "select",
      options: ["primary", "secondary"],
      description: "Режим разделителя",
    },
  },
  args: {
    mode: "primary",
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
    container.style.gap = "20px";
    container.style.width = "100%";

    const modes = ["primary", "secondary"] as const;

    modes.forEach((mode) => {
      const separatorContainer = document.createElement("div");
      separatorContainer.style.width = "70%";
      render(<Separator mode={mode} />, separatorContainer);
      container.appendChild(separatorContainer);
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
    container.style.width = "100%";

    const separatorContainer = document.createElement("div");
    separatorContainer.style.width = "70%";
    render(<Separator mode="primary" {...args} />, separatorContainer);
    container.appendChild(separatorContainer);

    return container;
  },
};
