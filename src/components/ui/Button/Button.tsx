/* eslint-disable react/button-has-type */
import * as React from 'react'
import { ButtonSizes, ButtonVariants } from './types'
import {
  buttonStyle,
  buttonSizeSmall,
  buttonSizeLarge,
  buttonSizeMedium,
  buttonVariantPrimary,
  buttonVariantSuccess,
  buttonVariantWarning,
  buttonVariantDanger,
  buttonVariantDefault
} from './styles'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  style?: React.CSSProperties
  variant?: ButtonVariants
  size?: ButtonSizes
}

export const Button: React.FC<ButtonProps> = ({ variant, size, children, className, style, ...rest }) => {
  const buttonVariants = () => {
    switch (variant) {
      case 'primary': {
        return buttonVariantPrimary
      }
      case 'success': {
        return buttonVariantSuccess
      }
      case 'warning': {
        return buttonVariantWarning
      }
      case 'danger': {
        return buttonVariantDanger
      }
      default: {
        return buttonVariantDefault
      }
    }
  }

  const buttonSizes = () => {
    switch (size) {
      case 'sm': {
        return buttonSizeSmall
      }
      case 'lg': {
        return buttonSizeLarge
      }
      default: {
        return buttonSizeMedium
      }
    }
  }

  return (
    <button css={[buttonStyle, buttonVariants(), buttonSizes()]} className={className} style={style} {...rest}>
      {children}
    </button>
  )
}

Button.defaultProps = {
  variant: 'default',
  size: 'md'
}
