import type { Meta, StoryObj } from "@storybook/react-vite";
import { Label } from "./Label";
import docs from "./Label.docs.mdx";

const meta: Meta<typeof Label> = {
  title: "Components/Label",
  component: Label,
  parameters: {
    docs: {
      page: docs,
    },
  },
  argTypes: {
    htmlFor: {
      control: "text",
      description: "Unique identifier for the text input field",
    },
    children: {
      control: "text",
      description: "Label text displayed to the user",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Label>;

export const Default: Story = {
  args: {
    htmlFor: "input-type-text",
    children: "Text input label",
  },
};
