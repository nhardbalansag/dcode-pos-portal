import React from 'react'

export default function CardComp({children, title = "", titleBadge = null}) {
  return (
    <div className='p-8 m-5 card w-96 bg-base-100 shadow-xl'>
        <div className="card-body">
            <h2 className="card-title">
                {title}
                {
                    titleBadge 
                    ? <div className="badge badge-secondary">{titleBadge}</div>
                    : <></>
                }
            </h2>
            {children}
        </div>
    </div>
  )
}
