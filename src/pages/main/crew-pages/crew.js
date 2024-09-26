import React, { useEffect, useState } from 'react'
import {useSelector} from 'react-redux';
import { Link } from "react-router-dom";

import {
  CardComp,
  ButtonComp,
  AlertMessage,
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
  const headersData = ["#", "store", "role", "first name", "last name", "contact number", "email address", "status", "date created", "date updated"]

  const [getCrewTableData, setCrewTableData] = useState([])
  const [getRefresh, setRefresh] = useState(false)

  const [getRequestStatus, setRequestStatus] = useState(false)
  const [getRequestStatusMessage, setRequestStatusMessage] = useState("unknown")
  
  const PromptProcessing = (state = true, message = "Processing your request, please wait...") =>{
    setRequestStatus(state)
    setRequestStatusMessage(message)
  }

  const GetAllCrew = async() =>{
    setRefresh(true)
    PromptProcessing()
    await crew.GetAllCrew(data.StateToken).then((result) =>{
      PromptProcessing(false, "")
      if(result.status){
        setCrewTableData(result.data.data.data)
      }
    }).catch((err) =>{
      setRefresh(false)
      PromptProcessing(true, err.message)
    })
    setRefresh(false)
  }

  useEffect(() =>{
    GetAllCrew()
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
                          <th className='font-normal text-center capitalize '>{item_row.stores_data.store_name}</th>
                          <th className='font-normal text-center capitalize '>{item_row.roles_data.role_title}</th>
                          <th className='font-normal text-center capitalize '>{item_row.user_first_name}</th>
                          <th className='font-normal text-center capitalize '>{item_row.user_last_name}</th>
                          <th className='font-normal text-center capitalize '>{item_row.user_number}</th>
                          <th className='font-normal text-center capitalize '>{item_row.email}</th>
                          <th className='font-normal text-center capitalize '>{item_row.statuses_data.status_name}</th>
                          <th className='font-normal text-center capitalize '>{item_row.created_at}</th>
                          <th className='font-normal text-center capitalize '>{item_row.updated_at}</th>

                          <th>
                            <div className='flex flex-row items-center justify-center'>
                              <>
                                <Link to={`update-crew?id=${item_row.id}`}>
                                  <ButtonComp title={<IconEdit classname='text-white'/>} className='bg-blue-700'/>
                                </Link>
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
