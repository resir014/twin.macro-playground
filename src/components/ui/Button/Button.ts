/* eslint-disable react/button-has-type */
import * as React from 'react'
import { ButtonSizes, ButtonVariants } from './types'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariants
  size?: ButtonSizes
}
