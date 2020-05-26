import * as React from 'react'
import tw from 'twin.macro'
import { DialogOverlay, DialogContent } from '@reach/dialog'
import styled from '@emotion/styled'

export interface ModalProps {
  isOpen?: boolean
  disableOverlayClick?: boolean
  onClose?: () => void
}

const StyledDialogOverlay = styled(DialogOverlay)`
  background: hsla(0, 0%, 0%, 0.33);
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: auto;
`

const StyledDialogContent = styled(DialogContent)`
  width: 50vw;
  ${tw`bg-white p-6 relative mx-auto my-12`}
`

const Modal: React.FC<ModalProps> = ({ children, isOpen, onClose, disableOverlayClick }) => {
  return (
    <StyledDialogOverlay isOpen={isOpen} onDismiss={() => (!disableOverlayClick && onClose ? onClose() : undefined)}>
      <StyledDialogContent>
        <button
          type="button"
          onClick={onClose}
          css={tw`absolute top-0 right-0 mt-2 mr-2 p-2 hover:bg-gray-100 outline-none focus:outline-none`}
        >
          Close
        </button>
        {children}
      </StyledDialogContent>
    </StyledDialogOverlay>
  )
}

export default Modal
