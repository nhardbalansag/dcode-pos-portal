import React from 'react'

export default function ButtonComp({onPress = () => console.log("hello world") , title = "button", className = "btn-primary"}) {
  return (
    <button onClick={onPress} className={`btn btn-active ${className} capitalize`}>{title}</button>
  )
}
