import * as React from 'react'
import {} from '@emotion/core'
import tw from 'twin.macro'
import { action } from '@storybook/addon-actions'
import { Button } from './Button'

import { buttonStyle, buttonVariantDefault, buttonSizeMedium } from './styles'

export default {
  title: 'Components/Button',
  component: Button
}

export const BasicExample = () => (
  <div>
    <Button type="button" css={[tw`inline-block mr-2`]} onClick={action('clicked')}>
      Default Button
    </Button>
    <Button type="button" variant="primary" css={[tw`inline-block mr-2`]} onClick={action('clicked')}>
      Primary Button
    </Button>
    <Button type="button" variant="success" css={[tw`inline-block mr-2`]} onClick={action('clicked')}>
      Success Button
    </Button>
    <Button type="button" variant="warning" css={[tw`inline-block mr-2`]} onClick={action('clicked')}>
      Warning Button
    </Button>
    <Button type="button" variant="danger" onClick={action('clicked')}>
      Danger Button
    </Button>
  </div>
)

export const WithAnchorLink = () => (
  <div>
    <a
      css={[buttonStyle, buttonVariantDefault, buttonSizeMedium, tw`inline-block mr-4`]}
      href="https://www.youtube.com/watch?v=Lb9S7heXwSU"
    >
      Hello Button
    </a>
  </div>
)
