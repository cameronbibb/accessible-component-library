import type { Meta, StoryObj } from '@storybook/react-vite';
import { Form } from './Form';
import { TextInput } from '../TextInput/TextInput';
import { Label } from '../Label/Label';

const meta: Meta<typeof Form> = {
  title: 'Templates/PersonnelFeedbackForm',
  component: Form,
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
    onSubmit: {
      description: 'Submission handler',
    }
  },

} 

export default meta
type Story = StoryObj<typeof Form>

export const PersonnelFeedback: Story = {
    render: () => (
      <Form onSubmit={() => {}}>
        <div>
          <Label htmlFor='first-name'>First Name</Label>
          <TextInput id='first-name' name='First Name' type='text'></TextInput>
        </div>
        <div>
          <Label htmlFor='last-name'>Last Name</Label>
          <TextInput id='last-name' name='Last Name' type='text'></TextInput>
        </div>
        <div>
          <Label htmlFor='phone'>Phone Number</Label>
          <TextInput id='phone-number' name='Phone Number' type='tel'></TextInput>
        </div>
        <div>
          <Label htmlFor='email'>Email</Label>
          <TextInput id='email' name='Email' type='email'></TextInput>
        </div>
      </Form>
    )
}