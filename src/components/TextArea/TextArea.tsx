import { Textarea  as UswdsTextarea} from "@trussworks/react-uswds";
import {type TextareaProps} from "@trussworks/react-uswds";

export const Textarea = (props: TextareaProps) => {
  return (
    <UswdsTextarea {...props}></UswdsTextarea>
  )
}