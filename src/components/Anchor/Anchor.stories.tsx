import Anchor from "./Anchor";

export default {
  title:"components/Anchor",
  component: Anchor,
  parameters:{},
  tags:['autodocs'],
  argTypes:{
    href:{
      control: 'text'
    }
  },
  args:{
    href: 'https://www.google.com',
    children: 'Google'
  }
}

export const Demo = {
  args:{
    href: 'https://www.google.com',
    children: 'Google'
  },
}