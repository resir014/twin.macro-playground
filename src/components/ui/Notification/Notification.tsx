import * as React from 'react'
import tw from 'twin.macro'
import { css } from '@emotion/core'
import Alert from '@reach/alert'

const Notification: React.FC = ({ children }) => {
  return (
    <Alert
      css={[
        tw`p-2 mb-2 last:mb-0 bg-red-200 text-gray-900 rounded-md`,
        css`
          width: 300px;
        `
      ]}
    >
      {children}
    </Alert>
  )
}

export default Notification
