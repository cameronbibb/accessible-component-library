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
  label: string;
  variant?: ButtonVariant;
};

type TotalButtonProps = ButtonProps & CustomButtonProps;

export const Button = ({
  label,
  variant,
  disabled = false,
  onClick,
  size,
  unstyled = false,
}: TotalButtonProps) => {
  return (
    <UswdsButton
      type="button"
      secondary={variant === "secondary"}
      accentStyle={
        variant === "accent-cool"
          ? "cool"
          : variant === "accent-warm"
            ? "warm"
            : undefined
      }
      base={variant === "base"}
      outline={variant === "outline"}
      disabled={disabled}
      onClick={onClick}
      size={size}
      unstyled={unstyled}
    >
      {label}
    </UswdsButton>
  );
};

export default Button;
