import * as React from 'react'
import tw from 'twin.macro'
import StoryDecorator from 'utils/storybook/StoryDecorator'

import Card from './Card'

export default {
  title: 'Card',
  component: Card,
  decorators: [StoryDecorator]
}

export const BasicExample = () => {
  return (
    <div>
      <Card css={tw`p-4`}>henlo</Card>
    </div>
  )
}
