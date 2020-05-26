/* eslint-disable react/no-array-index-key */
import * as React from 'react'
import StoryDecorator from 'utils/storybook/StoryDecorator'
import Notification from './Notification'
import NotificationContainer from './NotificationContainer'

export default {
  title: 'Notification',
  decorators: [StoryDecorator]
}

export const BasicExample = () => {
  const [messages, setMessages] = React.useState<string[]>([])

  return (
    <div>
      <button
        type="button"
        onClick={() => {
          setMessages(prevMessages => prevMessages.concat([`Message #${prevMessages.length + 1}`]))
          setTimeout(() => {
            setMessages(prevMessages => prevMessages.slice(1))
          }, 5000)
        }}
      >
        Add a message
      </button>
      <NotificationContainer>
        {messages.map((message, index) => (
          <Notification key={index}>{message}</Notification>
        ))}
      </NotificationContainer>
    </div>
  )
}
