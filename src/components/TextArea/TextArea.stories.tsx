import type { Meta, StoryObj } from "@storybook/react-vite";
import { Textarea } from "./TextArea";
import { type TextareaProps } from "@trussworks/react-uswds";
import { Label } from "../Label/Label";

type TextAreaInputProps = TextareaProps & { label?: string };

const meta: Meta<TextAreaInputProps> = {
  title: "Components/Textarea",
  component: Textarea,
  render: ({ label, ...args }) => (
    <div>
      <Label htmlFor={args.id}>{label}</Label>
      <Textarea {...args} />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        component: `
## Accessibility

This input box is built on the USWDS input and satisfies the follow WCAG 2.1 AA criteria:
- Criteria 1.
- Criteria 2.
- Etc.

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
    label: {
      control: "text",
      description: "Label text displayed above the input",
    },
    id: {
      type: { name: "string", required: true },
      control: "text",
      description: "Unique identifier for the input element",
    },
    name: {
      type: { name: "string", required: true },
      control: "text",
      description: "Name of the input, used when submitting a form",
    },
    className: {
      control: "text",
      type: { name: "string" },
    },
    error: {
      type: { name: "boolean" },
      control: { type: "boolean" },
    },
    success: {
      type: { name: "boolean" },
      control: { type: "boolean" },
    },
    children: {},
    inputRef: {},
  },
};

export default meta;
type Story = StoryObj<TextAreaInputProps>;

export const Basic: Story = {
  args: {
    label: "Text input label",
    id: "input-type-text",
    name: "Comments",
  },
};
