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
      tooltipContainer.style.position = "relative";
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

      // Устанавливаем тултип видимым для демонстрации
      requestAnimationFrame(() => {
        setTimeout(() => {
          const allDivs = tooltipContainer.querySelectorAll("div");
          allDivs.forEach((div) => {
            const className = div.className || "";
            if (
              className.includes("tooltip") &&
              !className.includes("tooltipWrapper")
            ) {
              const el = div as HTMLElement;
              el.style.opacity = "1";
              el.style.pointerEvents = "none";
              el.style.visibility = "visible";
              // Исправляем позиционирование для fixed
              if (
                el.style.position === "fixed" ||
                getComputedStyle(el).position === "fixed"
              ) {
                const button = tooltipContainer.querySelector("button");
                if (button) {
                  const rect = button.getBoundingClientRect();
                  if (placement === "top") {
                    el.style.top = `${rect.top - el.offsetHeight - 16}px`;
                    el.style.left = `${rect.left + rect.width / 2}px`;
                    el.style.transform = "translateX(-50%)";
                  } else if (placement === "bottom") {
                    el.style.top = `${rect.bottom + 16}px`;
                    el.style.left = `${rect.left + rect.width / 2}px`;
                    el.style.transform = "translateX(-50%)";
                  } else if (placement === "left") {
                    el.style.left = `${rect.left - el.offsetWidth - 16}px`;
                    el.style.top = `${rect.top + rect.height / 2}px`;
                    el.style.transform = "translateY(-50%)";
                  } else if (placement === "right") {
                    el.style.left = `${rect.right + 16}px`;
                    el.style.top = `${rect.top + rect.height / 2}px`;
                    el.style.transform = "translateY(-50%)";
                  }
                }
              }
            }
          });
        }, 300);
      });
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
    tooltipContainer.style.position = "relative";
    render(
      <Tooltip text="Подсказка" {...props}>
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

    // Устанавливаем тултип видимым для демонстрации
    requestAnimationFrame(() => {
      setTimeout(() => {
        const allDivs = tooltipContainer.querySelectorAll("div");
        const placement = props.placement || "right";
        allDivs.forEach((div) => {
          const className = div.className || "";
          if (
            className.includes("tooltip") &&
            !className.includes("tooltipWrapper")
          ) {
            const el = div as HTMLElement;
            el.style.opacity = "1";
            el.style.pointerEvents = "none";
            el.style.visibility = "visible";
            // Исправляем позиционирование для fixed
            if (
              el.style.position === "fixed" ||
              getComputedStyle(el).position === "fixed"
            ) {
              const button = tooltipContainer.querySelector("button");
              if (button) {
                const rect = button.getBoundingClientRect();
                if (placement === "top") {
                  el.style.top = `${rect.top - el.offsetHeight - 16}px`;
                  el.style.left = `${rect.left + rect.width / 2}px`;
                  el.style.transform = "translateX(-50%)";
                } else if (placement === "bottom") {
                  el.style.top = `${rect.bottom + 16}px`;
                  el.style.left = `${rect.left + rect.width / 2}px`;
                  el.style.transform = "translateX(-50%)";
                } else if (placement === "left") {
                  el.style.left = `${rect.left - el.offsetWidth - 16}px`;
                  el.style.top = `${rect.top + rect.height / 2}px`;
                  el.style.transform = "translateY(-50%)";
                } else if (placement === "right") {
                  el.style.left = `${rect.right + 16}px`;
                  el.style.top = `${rect.top + rect.height / 2}px`;
                  el.style.transform = "translateY(-50%)";
                }
              }
            }
          }
        });
      }, 300);
    });

    return container;
  },
};
