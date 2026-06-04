import { Label as UswdsLabel, type LabelProps} from "@trussworks/react-uswds";

export const Label = ({children, htmlFor}: LabelProps) => {
  return (
    <UswdsLabel children={children} htmlFor={htmlFor}></UswdsLabel>
  )
}