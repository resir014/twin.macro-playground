import * as React from 'react'
import { cardBase } from './styles'

export interface CardProps {
  className?: string
  style?: React.CSSProperties
}

const Card: React.FC<CardProps> = ({ className, style, children }) => {
  return (
    <div className={className} style={style} css={[cardBase]}>
      {children}
    </div>
  )
}

export default Card
