import * as React from 'react'
import {} from '@emotion/core'
import tw from 'twin.macro'
import { DecoratorFn } from '@storybook/react'

import 'tailwindcss/dist/base.css'

const StoryDecorator: DecoratorFn = storyFn => <div css={tw`p-4 bg-gray-100 h-full min-h-screen`}>{storyFn()}</div>

export default StoryDecorator
