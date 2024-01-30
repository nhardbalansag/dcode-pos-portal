import React from 'react'

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

const Products = () => {
  return (
    <div>
        <div className="flex flex-row justify-between mx-auto my-5 lg:mx-0">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-dark">Products</h2>
            <p className="mt-6 text-lg leading-8 text-gray-400">Create and manage products</p>
          </div>
          <div>
            <ButtonComp title={<IconMinusSwapOff classname='text-white'/>} className='bg-green-800'/>
          </div>
        </div>
        <div className='p-3 my-5 shadow-lg'>
          <CardComp 
            width='w-full' 
            title={<><IconTableList/> <p>Product List</p></>} 
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

export default Products
