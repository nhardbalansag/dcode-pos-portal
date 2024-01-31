import React from 'react'

export default function IconMinusSwapOff({onclick, classname = 'text-black'}) {
  return (
    <svg onClick={onclick} className={`swap-off w-6 h-6 ${classname}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
    </svg>
  )
}
