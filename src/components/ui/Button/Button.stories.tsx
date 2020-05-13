import * as React from 'react'
import {} from '@emotion/core'
import tw from 'twin.macro'
import { action } from '@storybook/addon-actions'

import StoryDecorator from 'utils/storybook/StoryDecorator'
import {
  buttonStyle,
  buttonVariantDefault,
  buttonVariantPrimary,
  buttonSizeMedium,
  buttonVariantSuccess,
  buttonVariantWarning,
  buttonVariantDanger
} from './Button'

export default {
  title: 'Button',
  decorators: [StoryDecorator]
}

export const BasicExample = () => (
  <div>
    <button type="button" css={[buttonStyle, buttonVariantDefault, buttonSizeMedium, tw`inline-block mr-2`]} onClick={action('clicked')}>
      Hello Button
    </button>
    <button type="button" css={[buttonStyle, buttonVariantPrimary, buttonSizeMedium, tw`inline-block mr-2`]} onClick={action('clicked')}>
      Hello Button
    </button>
    <button type="button" css={[buttonStyle, buttonVariantSuccess, buttonSizeMedium, tw`inline-block mr-2`]} onClick={action('clicked')}>
      Hello Button
    </button>
    <button type="button" css={[buttonStyle, buttonVariantWarning, buttonSizeMedium, tw`inline-block mr-2`]} onClick={action('clicked')}>
      Hello Button
    </button>
    <button type="button" css={[buttonStyle, buttonVariantDanger, buttonSizeMedium, tw`inline-block mr-2`]} onClick={action('clicked')}>
      Hello Button
    </button>
  </div>
)

export const WithAnchorLink = () => (
  <div>
    <a css={[buttonStyle, buttonVariantDefault, buttonSizeMedium, tw`inline-block mr-4`]} href="#">
      Hello Button
    </a>
  </div>
)
