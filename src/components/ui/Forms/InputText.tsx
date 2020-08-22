import * as React from 'react'
import {} from '@emotion/core'
import { inputBase, inputDefaultState, inputErrorState } from './styles'

export interface InputTextProps extends React.InputHTMLAttributes<HTMLInputElement> {
  isFullWidth?: boolean
  errors?: boolean
}

const InputText: React.FC<InputTextProps> = ({ errors, ...rest }) => {
  return <input css={[inputBase, errors ? inputErrorState : inputDefaultState]} {...rest} />
}

export default InputText
