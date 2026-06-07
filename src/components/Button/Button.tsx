import {
  Button as UswdsButton,
  type ButtonProps,
} from "@trussworks/react-uswds";

type ButtonVariant =
  | "default"
  | "secondary"
  | "accent-cool"
  | "accent-warm"
  | "base"
  | "outline";

type CustomButtonProps = {
  variant?: ButtonVariant;
};

type TotalButtonProps = ButtonProps & CustomButtonProps;

export const Button = (props: TotalButtonProps) => {
  return (
    <UswdsButton
      secondary={props.variant === "secondary"}
      accentStyle={
        props.variant === "accent-cool"
          ? "cool"
          : props.variant === "accent-warm"
            ? "warm"
            : undefined
      }
      base={props.variant === "base"}
      outline={props.variant === "outline"}
      {...props}
    >
      {props.children}
    </UswdsButton>
  );
};

export default Button;
