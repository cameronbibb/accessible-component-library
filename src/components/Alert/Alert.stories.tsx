import type { Meta, StoryObj } from "@storybook/react-vite";
import { Alert } from "./Alert";

const meta: Meta<typeof Alert> = {
  title: "Components/Alert",
  component: Alert,
  render: (args) => <Alert {...args}>{testText}</Alert>,
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
    type: {
      control: "select",
      options: ["success", "warning", "error", "info"],
      description: "Sets the type of alert",
    },
    heading: {
      control: "text",
    },
    headingLevel: {
      control: false,
    },
    children: {},
    cta: {},
    slim: {
      control: false,
    },
    noIcon: {
      control: "boolean",
    },
    validation: {
      control: false,
    },
  },
};

export default meta;
type Story = StoryObj<typeof Alert>;

const testText =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.";

export const Success: Story = {
  args: {
    type: "success",
    heading: "Success status",
    headingLevel: "h1",
  },
};

export const Warning: Story = {
  args: {
    type: "warning",
    heading: "Warning status",
    headingLevel: "h1",
  },
};

export const Error: Story = {
  args: {
    type: "error",
    heading: "Error status",
    headingLevel: "h1",
  },
};

export const Info: Story = {
  args: {
    type: "info",
    heading: "Info status",
    headingLevel: "h1",
  },
};

export const Slim: Story = {
  render: (args) => (
    <>
      <Alert {...args} type="success" slim>
        {testText}
      </Alert>
      <Alert {...args} type="warning" slim>
        {testText}
      </Alert>
      <Alert {...args} type="error" slim>
        {testText}
      </Alert>
      <Alert {...args} type="info" slim>
        {testText}
      </Alert>
    </>
  ),
  args: {
    headingLevel: "h1",
  },
};
