import * as React from 'react'
import { themes } from '@storybook/theming'
import { Global } from '@emotion/core'
import tw from 'twin.macro'

import 'tailwindcss/dist/base.css'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' }
}

export const decorators = [
  Story => (
    <div css={tw`h-full min-h-screen`}>
      <Global styles={tw`bg-gray-100`} />
      <Story />
    </div>
  )
]
