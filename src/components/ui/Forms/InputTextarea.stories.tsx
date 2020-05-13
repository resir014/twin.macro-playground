import * as React from 'react'
import {} from '@emotion/core'
import tw from 'twin.macro'
import StoryDecorator from 'utils/storybook/StoryDecorator'
import { InputTextarea } from '.'
import InputLabel from './InputLabel'

export default {
  title: 'Forms/InputTextarea',
  component: InputTextarea,
  decorators: [StoryDecorator]
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
