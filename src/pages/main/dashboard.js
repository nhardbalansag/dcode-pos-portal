import React, { useEffect, useRef } from 'react'

import {
  CardComp,
  LineChart,
  DonutChart,
  DaisyTable,
  PageWrapper,
  DashboardStatusCard
} from '../../components/_index'

import {
  IconPriceTag,
  IconPushCart,
  IconReceipt,
  IconShoppingBag,
  IconStore
} from '../../icons/_index'

const DashboardPage = () => {

  const data = [12, 19, 3, 700, 1245, 5000, 200, 100, 579, 690, 356, 60]

  return (
    <PageWrapper heading='Dashboard' caption="Here's whats happening with your stores today.">
      <div className="grid grid-flow-col grid-rows-4 my-5 md:justify-between justify-evenly sm:grid-rows-2 md:grid-rows-1">
        
        <DashboardStatusCard 
        statusTitle='Total Sales' 
        statusValue='400' 
        isPositive={true} 
        value='400' 
        percentage='22' 
        icon={<IconPriceTag/>}/>

        <DashboardStatusCard 
        statusTitle='Total Orders' 
        statusValue='26K' 
        isPositive={false} 
        value='90' 
        percentage='14' 
        icon={<IconPushCart/>}/>

        <DashboardStatusCard 
        statusTitle='New Sales' 
        statusValue='8K' 
        isPositive={false} 
        value='90' 
        percentage='14' 
        icon={<IconReceipt/>}/>

        <DashboardStatusCard 
        statusTitle='Total Products' 
        statusValue='20' 
        isPositive={false} 
        value='90' 
        percentage='14' 
        icon={<IconShoppingBag classname='w-8 h-8'/>}/>

        <DashboardStatusCard 
        statusTitle='Total Stores' 
        statusValue='3' 
        isPositive={false} 
        value='90' 
        percentage='14' 
        icon={<IconStore classname='w-8 h-8'/>}/>

      </div>

      <div className='flex flex-row items-stretch my-5'>
        <CardComp titleClassname='text-2xl font-bold tracking-tight text-dark h-1/5' title={'Sales Overview'} width='w-full shadow-lg p-3'>
          <LineChart data={data}/>
        </CardComp>
        
        <div className='w-1/5 p-3 ml-3 shadow-lg'>
          <h2 className="text-2xl font-bold tracking-tight text-dark h-1/5">Ledgers</h2>
          <DonutChart/>
        </div>
      </div>
      <CardComp titleClassname='text-2xl font-bold tracking-tight text-dark h-1/5' title={'Top Sales'} width='w-full shadow-lg my-5'>
        <DaisyTable/>
      </CardComp>
    </PageWrapper>
  )
}

export default DashboardPage



