import { fn } from "@storybook/test";

import Button, { ButtonProps } from "./Button";

export default {
  title: "components/Button",
  component: Button,
  parameters: {},
  tags: ["autodocs"],
  argTypes: {
    varient: {
      options: ["primary", "secondary", "tertiary"],
      control: "radio",
    },
    backgroundColor: { control: "color" },
    size: {
      options: ["small", "medium", "large"],
      control: "radio",
      inline: true
    },
  },
  args: { children: "Google", onClick: fn() },
};

export const Demo = {
  args: {
    size: "large",
    children: "Button",
  },
};