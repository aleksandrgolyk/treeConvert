import React, {useState} from 'react'
import {createPortal} from 'react-dom'

export const FunctionalIFrameComponent = ({children, title, ...props}) => {
  const [contentRef, setContentRef] = useState(null)
  const mountNode = contentRef?.contentWindow?.document?.body

  return (
      <iframe style={{boxSizing:'border-box', margin:'0'}} title={title} {...props} ref={setContentRef}>
        {mountNode && createPortal(children, mountNode)}
      </iframe>
  )
}
