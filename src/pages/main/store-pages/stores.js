import React, { useEffect, useState } from 'react'
import {useSelector} from 'react-redux';
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
  IconEdit,
} from '../../../icons/_index'

import * as store from '../../../services/modules/store/store.api'

const Stores = () => {

  const data = useSelector(state => state.AuthReducer);
  const headersData = ["", "store name", "store status", "store description", "store contact number", "store address", "date created", "date updated"]

  const [getStoreTableData, setStoreTableData] = useState([])
  const [getRefresh, setRefresh] = useState(false)

  const GetAllStore = async() =>{
    await store.GetAllStore(data.StateToken).then((result) =>{
      if(result.status){
        setStoreTableData(result.data.data)
      }
    }).catch((err) =>{
      console.log(err)
    })
  }

  const UpdateToDelete = async(row) =>{

    setRefresh(true)

    const requestBody = {
      "isDeleted": 1,
      "id": row.id,
      "store_name": row.store_name,
      "store_description": row.store_description,
      "store_contact_number": row.store_contact_number,
      "store_address": row.store_address,
      "store_status": row.store_status
    }

    await store.UpdateToDelete(requestBody, data.StateToken).then((result) =>{
      if(result.status){
        console.log(result)
      }
      setRefresh(false)
    }).catch((err) =>{
      setRefresh(false)
      console.log(err)
    })
  }

  useEffect(() =>{
    GetAllStore()
  },[getRefresh])

  return (
    <div>
        <div className='p-3 my-5 shadow-lg'>
          <CardComp 
            width='w-full' 
            title={
              <PageHeaderTitle 
              icon={<IconTableList/> }
              title='Store List'
              rightComponent={true}
              path='add-store'
              buttonTitle='Add Store'
              />
            } 
            children={
              getRefresh
              ?
                <div class="flex flex-col gap-4 w-full">
                  <div class="flex gap-4 items-center">
                    <div class="flex flex-col gap-4">
                      <div class="skeleton h-4 w-60"></div>
                      <div class="skeleton h-4 w-60"></div>
                    </div>
                  </div>
                  <div class="skeleton h-32 w-full"></div>
                </div>
              :
                <DaisyTable 
                  enableButton={true} 
                  headers={headersData}
                >
                  {
                    getStoreTableData.map((item_row, index_row) =>
                      <tr key={index_row}>
                          <th className='font-normal text-center capitalize '>{index_row + 1}</th>
                          <th className='font-normal text-center capitalize '>{item_row.store_name}</th>
                          <th className='font-normal text-center capitalize '>{item_row.store_status}</th>
                          <th className='font-normal text-center capitalize '>{item_row.store_description}</th>
                          <th className='font-normal text-center capitalize '>{item_row.store_contact_number}</th>
                          <th className='font-normal text-center capitalize '>{item_row.store_address}</th>
                          <th className='font-normal text-center capitalize '>{item_row.date_created}</th>
                          <th className='font-normal text-center capitalize '>{item_row.date_updated}</th>

                          <th>
                            <div className='flex flex-row items-center justify-center'>
                              <>
                                <Link to={`update-store?store=${item_row.id}`}>
                                  <ButtonComp title={<IconEdit classname='text-white'/>} className='bg-blue-700'/>
                                </Link>
                                <ButtonComp onPress={() => UpdateToDelete(item_row)} title={<IconTrashCan classname='text-white'/>} className='bg-red-700 '/>
                              </>
                            </div>
                          </th> 
                      </tr>
                    )
                  }
                </DaisyTable>
              }
          />
        </div>
    </div>
  )
}

export default Stores
