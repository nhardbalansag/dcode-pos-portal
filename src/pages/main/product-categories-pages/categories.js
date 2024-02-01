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

const Categories = () => {

  return (
    <div>
        <div className='my-5 shadow-lg'>
          <CardComp 
            width='w-full' 
            title={
              <PageHeaderTitle 
              icon={<IconTableList/> }
              title='Category List'
              rightComponent={true}
              path='add-category'
              buttonTitle='Add Category'
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

export default Categories
