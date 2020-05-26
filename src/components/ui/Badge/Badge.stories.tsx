import * as React from 'react'
import tw from 'twin.macro'
import StoryDecorator from 'utils/storybook/StoryDecorator'
import Badge from './Badge'

export default {
  title: 'Badge',
  component: Badge,
  decorators: [StoryDecorator]
}

export const BasicExample = () => {
  return (
    <div>
      <Badge css={tw`mr-2`}>badge</Badge>
      <Badge variant="green" css={tw`mr-2`}>
        badge
      </Badge>
      <Badge variant="red" css={tw`mr-2`}>
        badge
      </Badge>
      <Badge variant="teal" css={tw`mr-2`}>
        badge
      </Badge>
      <Badge variant="blue" css={tw`mr-2`}>
        badge
      </Badge>
      <Badge variant="yellow" css={tw`mr-2`}>
        badge
      </Badge>
    </div>
  )
}
