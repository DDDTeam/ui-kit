import type { Meta, StoryObj } from "@storybook/html";
import { Image } from "./Image";
import { render } from "@robocotik/react";

const meta: Meta = {
  title: "Components/Image",
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
  },
  args: {
    src: "https://cdn.ddfilms-static.ru/static/avatars/default.png",
    alt: "Пример картинки",
  },
};

export default meta;
type Story = StoryObj;

export const Default: Story = {
  render: () => {
    const container = document.createElement("div");
    container.style.display = "flex";
    container.style.alignItems = "center";
    container.style.justifyContent = "center";
    container.style.flexDirection = "column";
    container.style.gap = "10px";
    container.style.padding = "20px";
    container.style.minHeight = "100vh";
    container.style.background = "hsl(235deg 52% 16%)";

    const imageContainer = document.createElement("div");
    render(
      <Image
        src="https://cdn.ddfilms-static.ru/static/avatars/default.png"
        alt="Пример картинки"
      />,
      imageContainer
    );
    container.appendChild(imageContainer);

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

    const imageContainer = document.createElement("div");
    render(<Image {...args} />, imageContainer);
    container.appendChild(imageContainer);

    return container;
  },
};
