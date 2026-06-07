import type { Meta, StoryObj } from "@storybook/react-vite";
import { Form } from "./Form";
import { TextInput } from "../TextInput/TextInput";
import { Label } from "../Label/Label";
import Button from "../Button/Button";
import { Textarea } from "../TextArea/TextArea";
import { Fieldset, Select } from "@trussworks/react-uswds";

const meta: Meta<typeof Form> = {
  title: "Templates/Personnel Feedback Form",
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
  render: () => (
    <Form onSubmit={() => {}}>
      <Fieldset legend="Name" legendStyle="large">
        <div>
          <Label htmlFor="first-name" requiredMarker>
            First Name
          </Label>
          <TextInput
            id="first-name"
            name="firstName"
            type="text"
            required
          ></TextInput>
        </div>
        <div>
          <Label htmlFor="last-name" requiredMarker>
            Last Name
          </Label>
          <TextInput
            id="last-name"
            name="lastName"
            type="text"
            required
          ></TextInput>
        </div>
        <div>
          <Label htmlFor="company-agency-name">
            Company Name or State Agency
          </Label>
          <TextInput
            id="company-agency-name"
            name="agency"
            type="text"
          ></TextInput>
        </div>
      </Fieldset>
      <br />
      <Fieldset legend="Contact" legendStyle="large">
        <div>
          <Label htmlFor="street">Street Address</Label>
          <TextInput id="street" name="street" type="text"></TextInput>
        </div>
        <div className="grid-row grid-gap">
          <div className="tablet:grid-col-6">
            <Label htmlFor="city">City</Label>
            <TextInput id="city" name="city" type="text"></TextInput>
          </div>
          <div className="tablet:grid-col-3">
            <Label htmlFor="state">State</Label>
            <Select id="state" name="state">
              <option>Kentucky</option>
            </Select>
          </div>
          <div className="tablet:grid-col-3">
            <Label htmlFor="zip">Zip Code</Label>
            <TextInput id="zip" name="zip" type="text"></TextInput>
          </div>
        </div>
        <div>
          <Label htmlFor="phone-number">Phone Number</Label>
          <TextInput id="phone-number" name="phone" type="tel"></TextInput>
        </div>
        <div>
          <Label htmlFor="email" requiredMarker>
            Email
          </Label>
          <TextInput id="email" name="email" type="email"></TextInput>
        </div>
      </Fieldset>
      <br />
      <Fieldset legend="Comments" legendStyle="large">
        <div>
          <Label htmlFor="feedback-comments" requiredMarker>
            Comments
          </Label>
          <Textarea id="feedback-comments" name="comments" />
        </div>
      </Fieldset>
      <Button label="submit" />
      <Button label="cancel" variant="outline" />
    </Form>
  ),
};
