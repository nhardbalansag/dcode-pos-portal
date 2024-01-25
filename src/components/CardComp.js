import React from 'react'

export default function CardComp({children, title = "", titleBadge = null, width = "p-8 m-5 w-96 shadow-xl"}) {
  return (
    <div className={`card ${width} bg-base-100 `}>
        <div className="card-body">
          {
            title
            ?
              <h2 className="card-title">
                  {title}
                  {
                      titleBadge 
                      ? <div className="badge badge-secondary">{titleBadge}</div>
                      : <></>
                  }
              </h2>
            : <></>
          }
          {children}
        </div>
    </div>
  )
}
