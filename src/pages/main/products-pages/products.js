import React from 'react'

import { Link } from "react-router-dom";

import {
  CardComp,
  ButtonComp,
  PageHeaderTitle,
  DaisyTable
} from '../../../components/_index'

import {
  IconTableList,
  IconTrashCan,
  IconEdit
} from '../../../icons/_index'

const Products = () => {

  return (
    <div>
        <div className='p-3 my-5 shadow-lg'>
          <CardComp 
            width='w-full' 
            title={
              <PageHeaderTitle 
              icon={<IconTableList/> }
              title='Product List'
              rightComponent={true}
              path='add-product'
              buttonTitle='Add Product'
              />
            } 
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
