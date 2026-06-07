import type { Meta, StoryObj } from "@storybook/react-vite";
import { Form } from "./Form";
import { PersonnelFeedbackForm } from "./PersonnelFeedbackForm";

const meta: Meta<typeof Form> = {
  title: "Templates/Personnel Feedback Form",
  component: Form,
  parameters: {
    a11y: {
      config: {
        rules: [
          {
            id: "color-contrast",
            selector: "select",
            enabled: false,
          },
        ],
      },
    },
    docs: {
      description: {
        component: `
## Accessibility

This label component is built on the USWDS label and satisfies the following WCAG 2.1 AA criteria:

**insert criteria here

## Usage guidelines

**list usage guidelines here
        `,
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    onSubmit: {
      description: "Submission handler",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Form>;

export const PersonnelFeedback: Story = {
  render: () => <PersonnelFeedbackForm />,
};
