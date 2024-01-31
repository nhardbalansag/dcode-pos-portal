import React from 'react'

import { Link } from "react-router-dom";

import {
  CardComp,
  ButtonComp,
  DonutChart,
  DaisyTable
} from '../../../components/_index'

import {
  IconTableList,
  IconMinusSwapOff,
  IconTrashCan,
  IconEdit
} from '../../../icons/_index'

const Categories = () => {

  const _title = () =>{
    return(
      <div className='flex flex-row items-center justify-between w-full'>
        <div className='flex flex-row items-center'>
          <IconTableList/> 
          <p className='ml-2'>Category List</p>
        </div>
        <div>
          <Link to={'add-category'}>
            <ButtonComp title={<><IconMinusSwapOff classname='text-white'/> <p className='text-white'>Add Category</p></>} className='bg-green-800'/>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div>
        <div className='my-5 shadow-lg'>
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

export default Categories
