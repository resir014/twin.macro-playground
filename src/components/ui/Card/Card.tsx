import * as React from 'react'
import tw from 'twin.macro'

export interface CardProps {
  className?: string
  style?: React.CSSProperties
}

const cardBase = tw`bg-white rounded-md shadow-lg`

const Card: React.FC<CardProps> = ({ className, style, children }) => {
  return (
    <div className={className} style={style} css={[cardBase]}>
      {children}
    </div>
  )
}

export default Card
