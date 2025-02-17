import { fn } from "@storybook/test";

import Button, { ButtonProps } from "./Button";

export default {
  title: "components/Button",
  component: Button,
  parameters: {},
  tags: ["autodocs"],
  argTypes: {
    variant: {
      options: ["primary", "secondary", "success","warning","danger","outline-primary","outline-secondary","outline-success","outline-warning","outline-danger"],
      control: "radio",
    },
    size: {
      options: ["sm", "md", "lg"],
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