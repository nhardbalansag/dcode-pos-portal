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
  const [getUpdated, setUpdated] = useState(false)

  const GetAllStore = async() =>{
    setRefresh(true)
    await store.GetAllStore(data.StateToken).then((result) =>{
      if(result.status){
        setStoreTableData(result.data.data.data)
      }
    }).catch((err) =>{
      console.log(err)
      setRefresh(false)
    })
    setRefresh(false)
  }

  const UpdateToDelete = async(row) =>{

    setUpdated(true)

    const requestBody = {
      "id": row.id
    }

    await store.UpdateToDelete(requestBody, data.StateToken).then((result) =>{
      if(result.status){
        console.log(result)
      }
      setUpdated(false)
    }).catch((err) =>{
      setUpdated(false)
      console.log(err)
    })
  }

  useEffect(() =>{
    GetAllStore()
  },[])

  useEffect(() =>{
    GetAllStore()
  },[getUpdated])


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
                <div className="flex flex-col gap-4 w-full">
                  <div className="flex gap-4 items-center">
                    <div className="flex flex-col gap-4">
                      <div className="skeleton h-4 w-60"></div>
                      <div className="skeleton h-4 w-60"></div>
                    </div>
                  </div>
                  <div className="skeleton h-32 w-full"></div>
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
                          <th className='font-normal text-center capitalize '>{item_row.statuses_data.status_name}</th>
                          <th className='font-normal text-center capitalize '>{item_row.store_description}</th>
                          <th className='font-normal text-center capitalize '>{item_row.store_contact_number}</th>
                          <th className='font-normal text-center capitalize '>{item_row.store_address}</th>
                          <th className='font-normal text-center capitalize '>{item_row.created_at}</th>
                          <th className='font-normal text-center capitalize '>{item_row.updated_at}</th>

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
