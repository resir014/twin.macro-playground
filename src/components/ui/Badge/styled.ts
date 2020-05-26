import tw from 'twin.macro'

export type BadgeVariants = 'default' | 'green' | 'teal' | 'blue' | 'yellow' | 'red'

export const badgeBase = tw`px-2 py-1 rounded-sm text-xs`
export const badgeGray = tw`bg-gray-100 text-gray-900`
export const badgeGreen = tw`bg-green-100 text-green-900`
export const badgeTeal = tw`bg-teal-100 text-teal-900`
export const badgeBlue = tw`bg-blue-100 text-blue-900`
export const badgeYellow = tw`bg-yellow-100 text-yellow-900`
export const badgeRed = tw`bg-red-100 text-red-900`

export function determineBadgeColors(variant: BadgeVariants) {
  switch (variant) {
    case 'default': {
      return badgeGray
    }
    case 'green': {
      return badgeGreen
    }
    case 'red': {
      return badgeRed
    }
    case 'teal': {
      return badgeTeal
    }
    case 'blue': {
      return badgeBlue
    }
    case 'yellow': {
      return badgeYellow
    }
    default: {
      return badgeGray
    }
  }
}
