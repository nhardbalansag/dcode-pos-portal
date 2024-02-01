import React from 'react'

export default function PageWrapper({children, heading = 'heading here', caption = 'caption here'}) {
  return (
    <div>
        <div className="flex flex-row justify-between mx-auto my-5 lg:mx-0">
          <div>
            <h2 className="text-3xl font-bold tracking-tight capitalize text-dark">{heading}</h2>
            <p className="mt-6 text-lg leading-8 text-gray-400 capitalize">{caption}</p>
          </div>
        </div>
        {children}
    </div>
  )
}
