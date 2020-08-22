import * as React from 'react'
import {} from '@emotion/core'
import { inputBase, inputDefaultState, inputErrorState } from './styles'

export interface InputTextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  isFullWidth?: boolean
  errors?: boolean
}

const InputTextarea: React.FC<InputTextareaProps> = ({ errors, rows = 3, ...rest }) => {
  return <textarea css={[inputBase, errors ? inputErrorState : inputDefaultState]} rows={rows} {...rest} />
}

export default InputTextarea
