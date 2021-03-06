import * as React from 'react'

import Modal from './Modal'

export default {
  title: 'Components/Modal',
  component: Modal
}

export const BasicExample = () => {
  const [isOpen, setIsOpen] = React.useState(false)

  return (
    <div>
      <button type="button" onClick={() => setIsOpen(true)}>
        Open Modal
      </button>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia error minus, laborum beatae veritatis atque numquam porro
        suscipit, in corporis sunt velit esse inventore. Culpa quae ratione ex dolore est.
      </Modal>
    </div>
  )
}
