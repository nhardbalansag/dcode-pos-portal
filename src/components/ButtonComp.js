import React from 'react'

export default function ButtonComp({title = "button", className = "btn-primary"}) {
  return (
    <button className={`btn btn-active ${className}`}>{title}</button>
  )
}
