import "@/styles/tokens.scss";

const style = document.createElement("style");
style.textContent = `
  body {
    overflow: hidden;
  }
  html {
    overflow: hidden;
  }
  #storybook-root {
    overflow: hidden;
  }
  .sb-main-padded {
    overflow: hidden;
  }
`;
document.head.appendChild(style);
