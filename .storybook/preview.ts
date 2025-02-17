import { Preview } from "@storybook/react";
import '../src/styles/index.scss';
const preview:Preview = {
  parameters: {
    background: {
      default: "light",
      values: [
        { name: "Light", value: "#ffffff", default: true },
        { name: "Dark", value: "#333333" },
      ],
    },
    options:{
      storySort: {
        order: ['Introduction', 'Components', 'Hooks', 'Utils', 'Internal'],
      }
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },

  tags: ["autodocs"]
};

export default preview;
