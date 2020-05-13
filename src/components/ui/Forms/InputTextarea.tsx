import * as React from 'react'
import {} from '@emotion/core'
import { inputBase, inputDefaultState, inputErrorState } from './styled'

export interface InputTextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  isFullWidth?: boolean
  errors?: boolean
}

const InputTextarea: React.FC<InputTextareaProps> = ({ errors, css, rows = 3, ...rest }) => {
  return <textarea css={[inputBase, errors ? inputErrorState : inputDefaultState, css as any]} rows={rows} {...rest} />
}

export default InputTextarea
