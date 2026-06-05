import type { Meta, StoryObj } from '@storybook/react-vite'
import { TextInput } from './TextInput'
import { Label } from '../Label/Label'

const meta: Meta<typeof TextInput> = {
  title: 'Components/Text Input',
  component: TextInput,
  render: (args) => (
    <div>
      <Label htmlFor={args.id}>Text input label</Label>
      <TextInput {...args} />
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
  tags: ['autodocs'],
  argTypes: {
    id: {
      control: 'text',
      description: 'Unique identifier for the input element',
    },
    name: {
      control: 'text',
      description: 'Name of the input, used when submitting a form',
    },
    type: {
      control: 'select',
      options: ['text', 'email', 'number', 'password', 'search', 'tel', 'url'],
      description: 'HTML input type',
    },
  },

}

export default meta
type Story = StoryObj<typeof TextInput>

export const Basic: Story = {
  args: {
    id: 'input-type-text',
    name: 'input-type-text',
    type: 'text',
  },
}

export const WithDefaultValue: Story = {
  args: {
    ...Basic.args,
    defaultValue: "Change me",
  },
}

export const WithPlaceholder: Story = {
  args: {
    ...Basic.args,
    placeholder: "Enter value...",
  },
}

export const Error: Story = {
  args: {
    ...Basic.args,
    validationStatus: "error",
  },
}

export const Success: Story = {
  args: {
    ...Basic.args,
    validationStatus: "success",
  },
}

export const Readonly: Story = {
  args: {
    ...Basic.args,
    readOnly: true,
  },
}