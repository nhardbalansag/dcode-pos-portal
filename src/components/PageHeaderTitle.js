import React from 'react'

import { Link } from "react-router-dom";

import {
    IconMinusSwapOff
} from '../icons/_index'

import {
    ButtonComp
} from '../components/_index'

export default function PageHeaderTitle({icon = '', title = '', rightComponent = false, path = '', buttonTitle = ''}) {
  return (
    <div className='flex flex-row items-center justify-between w-full'>
        <div className='flex flex-row items-center'>
          {icon}
          <p className='ml-2'>{title}</p>
        </div>
        {
            rightComponent
            ?
                <div>
                    <Link to={path}>
                        <ButtonComp title={<><IconMinusSwapOff classname='text-white'/> <p className='text-white'>{buttonTitle}</p></>} className='bg-green-800'/>
                    </Link>
                </div>
            : <></>
        }
    </div>
  )
}
