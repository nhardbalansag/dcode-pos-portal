import React from 'react'
import { useState, useEffect } from 'react';

import { Link } from "react-router-dom";

import {
  IconMinusSwapOff,
  IconPlusSwapOn
} from '../icons/_index'

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
                      <IconPlusSwapOn onclick={() => triggerToggle()}/>
                      <IconMinusSwapOff onclick={() => triggerToggle()}/>
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