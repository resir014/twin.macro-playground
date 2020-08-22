/* eslint-disable jsx-a11y/label-has-associated-control */
import * as React from 'react'
import {} from '@emotion/core'
import { inputLabelBase } from './styles'

const InputLabel: React.FC<React.LabelHTMLAttributes<HTMLLabelElement>> = ({ ...rest }) => {
  return <label css={[inputLabelBase]} {...rest} />
}

export default InputLabel
