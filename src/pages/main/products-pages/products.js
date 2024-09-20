import React, { useEffect, useState } from 'react'
import {useSelector} from 'react-redux';

import { Link } from "react-router-dom";

import {
  CardComp,
  ButtonComp,
  PageHeaderTitle,
  DaisyTable,
  AlertMessage
} from '../../../components/_index'

import {
  IconTableList,
  IconTrashCan,
  IconEdit
} from '../../../icons/_index'

import * as product from '../../../services/modules/product/product.api'

const Products = () => {

  const data = useSelector(state => state.AuthReducer);
  const headersData = [
    "#", 
    "product name",  
    "product status",  
    "assigned store",  
    "product category",  
    "date created", 
    "date updated"
  ]

  const [getTableData, setTableData] = useState([])
  const [getRefresh, setRefresh] = useState(false)

  const [getRequestStatus, setRequestStatus] = useState(false)
  const [getRequestStatusMessage, setRequestStatusMessage] = useState("unknown")

  const GetTableDataContent = async() =>{
    setRefresh(true)
    setRequestStatus(true)
    setRequestStatusMessage("Processing your request, please wait...")
    await product.GetAllProduct(data.StateToken).then((result) =>{
      setRequestStatus(false)
      if(result.status){
        setTableData(result.data.data.data)
      }
    }).catch((err) =>{
      setRefresh(false)
      setRequestStatus(true)
      setRequestStatusMessage(err.message)
    })
    setRefresh(false)
  }

  const UpdateToDelete = async(row) =>{

    const requestBody = {
      "id": row.id
    }

    setRequestStatus(true)
    setRequestStatusMessage("Processing your request, please wait...")

    await product.UpdateToDelete(requestBody, data.StateToken).then((result) =>{
      GetTableDataContent()
    }).catch((err) =>{
      setRequestStatus(true)
      setRequestStatusMessage(err.message)
    })
  }

  useEffect(() => {
    GetTableDataContent()
  },[])

  return (
    <div>
        <div className='p-3 pt-5 my-5 shadow-lg'>
          <AlertMessage status={getRequestStatus} showStatus={getRequestStatus} message={getRequestStatusMessage}/>

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
                  getTableData.map((item_row, index_row) =>
                    <tr key={index_row}>
                        <th className='font-normal text-center capitalize '>{index_row + 1}</th>
                        <th className='font-normal text-center capitalize '>{item_row.product_name}</th>
                        <th className='font-normal text-center capitalize '>{item_row.statuses_data.status_name}</th>
                        <th className='font-normal text-center capitalize '>{item_row.store_data.store_name}</th>
                        <th className='font-normal text-center capitalize '>{item_row.product_category_data.category_title}</th>
                        <th className='font-normal text-center capitalize '>{item_row.created_at}</th>
                        <th className='font-normal text-center capitalize '>{item_row.updated_at}</th>

                        <th>
                          <div className='flex flex-row items-center justify-center'>
                            <>
                              <Link to={`update-product?id=${item_row.id}`}>
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

export default Products
