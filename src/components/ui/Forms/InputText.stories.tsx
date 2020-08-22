import * as React from 'react'
import {} from '@emotion/core'
import tw from 'twin.macro'
import { InputText } from '.'
import InputLabel from './InputLabel'
import InputMessage from './InputMessage'

export default {
  title: 'Components/Forms/InputText',
  component: InputText
}

export const BasicExample = () => {
  return (
    <div>
      <div css={tw`mb-3 last:mb-0`}>
        <InputLabel>Full Name</InputLabel>
        <InputText placeholder="Enter your name" css={tw`block w-full`} />
      </div>
      <div css={tw`mb-3 last:mb-0`}>
        <InputLabel>Email address</InputLabel>
        <InputText errors placeholder="Example: me@example.com" css={tw`block w-full`} />
        <InputMessage errors>Please enter your email.</InputMessage>
      </div>
    </div>
  )
}
