import React from 'react'
import './modal.css'
export default function Modal({children}) {
  return (
    <div className='modal-backdrop'>
      <div className='modal'>
       {children}
      </div>
    </div>
  )
}

