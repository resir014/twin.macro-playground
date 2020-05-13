import * as React from 'react'
import { Accordion as ReachAccordion, AccordionItem, AccordionButton, AccordionPanel } from '@reach/accordion'
import styled from '@emotion/styled'
import tw from 'twin.macro'

export interface AccordionContent {
  title: string
  content: React.ReactNode
}

export interface AccordionProps {
  items: AccordionContent[]
}

const StyledAccordionItem = styled(AccordionItem)`
  ${tw`bg-gray-200 mb-4 last:mb-0`}
`

const StyledAccordionButton = styled(AccordionButton)`
  ${tw`block w-full px-4 py-2 text-left text-lg font-semibold`}
`

const StyledAccordionPanel = styled(AccordionPanel)`
  ${tw`px-4 py-2`}
`

const Accordion: React.FC<AccordionProps> = ({ items }) => {
  return (
    <ReachAccordion>
      {items.map(item => (
        <StyledAccordionItem>
          <h3>
            <StyledAccordionButton>{item.title}</StyledAccordionButton>
          </h3>
          <StyledAccordionPanel>{item.content}</StyledAccordionPanel>
        </StyledAccordionItem>
      ))}
    </ReachAccordion>
  )
}

export default Accordion
