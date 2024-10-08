import React, { useEffect, useState } from 'react'
import {useSelector} from 'react-redux';
import { useSearchParams } from 'react-router-dom';

import {
  InputComp,
  SelectComp,
  ButtonComp,
  CardComp,
  PageHeaderTitle,
  AlertMessage
} from '../../../components/_index'

import {
  IconUserGroup,
  IconShoppingBag
} from '../../../icons/_index'

import * as role from '../../../services/modules/role/role.api'
import * as store from '../../../services/modules/store/store.api'

const AddCrew = () => {

  let [searchParams] = useSearchParams();
  let param_store = searchParams.get("store");

  const data = useSelector(state => state.AuthReducer);

  const [getRoles, setRoles] = useState([])
  const [getStores, setStores] = useState([])
  const [getInputRoles, setInputRoles] = useState("")
  const [getInputStore, setInputStore] = useState("")

  const [getRequestStatus, setRequestStatus] = useState(false)
  const [getRequestStatusMessage, setRequestStatusMessage] = useState("unknown")

  const GetCrewAssignedRoleData = async(id) =>{
    await role.GetAllRole(data.StateToken, id).then((result) =>{
        if(result.status){
            var res = result.data.data
            setRoles(res)
        }
    }).catch((err) =>{
        console.log(err)
    })
}

const GetCrewAssignedStoreData = async(id) =>{
    await store.GetAllStore(data.StateToken, id).then((result) =>{
        if(result.status){
            var res = result.data.data
            setStores(res)
        }
    }).catch((err) =>{
        console.log(err)
    })
}

useEffect(() =>{
  GetCrewAssignedRoleData()
  GetCrewAssignedStoreData()
},[])

  return (
    <div>
      <CardComp 
        title={
          <PageHeaderTitle 
          icon={<IconUserGroup classname='text-black'/> }
          title='Create New Crew Member'
          />
        } 
        width='p-8 mb-3 w-full shadow-xl'
      >
        <div className="space-y-12">
                    <AlertMessage status={getRequestStatus} showStatus={getRequestStatus} message={getRequestStatusMessage}/>
                    <div className="pb-12 border-b border-gray-900/10">
                        <div className="grid grid-cols-2 gap-5 mt-10">
                            <div>
                                <InputComp 
                                    label='First Name' 
                                    // inputValue={getStoreName} 
                                    // onChangeValue={(event) => setStoreName(event.target.value)}
                                />
                            </div>  

                            <div>
                                <InputComp 
                                label='Last Name'
                                // inputValue={getStoreDescription} 
                                // onChangeValue={(event) => setStoreDescription(event.target.value)}
                                />
                            </div>

                            <div>
                                <InputComp 
                                label='Contact Number'
                                // inputValue={getStoreContactNumber} 
                                // onChangeValue={(event) => setStoreContactNumber(event.target.value)}
                                />
                            </div>

                            <div>
                                <InputComp 
                                label='Email Address'
                                // inputValue={getStoreAddress} 
                                // onChangeValue={(event) => setStoreAddress(event.target.value)}
                                />
                            </div>

                            <div>
                                <InputComp 
                                label='Username'
                                // inputValue={getStoreAddress} 
                                // onChangeValue={(event) => setStoreAddress(event.target.value)}
                                />
                            </div>

                            <div>
                                <InputComp 
                                label='Password'
                                // inputValue={getStoreAddress} 
                                // onChangeValue={(event) => setStoreAddress(event.target.value)}
                                />
                            </div>


                            <div >
                                <SelectComp
                                    label='Role'
                                    module={"store"}
                                    inputValue={getInputRoles} 
                                    options={getRoles}
                                    hasOptionContent={true}
                                    onChangeValue={(event) => setInputRoles(event.target.value)}
                                />
                            </div>

                            <div >
                                <SelectComp
                                label='Assigned Store'
                                module={"role"}
                                inputValue={getInputStore} 
                                options={getStores}
                                hasOptionContent={true}
                                onChangeValue={(event) => setInputStore(event.target.value)}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex items-center justify-end mt-6 gap-x-6">
                    <ButtonComp title='Update' />
                </div>
      </CardComp>
    </div>
  )
}

export default AddCrew
