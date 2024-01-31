import React from 'react'

import { Link } from "react-router-dom";

import {
  CardComp,
  ButtonComp,
  DonutChart,
  DaisyTable
} from '../../components/_index'

import {
  IconTableList,
  IconMinusSwapOff,
  IconTrashCan,
  IconEdit
} from '../../icons/_index'

const TransactionPage = () => {

  const _title = () =>{
    return(
      <div className='flex flex-row items-center justify-between w-full'>
        <div className='flex flex-row items-center'>
          <IconTableList/> 
          <p className='ml-2'>Transaction List</p>
        </div>
      </div>
    )
  }

  return (
    <div>
      <div className="flex flex-row justify-between mx-auto my-5 lg:mx-0">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-dark">Transactions</h2>
            <p className="mt-6 text-lg leading-8 text-gray-400">Manage all store transactions</p>
          </div>
        </div>
        
        <div className='p-3 my-5 shadow-lg'>
          <CardComp 
            width='w-full' 
            title={_title()} 
            children={
              <DaisyTable 
                enableButton={true} 
                actionContent={
                  <>
                    <ButtonComp title={<IconEdit classname='text-white'/>} className='bg-blue-700'/>
                    <ButtonComp title={<IconTrashCan classname='text-white'/>} className='bg-red-700 '/>
                  </>
                }/>
              }
          />
        </div>
    </div>
  )
}

export default TransactionPage
