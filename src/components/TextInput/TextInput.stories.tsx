import type { Meta, StoryObj } from "@storybook/react-vite";
import { TextInput } from "./TextInput";
import { type TextInputProps } from "@trussworks/react-uswds";
import { Label } from "../Label/Label";
import docs from "./TextInput.docs.mdx";

type TextInputStoryArgs = TextInputProps & { label?: string };

const meta: Meta<TextInputStoryArgs> = {
  title: "Components/Text Input",
  component: TextInput,
  render: ({ label, ...args }) => (
    <div>
      <Label htmlFor={args.id}>{label}</Label>
      <TextInput {...args} />
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
    type: {
      type: { name: "string", required: true },
      control: "select",
      options: ["text", "email", "number", "password", "search", "tel", "url"],
      description: "HTML input type",
    },
    className: {
      control: "text",
      type: { name: "string" },
    },
    validationStatus: {
      type: { name: "string" },
      options: ["error", "success"],
      control: { type: "radio" },
    },
    inputSize: {
      type: { name: "string" },
      options: ["small", "medium", "large"],
      control: { type: "radio" },
    },
    inputRef: {},
    inputProps: {},
  },
};

export default meta;
type Story = StoryObj<TextInputStoryArgs>;

export const Basic: Story = {
  args: {
    label: "Text input label",
    id: "input-type-text",
    type: "text",
  },
};

export const WithDefaultValue: Story = {
  args: {
    ...Basic.args,
    defaultValue: "Change me",
  },
};

export const WithPlaceholder: Story = {
  args: {
    ...Basic.args,
    placeholder: "Enter value...",
  },
};

export const Error: Story = {
  args: {
    ...Basic.args,
    validationStatus: "error",
  },
  render: ({ label, ...args }) => (
    <div>
      <Label htmlFor={args.id}>{label}</Label>
      <TextInput {...args} />
    </div>
  ),
};

export const Success: Story = {
  args: {
    ...Basic.args,
    validationStatus: "success",
  },
};

export const Readonly: Story = {
  args: {
    ...Basic.args,
    readOnly: true,
  },
};
