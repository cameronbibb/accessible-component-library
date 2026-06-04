import type { Meta, StoryObj } from '@storybook/react-vite'
import { Label } from './Label'

const meta: Meta<typeof Label> = {
  title: 'Components/Label',
  component: Label,
  parameters: {
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
  tags: ['autodocs'],
  argTypes: {
    htmlFor: {
      control: 'text',
      description: 'Unique identifier for the text input field',
    },
  },
}

export default meta
type Story = StoryObj<typeof Label>

export const Default: Story = {
  args: {
    htmlFor: "input-type-text",
  }
}