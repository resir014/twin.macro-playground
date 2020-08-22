import * as React from 'react'
import {} from '@emotion/core'
import { inputMessageBase, inputMessageErrorState } from './styles'

export interface InputMessageProps extends React.HTMLAttributes<HTMLSpanElement> {
  errors?: boolean
}

const InputMessage: React.FC<InputMessageProps> = ({ children, errors }) => {
  return <span css={[inputMessageBase, errors && inputMessageErrorState]}>{children}</span>
}

export default InputMessage
