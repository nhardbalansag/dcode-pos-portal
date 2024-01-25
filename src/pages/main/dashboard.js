import React, { useEffect, useRef } from 'react'

import {
  CardComp,
  LineChart,
  DashboardTotalCardContent
} from '../../components/_index'

const DashboardPage = () => {

  const data = [12, 19, 3, 700, 1245, 5000, 200, 100, 579, 690, 356, 60]

  const DashboardTopCardContent = (status) =>{
    return(
      <DashboardTotalCardContent isPositive={status}/>
    )
  }

  return (
    <div>
        <div className="mx-auto max-w-2xl lg:mx-0 my-5">
          <h2 className="text-3xl font-bold tracking-tight text-dark">Dashboard</h2>
          <p className="mt-6 text-lg leading-8 text-gray-400">Anim aute id magna aliqua ad ad non deserunt sunt.</p>
        </div>
        <div className="my-5 grid grid-rows-4 grid-flow-col md:justify-between justify-evenly sm:grid-rows-2 md:grid-rows-1">
          <CardComp width='w-64 border' children={DashboardTopCardContent(true)}/>
          <CardComp width='w-64 border' children={DashboardTopCardContent(false)}/>
          <CardComp width='w-64 border' children={DashboardTopCardContent(false)}/>
          <CardComp width='w-64 border' children={DashboardTopCardContent(true)}/>
        </div>
        <div className='my-5'>
          <CardComp width='w-full border' children={<LineChart data={data}/>}/>
        </div>
    </div>
  )
}

export default DashboardPage
