/* eslint-disable react/button-has-type */
import * as React from 'react'
import {} from '@emotion/core'
import tw from 'twin.macro'
import { ButtonSizes, ButtonVariants } from './types'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariants
  size?: ButtonSizes
}

export const buttonStyle = tw`rounded font-semibold focus:outline-none`

export const buttonVariantDefault = tw`bg-gray-200 text-gray-800 hover:bg-gray-300`
export const buttonVariantPrimary = tw`bg-blue-500 text-white hover:bg-blue-600`
export const buttonVariantSuccess = tw`bg-green-500 text-white hover:bg-green-600`
export const buttonVariantWarning = tw`bg-yellow-500 text-gray-800 hover:bg-yellow-600`
export const buttonVariantDanger = tw`bg-red-500 text-white hover:bg-red-600`

export const buttonSizeSmall = tw`py-1 px-2`
export const buttonSizeMedium = tw`py-2 px-4`
export const buttonSizeLarge = tw`py-3 px-6`
