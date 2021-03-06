import * as React from 'react'
import {} from '@emotion/core'
import tw from 'twin.macro'
import { InputTextarea } from '.'
import InputLabel from './InputLabel'

export default {
  title: 'Components/Forms/InputTextarea',
  component: InputTextarea
}

export const BasicExample = () => {
  return (
    <div>
      <div css={tw`mb-3 last:mb-0`}>
        <InputLabel>Address</InputLabel>
        <InputTextarea css={tw`block w-full`} />
      </div>
    </div>
  )
}
