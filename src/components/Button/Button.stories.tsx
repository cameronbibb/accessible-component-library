import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "./Button";
import docs from "./Button.docs.mdx";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  render: (args) => <Button {...args}>{args.children}</Button>,
  parameters: {
    docs: {
      page: docs,
    },
  },
  argTypes: {
    variant: {
      control: "select",
      options: [
        "default",
        "secondary",
        "accent-cool",
        "accent-warm",
        "base",
        "outline",
      ],
      description: "Visual variant of the button",
    },
    disabled: {
      control: "boolean",
      description:
        "Disables the button and communicates unavailability to screen readers",
    },
    size: {
      control: "radio",
      options: [undefined, "big"],
      description: "Renders a larger button for increased touch target size",
    },
    unstyled: {
      control: "boolean",
      description:
        "Renders the button without visual styling — appears as a link",
    },
    children: {
      control: "text",
      description: "Button label text — should start with a verb",
    },
    onClick: {
      description: "Click handler",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: "Default button",
  },
};

export const Secondary: Story = {
  args: {
    children: "Secondary button",
    variant: "secondary",
  },
};

export const AccentCool: Story = {
  args: {
    children: "Accent cool button",
    variant: "accent-cool",
  },
};

export const AccentWarm: Story = {
  args: {
    children: "Accent warm button",
    variant: "accent-warm",
  },
};

export const Base: Story = {
  args: {
    children: "Base button",
    variant: "base",
  },
};

export const Outline: Story = {
  args: {
    children: "Outline button",
    variant: "outline",
  },
};

export const Disabled: Story = {
  args: {
    children: "Disabled button",
    disabled: true,
  },
};

export const Big: Story = {
  args: {
    children: "Big button",
    size: "big",
  },
};

export const Unstyled: Story = {
  args: {
    children: "Unstyled button",
    unstyled: true,
  },
};
