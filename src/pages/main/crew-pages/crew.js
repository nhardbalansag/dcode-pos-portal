import React, { useEffect, useState } from 'react'
import {useSelector} from 'react-redux';
import { Link } from "react-router-dom";

import {
  CardComp,
  ButtonComp,
  DonutChart,
  DaisyTable,
  PageHeaderTitle
} from '../../../components/_index'

import {
  IconTableList,
  IconTrashCan,
  IconEdit
} from '../../../icons/_index'


import * as crew from '../../../services/modules/crew/crew.api'

const CrewPage = () => {

  const data = useSelector(state => state.AuthReducer);
  const headersData = ["", "store", "role", "id", "first name", "last name", "contact number", "email address", "username", "password"]

  const [getCrewTableData, setCrewTableData] = useState([])
  const [getRefresh, setRefresh] = useState(false)

  const GetAllCrew = async() =>{
    await crew.GetAllCrew(data.StateToken).then((result) =>{
      if(result.status){
        setCrewTableData(result.data.data)
      }
    }).catch((err) =>{
      console.log(err)
    })
  }

  const UpdateToDelete = async(row) =>{

    setRefresh(true)

    const requestBody = {
      "isDeleted": 1,
      "first_name": row.first_name,
      "last_name": row.last_name,
      "middle_name": row.middle_name,
      "contact_number": row.contact_number,
      "address": row.address,
      "contact_person_name": row.contact_person_name,
      "contact_person_number": row.contact_person_number,
      "email_address": row.email_address,
      "username": row.username,
      "password": row.password,
      "id": row.id
    }

    await crew.UpdateToDelete(requestBody, data.StateToken).then((result) =>{
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
    GetAllCrew()
  },[getRefresh])

  return (
    <div>
        <div className='p-3 my-5 shadow-lg'>
          <CardComp 
            width='w-full' 
            title={
              <PageHeaderTitle 
              icon={<IconTableList/> }
              title='Crew List'
              rightComponent={true}
              path='add-crew'
              buttonTitle='Add Crew'
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
                    getCrewTableData.map((item_row, index_row) =>
                      <tr key={index_row}>
                          <th className='font-normal text-center capitalize '>{index_row + 1}</th>
                          <th className='font-normal text-center capitalize '>{item_row.store_id}</th>
                          <th className='font-normal text-center capitalize '>{item_row.roleId}</th>
                          <th className='font-normal text-center capitalize '>{item_row.id}</th>
                          <th className='font-normal text-center capitalize '>{item_row.first_name}</th>
                          <th className='font-normal text-center capitalize '>{item_row.last_name}</th>
                          <th className='font-normal text-center capitalize '>{item_row.contact_number}</th>
                          <th className='font-normal text-center capitalize '>{item_row.email_address}</th>
                          <th className='font-normal text-center capitalize '>{item_row.username}</th>
                          <th className='font-normal text-center capitalize '>{item_row.password}</th>

                          <th>
                            <div className='flex flex-row items-center justify-center'>
                              <>
                                <Link to={`update-crew?crew=${item_row.id}`}>
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

export default CrewPage
