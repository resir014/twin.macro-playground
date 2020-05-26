import * as React from 'react'
import { badgeBase, BadgeVariants, determineBadgeColors } from './styled'

export interface BadgeProps {
  className?: string
  style?: React.CSSProperties
  variant?: BadgeVariants
}

const Badge: React.FC<BadgeProps> = ({ className, style, children, variant = 'default' }) => {
  return (
    <span className={className} style={style} css={[badgeBase, determineBadgeColors(variant)]}>
      {children}
    </span>
  )
}

export default Badge
