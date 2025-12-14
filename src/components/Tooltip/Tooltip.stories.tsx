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
  },
  args: {
    text: "Текст тултипа",
    placement: "right",
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
    container.style.padding = "60px";
    container.style.minHeight = "100vh";
    container.style.width = "100%";
    container.style.background = "hsl(235deg 52% 16%)";
    container.style.position = "relative";

    const placementLabels: Record<string, string> = {
      top: "сверху",
      right: "справа",
      left: "слева",
      bottom: "снизу",
    };

    const placements = [
      { placement: "top" as const, text: "Тултип сверху" },
      { placement: "right" as const, text: "Тултип справа" },
      { placement: "left" as const, text: "Тултип слева" },
      { placement: "bottom" as const, text: "Тултип снизу" },
    ];

    placements.forEach(({ placement, text }) => {
      const tooltipContainer = document.createElement("div");
      tooltipContainer.style.position = "relative";
      tooltipContainer.style.display = "inline-block";

      const setTooltipPosition = (
        tooltip: HTMLElement,
        trigger: HTMLElement
      ) => {
        const rect = trigger.getBoundingClientRect();
        tooltip.style.top = "";
        tooltip.style.bottom = "";
        tooltip.style.left = "";
        tooltip.style.right = "";
        tooltip.style.transform = "";

        switch (placement) {
          case "top":
            tooltip.style.bottom = `${window.innerHeight - rect.top - 10}px`;
            tooltip.style.left = `${rect.left + rect.width / 2}px`;
            tooltip.style.transform = "translateX(-50%)";
            break;
          case "bottom":
            tooltip.style.top = `${rect.bottom + 8}px`;
            tooltip.style.left = `${rect.left + rect.width / 2}px`;
            tooltip.style.transform = "translateX(-50%)";
            break;
          case "left":
            tooltip.style.top = `${rect.top + rect.height / 2}px`;
            tooltip.style.right = `${window.innerWidth - rect.left - 10}px`;
            tooltip.style.transform = "translateY(-50%)";
            break;
          case "right":
            tooltip.style.top = `${rect.top + rect.height / 2}px`;
            tooltip.style.left = `${rect.right + 8}px`;
            tooltip.style.transform = "translateY(-50%)";
            break;
        }
      };

      const updateTooltipPosition = () => {
        const trigger = Array.from(
          tooltipContainer.querySelectorAll("div")
        ).find(
          (el) =>
            el.textContent?.trim() === placementLabels[placement] &&
            el.style.width === "160px"
        ) as HTMLElement;

        if (!trigger) {
          setTimeout(updateTooltipPosition, 0);
          return;
        }

        const allFixedElements = Array.from(
          document.querySelectorAll("*")
        ).filter(
          (el) =>
            window.getComputedStyle(el as HTMLElement).position === "fixed"
        ) as HTMLElement[];

        const tooltip = allFixedElements.find(
          (el) => el.textContent?.trim() === text
        );

        if (tooltip) {
          setTooltipPosition(tooltip, trigger);
        } else {
          setTimeout(updateTooltipPosition, 0);
        }
      };

      render(
        <Tooltip text={text} placement={placement}>
          <div
            style={{
              width: "160px",
              height: "100px",
              backgroundColor: "var(--color-accent-2)",
              borderRadius: "8px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              transition: "opacity 0.2s ease",
              color: "var(--color-text)",
              fontSize: "18px",
              fontWeight: "500",
              whiteSpace: "pre-line",
              textAlign: "center",
            }}
            onMouseEnter={(e: any) => {
              e.currentTarget.style.opacity = "0.9";
              updateTooltipPosition();
            }}
            onMouseLeave={(e: any) => {
              e.currentTarget.style.opacity = "1";
            }}
          >
            {placementLabels[placement]}
          </div>
        </Tooltip>,
        tooltipContainer
      );

      container.appendChild(tooltipContainer);

      requestAnimationFrame(() => {
        updateTooltipPosition();
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
    container.style.gap = "40px";
    container.style.padding = "60px";
    container.style.minHeight = "100vh";
    container.style.width = "100%";
    container.style.background = "hsl(235deg 52% 16%)";
    container.style.position = "relative";

    const tooltipContainer = document.createElement("div");
    tooltipContainer.style.position = "relative";
    tooltipContainer.style.display = "inline-block";

    const placement = args.placement || "right";
    const tooltipText = args.text || "Текст тултипа";

    const setTooltipPosition = (tooltip: HTMLElement, trigger: HTMLElement) => {
      const rect = trigger.getBoundingClientRect();
      tooltip.style.top = "";
      tooltip.style.bottom = "";
      tooltip.style.left = "";
      tooltip.style.right = "";
      tooltip.style.transform = "";

      switch (placement) {
        case "top":
          tooltip.style.bottom = `${window.innerHeight - rect.top - 10}px`;
          tooltip.style.left = `${rect.left + rect.width / 2}px`;
          tooltip.style.transform = "translateX(-50%)";
          break;
        case "bottom":
          tooltip.style.top = `${rect.bottom + 8}px`;
          tooltip.style.left = `${rect.left + rect.width / 2}px`;
          tooltip.style.transform = "translateX(-50%)";
          break;
        case "left":
          tooltip.style.top = `${rect.top + rect.height / 2}px`;
          tooltip.style.right = `${window.innerWidth - rect.left - 10}px`;
          tooltip.style.transform = "translateY(-50%)";
          break;
        case "right":
          tooltip.style.top = `${rect.top + rect.height / 2}px`;
          tooltip.style.left = `${rect.right + 8}px`;
          tooltip.style.transform = "translateY(-50%)";
          break;
      }
    };

    const updateTooltipPosition = () => {
      const trigger = Array.from(tooltipContainer.querySelectorAll("div")).find(
        (el) => {
          const styles = window.getComputedStyle(el);
          return (
            styles.width === "160px" &&
            styles.height === "100px" &&
            styles.display === "flex" &&
            el.textContent?.trim() === tooltipText
          );
        }
      ) as HTMLElement;

      if (!trigger) {
        setTimeout(updateTooltipPosition, 0);
        return false;
      }

      const allFixedElements = Array.from(
        document.querySelectorAll("*")
      ).filter((el) => {
        const styles = window.getComputedStyle(el as HTMLElement);
        return styles.position === "fixed";
      }) as HTMLElement[];

      const tooltip = allFixedElements.find(
        (el) => el.textContent?.trim() === tooltipText
      );

      if (tooltip && trigger) {
        setTooltipPosition(tooltip, trigger);
        return true;
      } else {
        setTimeout(updateTooltipPosition, 0);
        return false;
      }
    };

    render(
      <Tooltip text={tooltipText} placement={placement}>
        <div
          style={{
            width: "160px",
            height: "100px",
            backgroundColor: "var(--color-accent-2)",
            borderRadius: "8px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            transition: "opacity 0.2s ease",
            color: "var(--color-text)",
            fontSize: "18px",
            fontWeight: "500",
            whiteSpace: "pre-line",
            textAlign: "center",
          }}
          onMouseEnter={(e: any) => {
            e.currentTarget.style.opacity = "0.9";
            updateTooltipPosition();
            requestAnimationFrame(() => {
              updateTooltipPosition();
            });
          }}
          onMouseLeave={(e: any) => {
            e.currentTarget.style.opacity = "1";
          }}
        >
          {tooltipText}
        </div>
      </Tooltip>,
      tooltipContainer
    );

    container.appendChild(tooltipContainer);

    let positionSet = false;

    const setupPosition = () => {
      if (!positionSet) {
        positionSet = updateTooltipPosition();
      }
    };

    const observer = new MutationObserver(() => {
      if (!positionSet) {
        positionSet = updateTooltipPosition();
      }
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    requestAnimationFrame(() => {
      setupPosition();
    });

    setTimeout(() => {
      setupPosition();
      observer.disconnect();
    }, 100);

    return container;
  },
};
