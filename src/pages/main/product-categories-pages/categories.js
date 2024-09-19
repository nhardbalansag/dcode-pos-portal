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
  IconEdit
} from '../../../icons/_index'

import * as productCategory from '../../../services/modules/product-category/product-category.api'

const Categories = () => {

  const data = useSelector(state => state.AuthReducer);
  const headersData = [
    "", 
    "category Title",  
    "category status",  
    "category image",  
    "date created", 
    "date updated"
  ]

  const [getTableData, setTableData] = useState([])
  const [getRefresh, setRefresh] = useState(false)
  const [getUpdated, setUpdated] = useState(false)

  const GetTableDataContent = async() =>{
    setRefresh(true)
    await productCategory.GetAllProductCategory(data.StateToken).then((result) =>{
      if(result.status){
        setTableData(result.data.data.data)
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

    await productCategory.UpdateToDelete(requestBody, data.StateToken).then((result) =>{
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
    GetTableDataContent()
  },[])

  useEffect(() =>{
    GetTableDataContent()
  },[getUpdated])

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
                        <th className='font-normal text-center capitalize '>{item_row.category_title}</th>
                        <th className='font-normal text-center capitalize '>{item_row.statuses_data.status_name}</th>
                        <th className='font-normal text-center capitalize '>{item_row.resources_data.url}</th>
                        <th className='font-normal text-center capitalize '>{item_row.created_at}</th>
                        <th className='font-normal text-center capitalize '>{item_row.updated_at}</th>

                        <th>
                          <div className='flex flex-row items-center justify-center'>
                            <>
                              <Link to={`update-category?id=${item_row.id}`}>
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

export default Categories
