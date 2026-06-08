import type { Meta, StoryObj } from "@storybook/react-vite";
import { Textarea } from "./TextArea";
import { type TextareaProps } from "@trussworks/react-uswds";
import { Label } from "../Label/Label";
import docs from "./TextArea.docs.mdx";

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
      page: docs,
    },
  },
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
