import { TextInput as UswdsTextInput } from "@trussworks/react-uswds";

type TextInputProps = {
  id: string,
  name: string,
  type: 'text' | 'email' | 'number' | 'password' | 'search' | 'tel' | 'url',
}

export const TextInput = ({ id, name, type }: TextInputProps) => {
  return (
    <UswdsTextInput id={id} name={name} type={type} />
  )
}