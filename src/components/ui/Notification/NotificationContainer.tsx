import * as React from 'react'
import tw from 'twin.macro'
import Portal from '@reach/portal'

const NotificationContainer: React.FC = ({ children }) => {
  return (
    <Portal>
      <div css={tw`absolute bottom-0 right-0 mb-1 mr-1`}>{children}</div>
    </Portal>
  )
}

export default NotificationContainer
