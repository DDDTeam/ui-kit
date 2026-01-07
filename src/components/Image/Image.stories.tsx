import type { Meta, StoryObj } from "@storybook/html";
import { Image } from "./Image";
import { render } from "ddd-react";

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

    const imageContainer = document.createElement("div");
    render(<Image {...args} />, imageContainer);
    container.appendChild(imageContainer);

    return container;
  },
};
