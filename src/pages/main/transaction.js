import React from 'react'

import { Link } from "react-router-dom";

import {
  CardComp,
  ButtonComp,
  PageHeaderTitle,
  DaisyTable,
  PageWrapper
} from '../../components/_index'

import {
  IconTableList,
  IconTrashCan,
  IconEdit
} from '../../icons/_index'

const TransactionPage = () => {

  return (
    <PageWrapper heading='Transactions' caption="Manage all store transactions">
      <div className='p-3 my-5 shadow-lg'>
        <CardComp 
          width='w-full' 
          title={
            <PageHeaderTitle 
            icon={<IconTableList/> }
            title='Transaction List'
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
    </PageWrapper>
  )
}

export default TransactionPage
