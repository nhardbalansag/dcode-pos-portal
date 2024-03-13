import React, {useState} from 'react'
import {useSelector} from 'react-redux';

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

const AddStore = () => {

  const data = useSelector(state => state.AuthReducer);

  const [getStoreName, setStoreName] = useState("")
  const [getStoreDescription, setStoreDescription] = useState("")
  const [getStoreContactNumber, setStoreContactNumber] = useState("")
  const [getStoreAddress, setStoreAddress] = useState("")
  const [getStoreStatus, setStoreStatus] = useState("")

  const [getRequestStatus, setRequestStatus] = useState(false)
  const [getRequestStatusMessage, setRequestStatusMessage] = useState("unknown")

  const createStore = async() =>{

    const requestBody = {
      "store_name": getStoreName,
      "store_description": getStoreDescription,
      "store_contact_number": getStoreContactNumber,
      "store_address": getStoreAddress,
      "store_status": getStoreStatus
    }

    await store.CreateStore(requestBody, data.StateToken).then((result) =>{
      console.log(result)
      setRequestStatus(true)
      setRequestStatusMessage("success")
    }).catch((err) =>{
      console.log(err)
      setRequestStatus(false)
      setRequestStatusMessage(err)
    })
  }

  return (
    <div>
      <CardComp 
        title={
          <PageHeaderTitle 
            icon={<IconStore classname='text-black'/> }
            title='Create New Store'
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
                  inputValue={getStoreStatus} 
                  onChangeValue={(event) => setStoreStatus(event.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-end mt-6 gap-x-6">
            <ButtonComp title='Create' onPress={() => createStore()}/>
          </div>
      </CardComp>
    </div>
  )
}

export default AddStore
