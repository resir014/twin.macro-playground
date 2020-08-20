import * as React from 'react'
import styled from '@emotion/styled'
import tw from 'twin.macro'

export interface AvatarProps {
  className?: string
  style?: React.CSSProperties
  src?: string
  altText?: string
  variant?: 'rounded' | 'square'
  size?: 32 | 40
}

const Root = styled('div')<Pick<AvatarProps, 'size' | 'variant'>>`
  width: ${props => props.size}px;
  height: ${props => props.size}px;
`

const Image = styled('img')<Pick<AvatarProps, 'size'>>`
  width: ${props => props.size}px;
  height: ${props => props.size}px;
`

const Avatar: React.FC<AvatarProps> = ({ className, style, src, altText, size, variant }) => {
  return (
    <Root
      css={[tw`inline-block overflow-hidden bg-gray-200`, variant === 'rounded' ? tw`rounded-full` : tw`rounded-sm`]}
      className={className}
      style={style}
      size={size}
    >
      <Image src={src} alt={altText} size={size} css={tw`object-cover`} />
    </Root>
  )
}

Avatar.defaultProps = {
  size: 40,
  variant: 'square'
}

export default Avatar
