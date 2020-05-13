import * as React from 'react'
import {} from '@emotion/core'
import { inputBase, inputDefaultState, inputErrorState } from './styled'

export interface InputTextProps extends React.InputHTMLAttributes<HTMLInputElement> {
  isFullWidth?: boolean
  errors?: boolean
}

const InputText: React.FC<InputTextProps> = ({ errors, css, ...rest }) => {
  return <input css={[inputBase, errors ? inputErrorState : inputDefaultState, css as any]} {...rest} />
}

export default InputText
