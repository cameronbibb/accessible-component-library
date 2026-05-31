import { Button as UswdsButton } from '@trussworks/react-uswds'

type ButtonVariant = 'default' | 'secondary' | 'accent-cool' | 'accent-warm' | 'base' | 'outline'

type ButtonProps = {
  label: string
  variant?: ButtonVariant
  disabled?: boolean
  onClick?: () => void
  big?: boolean
  unstyled?: boolean
}

export const Button = ({
  label,
  variant,
  disabled = false,
  onClick,
  big = false,
  unstyled = false,
}: ButtonProps) => {
  return (
    <UswdsButton
      type="button"
      secondary={variant === 'secondary'}
      accentStyle={
        variant === 'accent-cool' ? 'cool' :
        variant === 'accent-warm' ? 'warm' :
        undefined
      }
      base={variant === 'base'}
      outline={variant === 'outline'}
      disabled={disabled}
      onClick={onClick}
      big={big}
      unstyled={unstyled}
    >
      {label}
    </UswdsButton>
  )
}

export default Button