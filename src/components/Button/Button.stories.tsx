import type { Meta, StoryObj } from "@storybook/react-vite";
import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  render: (args) => <Button {...args}>{args.children}</Button>,
  parameters: {
    docs: {
      description: {
        component: `
## Accessibility

This button component is built on the USWDS button and satisfies the following WCAG 2.1 AA criteria:

- **1.4.3 Contrast (Minimum)** — All button variants meet a 4.5:1 contrast ratio between text and background color
- **2.1.1 Keyboard** — All buttons are fully operable via keyboard
- **2.4.7 Focus Visible** — A visible focus indicator is displayed when the button receives keyboard focus
- **4.1.2 Name, Role, Value** — Uses a native \`<button>\` element so role and state are communicated correctly to screen readers

## Usage guidelines

- Use the **default** variant for the primary action on a page
- Use **secondary** for secondary actions that appear alongside a primary action
- Use **outline** for actions that occur on the current page without navigating away
- Use **accent-cool** or **accent-warm** sparingly for emphasis
- Keep button labels short and start with a verb — "Save changes", "Submit form", "Cancel"
- Avoid placing more than one primary button on a page
        `,
      },
    },
  },
  tags: ["autodocs"],
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
