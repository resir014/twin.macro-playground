import * as React from 'react'
import tw from 'twin.macro'

import Card from './Card'

export default {
  title: 'Components/Card',
  component: Card
}

export const BasicExample = () => {
  return (
    <div>
      <Card css={tw`p-4`}>henlo</Card>
    </div>
  )
}
