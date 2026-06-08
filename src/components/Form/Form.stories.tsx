import type { Meta, StoryObj } from "@storybook/react-vite";
import { Form } from "./Form";
import { PersonnelFeedbackForm } from "./PersonnelFeedbackForm";
import docs from "./PersonnelFeedbackForm.docs.mdx";

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
      page: docs,
    },
  },
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
