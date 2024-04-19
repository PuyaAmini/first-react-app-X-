import React from 'react'
import ReactDom from 'react-dom'

import './modal.css'
export default function Modal({children , handleClose}) {
  return (
    ReactDom.createPortal((<div className='modal-backdrop'>
      <div className='modal'>
       {children}
       <button onClick={ handleClose}>Close</button>
      </div>
    </div>), document.body)
  )
}

