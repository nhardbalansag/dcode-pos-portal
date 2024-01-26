import React from 'react'

import {
    IconTrendUp,
    IconTrendDown
} from '../icons/_index'

export default function DashboardTotalCardContent({isPositive = true}) {
    
  return (
    <div>
        <div className='flex justify-start items-center'>
            <div className="avatar placeholder mr-3">
                <div className="bg-gray-200 text-dark-content rounded-full w-8">
                    <span>SY</span>
                </div>
            </div> 
            <div>
                <p className='capitalize'>test title</p>
            </div>
        </div>

        <div className='mt-3'>
            <div>
                <p className='capitalize text-3xl font-bold text-dark'>₱ 100.00</p>
            </div>
            <div className='flex justify-start items-center'>
                {
                    isPositive ? <IconTrendUp/> : <IconTrendDown/>
                }
                
                <p className={`text-${isPositive ? 'green' : 'red'}-500 font-bold`}>50%</p>
                <p className='text-gray-400'>From last month</p>
            </div>
        </div>
    </div>
  )
}
