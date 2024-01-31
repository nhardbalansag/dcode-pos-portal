import React from 'react'

import {
    Outlet,
    useLocation
} from "react-router-dom";

import {
    IconMinusSwapOff,
    IconCancel
} from '../../../icons/_index'

import {
    ButtonComp
} from '../../../components/_index'

const CrewIndex = () => {
  return (
    <div>
        <div className="flex flex-row justify-between mx-auto my-5 lg:mx-0">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-dark">Crew</h2>
            <p className="mt-6 text-lg leading-8 text-gray-400">Create and manage crew</p>
          </div>
        </div>
        <Outlet />
    </div>
  )
}

export default CrewIndex
