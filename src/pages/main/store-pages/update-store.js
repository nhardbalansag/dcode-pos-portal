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
    IconStore,
} from '../../../icons/_index'
  
import * as store from '../../../services/modules/store/store.api'
import * as statuses from '../../../services/modules/status/status.api'

function UpdateStore() {

    let [searchParams] = useSearchParams();
    let param_store = searchParams.get("store");

    const data = useSelector(state => state.AuthReducer);

    const [getStoreName, setStoreName] = useState("")
    const [getStoreDescription, setStoreDescription] = useState("")
    const [getStoreContactNumber, setStoreContactNumber] = useState("")
    const [getStoreAddress, setStoreAddress] = useState("")
    const [getStoreStatus, setStoreStatus] = useState()

    const [getRequestStatus, setRequestStatus] = useState(false)
    const [getStatusData, setStatusData] = useState()
    const [getRequestStatusMessage, setRequestStatusMessage] = useState("unknown")


    const updateStore = async() =>{

        const requestBody = {
          "store_name": getStoreName,
          "store_description": getStoreDescription,
          "store_contact_number": getStoreContactNumber,
          "store_address": getStoreAddress,
          "m_statuses_id": getStoreStatus,
          "id": param_store,
        }

        setRequestStatus(true)
        setRequestStatusMessage("Processing your request, please wait...")
    
        await store.UpdateStoreData(requestBody, data.StateToken).then((result) =>{
          setRequestStatus(true)
          setRequestStatusMessage("success")
        }).catch((err) =>{
          setRequestStatus(true)
          setRequestStatusMessage(err)
        })
    }

    const GetStoreData = async(id) =>{

        const requestBody = {
            "id": id
        }

        setRequestStatus(true)
        setRequestStatusMessage("Processing your request, please wait...")

        await store.GrabStore(data.StateToken, requestBody).then((result) =>{
            setRequestStatus(false)
            if(result.status){
                var res = result.data.data
                
                setStoreName(res.store_name)
                setStoreDescription(res.store_description)
                setStoreContactNumber(res.store_contact_number)
                setStoreAddress(res.store_address)
                setStoreStatus(res.statuses_data.id)
            }
        }).catch((err) =>{
            setRequestStatus(true)
            setRequestStatusMessage(err.message)
        })
    }

    const GetStatusesData = async() =>{
        setRequestStatus(true)
        setRequestStatusMessage("Processing your request, please wait...")
        await statuses.GetAllStatuses(data.StateToken).then((result) =>{
            setRequestStatus(false)
            if(result.status){
                var res = result.data.data
                setStatusData(res)
            }
        }).catch((err) =>{
            setRequestStatus(true)
            setRequestStatusMessage(err.message)
        })
    }

    useEffect(() =>{
        GetStoreData(param_store)
        GetStatusesData()
    },[])

    return (
        <div>
            <CardComp 
                title={
                <PageHeaderTitle 
                    icon={<IconStore classname='text-black'/> }
                    title='Update Store'
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
                                label='Store Name' 
                                inputValue={getStoreName} 
                                onChangeValue={(event) => setStoreName(event.target.value)}
                            />
                        </div>  

                        <div>
                            <InputComp 
                            label='Description'
                            inputValue={getStoreDescription} 
                            onChangeValue={(event) => setStoreDescription(event.target.value)}
                            />
                        </div>

                        <div>
                            <InputComp 
                            label='Store Contact Number'
                            inputValue={getStoreContactNumber} 
                            onChangeValue={(event) => setStoreContactNumber(event.target.value)}
                            />
                        </div>

                        <div>
                            <InputComp 
                            label='Store Address'
                            inputValue={getStoreAddress} 
                            onChangeValue={(event) => setStoreAddress(event.target.value)}
                            />
                        </div>

                        <div >
                            <SelectComp
                            label='Status'
                            hasOptionContent={true}
                            options={getStatusData}
                            inputValue={getStoreStatus} 
                            onChangeValue={(value) => setStoreStatus(value)}
                            />
                        </div>
                    </div>
                    </div>
                </div>

                <div className="flex items-center justify-end mt-6 gap-x-6">
                    <ButtonComp title='Update' onPress={() => updateStore()}/>
                </div>
            </CardComp>
        </div>
    )
}

export default UpdateStore