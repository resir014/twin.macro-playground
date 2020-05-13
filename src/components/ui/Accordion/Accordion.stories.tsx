import * as React from 'react'
import StoryDecorator from 'utils/storybook/StoryDecorator'
import Accordion, { AccordionContent } from './Accordion'

export default {
  title: 'Accordion',
  component: Accordion,
  decorators: [StoryDecorator]
}

const accordionItems: AccordionContent[] = [
  {
    title: 'Step 1: Do a thing',
    content: (
      <p>
        Here are some detailed instructions about doing a thing. I am very complex and probably contain a lot of content, so a user can hide
        or show me by clicking the button above.
      </p>
    )
  },
  {
    title: 'Step 2: Do another thing',
    content: (
      <p>
        Here are some detailed instructions about doing yet another thing. There are a lot of things someone might want to do, so I am only
        going to talk about doing that other thing. I&apos;ll let my fellow accordion items go into detail about even more things.
      </p>
    )
  }
]

export const BasicExample = () => {
  return <Accordion items={accordionItems} />
}
