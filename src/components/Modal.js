import ReactDom from 'react-dom' //inline & conditional styles
import './modal.css'

export default function Modal({ children, handleClose, isSalesModel }) {
  return (
    ReactDom.createPortal((<div className='modal-backdrop'>
      <div className='modal'
        style={{
          border: "4px solid",
          borderColor: isSalesModel ? "#ff4500" : "blue",
          textAlign: "center"
        }}>
        {children}
        <button onClick={handleClose}
          className={isSalesModel ? "sales-btn" : ""}>Close</button>
      </div>
    </div>), document.body)
  )
}

