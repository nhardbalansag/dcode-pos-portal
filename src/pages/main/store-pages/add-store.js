import React, {useState} from 'react'
import {useSelector} from 'react-redux';

import {
  InputComp,
  SelectComp,
  ButtonComp,
  CardComp,
  PageHeaderTitle
} from '../../../components/_index'

import {
  IconStore,
} from '../../../icons/_index'

import * as auth from '../../../middleware/auth/auth.api'

const AddStore = () => {

  const data = useSelector(state => state.AuthReducer);

  const [getStoreName, setStoreName] = useState("")
  const [getStoreDescription, setStoreDescription] = useState("")
  const [getStoreContactNumber, setStoreContactNumber] = useState("")
  const [getStoreAddress, setStoreAddress] = useState("")
  const [getStoreStatus, setStoreStatus] = useState("")

  const createStore = async() =>{

    const requestBody = {
      "store_name": getStoreName,
      "store_description": getStoreDescription,
      "store_contact_number": getStoreContactNumber,
      "store_address": getStoreAddress,
      "store_status": getStoreStatus
    }

    await auth.CreateStore(requestBody, data.StateToken).then((result) =>{
      console.log(result)
    }).catch((err) =>{
      console.log(err)
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
            <div className="border-b border-gray-900/10 pb-12">
              <div className="mt-10 gap-5 grid grid-cols-2">
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

          <div className="mt-6 flex items-center justify-end gap-x-6">
            <ButtonComp onPress={() => createStore()}/>
          </div>
      </CardComp>
    </div>
  )
}

export default AddStore
