import * as React from 'react'
import tw from 'twin.macro'
import Avatar from './Avatar'

export default {
  title: 'Avatar'
}

export const BasicExample = () => {
  return (
    <div>
      <div>
        <Avatar css={tw`mr-2`} size={32} variant="rounded" src="https://via.placeholder.com/64x64" altText="Custom Avatar" />
        <Avatar css={tw`mr-2`} size={32} variant="square" src="https://via.placeholder.com/64x64" altText="Custom Avatar" />
      </div>
      <div>
        <Avatar css={tw`mr-2`} variant="rounded" src="https://via.placeholder.com/96x64" altText="Custom Avatar" />
        <Avatar css={tw`mr-2`} variant="square" src="https://via.placeholder.com/64x64" altText="Custom Avatar" />
      </div>
    </div>
  )
}
