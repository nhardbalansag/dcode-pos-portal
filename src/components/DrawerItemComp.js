import React from 'react'
import { useState, useEffect } from 'react';

import { Link } from "react-router-dom";

export default function DrawerItemComp({itemTitle = "title 1", route = '/', innerRoutes = []}) {
  
  const [getToggle, setToggle] = useState(false)

  const triggerToggle = () => {
    setToggle(!getToggle)
  }

  const _link = (route, itemTitle) =>{
    return(
      <Link to={route}>
          <p className='capitalize'>
              {itemTitle}
          </p>
      </Link>
    )
  }

  useEffect(() =>{
    console.log(getToggle)
  }, [getToggle])
  
  return (
    <li>
      {
        innerRoutes.length
        ?
            <div>
              <div className='flex flex-col'>
                <div className='flex w-56 justify-between'>
                  <div>
                    <p className='capitalize'>{itemTitle}</p>
                  </div>
                  <div>
                    <label className="swap swap-rotate" >
                      <input type="checkbox" />
                      <svg onClick={() => triggerToggle()} className='swap-off w-6 h-6' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                      </svg>

                      <svg onClick={() => triggerToggle()} className='swap-on w-6 h-6' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
                      </svg>
                    </label>
                  </div>
                </div>
                {
                  getToggle
                  ?
                    <div className='pl-4'>
                        {innerRoutes.map((item, index) =>
                          <span className='mx-5' key={index}>
                            {_link(item.path, item.title)}
                          </span>
                        )}
                    </div>
                  : <></>
                }
              </div>
            </div>
        : _link(route, itemTitle)
      }
    </li>
  )
}