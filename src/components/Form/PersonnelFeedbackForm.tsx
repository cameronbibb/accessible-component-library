import { Form } from "./Form";
import { TextInput } from "../TextInput/TextInput";
import { Label } from "../Label/Label";
import Button from "../Button/Button";
import { Textarea } from "../TextArea/TextArea";
import { Fieldset, Select } from "@trussworks/react-uswds";
import { states } from "../../data/states";
import { useState } from "react";
import { Alert } from "../Alert/Alert";

export const PersonnelFeedbackForm = () => {
  const INITIAL_FORM_STATE = {
    firstName: "",
    lastName: "",
    agency: "",
    street: "",
    city: "",
    state: "",
    zip: "",
    phone: "",
    email: "",
    comments: "",
  };

  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState(INITIAL_FORM_STATE);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.SubmitEvent) => {
    e.preventDefault();
    console.log(form);
    setSubmitted(true);
  };

  const clearForm = () => {
    setForm(INITIAL_FORM_STATE);
  };

  return (
    <>
      {submitted && (
        <Alert type="success" heading="Form submitted" headingLevel="h1">
          Your feedback has been received.
        </Alert>
      )}
      {!submitted && (
        <Form onSubmit={handleSubmit}>
          <Fieldset legend="Name" legendStyle="large">
            <div>
              <Label htmlFor="first-name" requiredMarker>
                First Name
              </Label>
              <TextInput
                id="first-name"
                name="firstName"
                type="text"
                value={form.firstName}
                onChange={handleChange}
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
                value={form.lastName}
                onChange={handleChange}
                required
              ></TextInput>
            </div>
          </Fieldset>
          <Fieldset
            legend="Company Name"
            legendStyle="large"
            className="margin-top-4"
          >
            <div>
              <Label htmlFor="company-agency-name">
                Company Name or State Agency
              </Label>
              <TextInput
                id="company-agency-name"
                name="agency"
                type="text"
                value={form.agency}
                onChange={handleChange}
              ></TextInput>
            </div>
          </Fieldset>
          <Fieldset
            legend="Contact"
            legendStyle="large"
            className="margin-top-4"
          >
            <div>
              <Label htmlFor="street">Street Address</Label>
              <TextInput
                id="street"
                name="street"
                type="text"
                value={form.street}
                onChange={handleChange}
              ></TextInput>
            </div>
            <div>
              <Label htmlFor="city">City</Label>
              <TextInput
                id="city"
                name="city"
                type="text"
                value={form.city}
                onChange={handleChange}
              ></TextInput>
            </div>
            <div className="grid-row grid-gap">
              <div className="tablet:grid-col-8">
                <Label htmlFor="state">State</Label>
                <Select id="state" name="state" value={form.state} onChange={handleChange}>
                  <option value="">Select a state</option>
                  {states.map((state) => (
                    <option key={state.abbreviation} value={state.abbreviation}>
                      {state.name}
                    </option>
                  ))}
                </Select>
              </div>
              <div className="tablet:grid-col-4">
                <Label htmlFor="zip">Zip Code</Label>
                <TextInput
                  id="zip"
                  name="zip"
                  type="text"
                  value={form.zip}
                  onChange={handleChange}
                ></TextInput>
              </div>
            </div>
            <div>
              <Label htmlFor="phone-number">Phone Number</Label>
              <TextInput
                id="phone-number"
                name="phone"
                type="tel"
                value={form.phone}
                onChange={handleChange}
              ></TextInput>
            </div>
            <div>
              <Label htmlFor="email" requiredMarker>
                Email
              </Label>
              <TextInput
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
              ></TextInput>
            </div>
          </Fieldset>
          <Fieldset
            legend="Comments"
            legendStyle="large"
            className="margin-top-4"
          >
            <div>
              <Label htmlFor="feedback-comments" requiredMarker>
                Comments
              </Label>
              <Textarea
                id="feedback-comments"
                name="comments"
                value={form.comments}
                onChange={handleChange}
              />
            </div>
          </Fieldset>
          <div className="margin-top-2">
            <Button type="submit">Submit</Button>
            <Button variant="outline" type="button" onClick={clearForm}>
              Cancel
            </Button>
          </div>
        </Form>
      )}
    </>
  );
};
