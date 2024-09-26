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
import * as statuses from '../../../services/modules/status/status.api'
import * as crew from '../../../services/modules/crew/crew.api'

const UpdateCrew = () => {

    let [searchParams] = useSearchParams();
    let param_store = searchParams.get("id");

    const data = useSelector(state => state.AuthReducer);

    const [getRolesList, setRolesList] = useState([])
    const [getStatusList, setStatusList] = useState([])
    const [getStoresList, setStoresList] = useState([])

    const [getuser_first_name, setuser_first_name] = useState()
    const [getuser_last_name, setuser_last_name] = useState()
    const [getuser_middle_name, setuser_middle_name] = useState()
    const [getuser_address, setuser_address] = useState()
    const [getuser_number, setuser_number] = useState()
    const [getemail, setemail] = useState()
    const [getpassword, setpassword] = useState(null)
    const [getstore_id, setstore_id] = useState()
    const [getroles_id, setroles_id] = useState()
    const [getm_statuses_id, setm_statuses_id] = useState()
    const [getpin, setpin] = useState()

    const [getRequestStatus, setRequestStatus] = useState(false)
    const [getRequestStatusMessage, setRequestStatusMessage] = useState("unknown")

    const PromptProcessing = (state = true, message = "Processing your request, please wait...") =>{
        setRequestStatus(state)
        setRequestStatusMessage(message)
    }

    const GetAllRoleNoPaginate = async() =>{
        PromptProcessing()
        await role.GetAllRoleNoPaginate(data.StateToken).then((result) =>{
            PromptProcessing(false, "")
            if(result.status){
                var res = result.data.data
                setRolesList(res)
            }
        }).catch((err) =>{
            PromptProcessing(true, err.message)
        })
    }

    const GetStatusesData = async() =>{
        PromptProcessing()
        await statuses.GetAllStatuses(data.StateToken).then((result) =>{
            PromptProcessing(false, "")
            if(result.status){
                var res = result.data.data
                setStatusList(res)
            }
        }).catch((err) =>{
            PromptProcessing(true, err.message)
        })
    }

    const GetAllStore = async() =>{
        PromptProcessing()
        await store.GetAllStore(data.StateToken).then((result) =>{
            PromptProcessing(false, "")
            if(result.status){
                setStoresList(result.data.data.data)
            }
        }).catch((err) =>{
            PromptProcessing(true, err.message)
        })
    }

    const UpdateUserInformation = async(event) =>{
        event.preventDefault();
    
        const requestBody = {
            "user_first_name": getuser_first_name,
            "user_last_name": getuser_last_name,
            "user_middle_name": getuser_middle_name,
            "user_address": getuser_address,
            "user_number": getuser_number,
            "email": getemail,
            "password": getpassword,
            "store_id": getstore_id,
            "roles_id": getroles_id,
            "m_statuses_id": getm_statuses_id,
            "pin": getpin,
            "id": param_store
        }
        PromptProcessing()
        await crew.UpdateUser(requestBody, data.StateToken).then((result) =>{
            GetUser(param_store)
            PromptProcessing(true, "success")
        }).catch((err) =>{
            PromptProcessing(true, err.message)
        })
    }
    
    const GetUser = async(id) =>{
        const requestBody = {
            "id": id
        }
        PromptProcessing()
        await crew.GetUsers(data.StateToken, requestBody).then((result) =>{
            PromptProcessing(false, "")
            if(result.status){
                var res = result.data.data

                setuser_first_name(res.user_first_name)
                setuser_last_name(res.user_last_name)
                setuser_middle_name(res.user_middle_name)
                setuser_address(res.user_address)
                setuser_number(res.user_number)
                setemail(res.email)
                // setpassword(res.password)
                setm_statuses_id(res.m_statuses_id)
                setstore_id(res.store_id)
                setroles_id(res.roles_id)
                setpin(res.user_pin_data.pin)
            }
        }).catch((err) =>{
            PromptProcessing(true, err.message)
        })
    }

    useEffect(() =>{
        GetAllRoleNoPaginate()
        GetStatusesData()
        GetAllStore()
        GetUser(param_store)
    },[])

    return (
        <div>
            <CardComp 
                title={
                    <PageHeaderTitle 
                    icon={<IconUserGroup classname='text-black'/> }
                    title='Update Crew Member'/>
                } 
                width='p-8 mb-3 w-full shadow-xl'>
                    <div className="space-y-12">
                        <AlertMessage status={getRequestStatus} showStatus={getRequestStatus} message={getRequestStatusMessage}/>
                        <form onSubmit={(event) => UpdateUserInformation(event)}>
                            <div className="pb-12 border-b border-gray-900/10">
                                <div className=" mt-10">
                                    
                                    <p className="mt-6 text-lg leading-8 text-gray-400 capitalize">Personal Information</p>
                                    <div className='pb-12 border-b border-gray-900/10 grid grid-cols-3 gap-5 mt-10'>
                                        <InputComp 
                                        label='First Name' 
                                        inputValue={getuser_first_name} 
                                        onChangeValue={(event) => setuser_first_name(event.target.value)}
                                        />
                                        <InputComp 
                                        label='Last name'
                                        inputValue={getuser_last_name} 
                                        onChangeValue={(event) => setuser_last_name(event.target.value)}
                                        />
                                        <InputComp 
                                        label='Middle name'
                                        inputValue={getuser_middle_name} 
                                        onChangeValue={(event) => setuser_middle_name(event.target.value)}
                                        />
                                    </div>

                                    <p className="mt-6 text-lg leading-8 text-gray-400 capitalize">Contact information</p>
                                    <div className='pb-12 border-b border-gray-900/10 grid grid-cols-2 gap-5 mt-10'>
                                        <InputComp 
                                        label='Address'
                                        inputValue={getuser_address} 
                                        onChangeValue={(event) => setuser_address(event.target.value)}
                                        />
                                        <div className=''>
                                            <InputComp 
                                            label='Email Address'
                                            inputValue={getemail} 
                                            onChangeValue={(event) => setemail(event.target.value)}
                                            />
                                            <InputComp 
                                            label='Contact Number'
                                            inputValue={getuser_number} 
                                            onChangeValue={(event) => setuser_number(event.target.value)}
                                            />
                                        </div>
                                    </div>

                                    <p className="mt-6 text-lg leading-8 text-gray-400 capitalize">Assigned role and store</p>
                                    <div className='pb-12 border-b border-gray-900/10 grid grid-cols-2 gap-5 mt-10'>
                                        <SelectComp
                                        label='Assigned Store'
                                        hasOptionContent={true}
                                        options={getStoresList}
                                        inputValue={getstore_id} 
                                        onChangeValue={(value) => setstore_id(value)}
                                        />
                                        <SelectComp
                                        label='Assigned Role'
                                        hasOptionContent={true}
                                        options={getRolesList}
                                        inputValue={getroles_id} 
                                        onChangeValue={(value) => setroles_id(value)}
                                        />
                                        <SelectComp
                                        label='User Status'
                                        hasOptionContent={true}
                                        options={getStatusList}
                                        inputValue={getm_statuses_id} 
                                        onChangeValue={(value) => setm_statuses_id(value)}
                                        />
                                    </div>

                                    <div className='border-b border-gray-900/10 pb-12'>
                                        <p className="mt-6 text-lg leading-8 text-gray-400 capitalize ">Initial password setup</p>
                                        <InputComp 
                                        label='Password'
                                        inputValue={getpassword} 
                                        onChangeValue={(event) => setpassword(event.target.value)}
                                        />
                                    </div>

                                    <p className="mt-6 text-lg leading-8 text-gray-400 capitalize">Add Pin</p>
                                    <div>
                                        <InputComp 
                                        label='Pin'
                                        inputValue={getpin} 
                                        onChangeValue={(event) => setpin(event.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className="flex items-center justify-start mt-6 gap-x-6">
                                    <ButtonComp title={<p className='text-white'>Update User</p>}/>
                                </div>
                            </div>
                        </form>
                    </div>
            </CardComp>
        </div>
    )
}

export default UpdateCrew;
