import type { Meta, StoryObj } from "@storybook/react-vite";
import { Alert } from "./Alert";
import docs from "./Alert.docs.mdx";

const meta: Meta<typeof Alert> = {
  title: "Components/Alert",
  component: Alert,
  render: (args) => <Alert {...args}>{testText}</Alert>,
  parameters: {
    docs: {
      page: docs,
    },
  },
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
