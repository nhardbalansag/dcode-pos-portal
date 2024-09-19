import React, { useEffect, useState } from 'react'
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
  IconTableList,
  IconShoppingBag
} from '../../../icons/_index'

import * as productCategory from '../../../services/modules/product-category/product-category.api'
import * as store from '../../../services/modules/store/store.api'

const AddProductCategory = () => {

  const data = useSelector(state => state.AuthReducer);
  
  const [getcategory_title, setcategory_title] = useState()
  const [getcategory_description, setcategory_description] = useState()
  const [getstore_id, setstore_id] = useState()
  const [getresources, setresources] = useState()
  const [getStoresList, setStoresList] = useState([])

  const [getRequestStatus, setRequestStatus] = useState(false)
  const [getRequestStatusMessage, setRequestStatusMessage] = useState("unknown")

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      setresources(selectedFile);
      setRequestStatusMessage(''); // Clear any previous error
    }
  };

  const CreateProductCategory = async(event) =>{

    event.preventDefault();

    const requestBody = {
      "category_title": getcategory_title,
      "category_description": getcategory_description,
      "store_id": getstore_id,
      "resources": getresources,
    }

    if (!getresources) {
      setRequestStatusMessage('Please select a file');
      return;
    }

    setRequestStatus(true)
    setRequestStatusMessage("Processing your request, please wait...")

    await productCategory.CreateProductCategory(requestBody, data.StateToken).then((result) =>{
      console.log(result)
      setRequestStatus(true)
      setRequestStatusMessage("success")
    }).catch((err) =>{
      console.log(err)
      setRequestStatus(true)
      setRequestStatusMessage(err.message)
    })
  }

  const GetAllStore = async() =>{
    await store.GetAllStore(data.StateToken).then((result) =>{
      if(result.status){
        setStoresList(result.data.data.data)
      }
    }).catch((err) =>{
      console.log(err)
    })
  }

  useEffect(()=>{
    GetAllStore()
  },[])

  return (
    <div>
      <CardComp 
      title={
        <PageHeaderTitle 
        icon={<IconTableList classname='text-black'/> }
        title='Create New Product Category'
        />
      } 
      width='mb-3 w-full shadow-xl'>
        <form onSubmit={(event) => CreateProductCategory(event)}>
          <div class="space-y-12">
            <AlertMessage status={getRequestStatus} showStatus={getRequestStatus} message={getRequestStatusMessage}/>
            <div class="border-b border-gray-900/10 pb-12">
              <div class="mt-10 gap-5 grid grid-cols-2">

                <div>
                    <InputComp 
                      label='Category Image Upload' 
                      isFileInput={true}
                      isText={false}
                      inputValue={getresources} 
                      onChangeValue={handleFileChange}
                    />
                </div>

                <div>
                  <InputComp 
                    label='Category Title' 
                    inputValue={getcategory_title} 
                    onChangeValue={(event) => setcategory_title(event.target.value)}
                  />
                </div>

                <div>
                  <InputComp 
                    label='Category Description' 
                    inputValue={getcategory_description} 
                    onChangeValue={(event) => setcategory_description(event.target.value)}
                  />
                </div>

                <div >
                  <SelectComp
                    label='Store'
                    hasOptionContent={true}
                    options={getStoresList}
                    inputValue={getstore_id} 
                    onChangeValue={(value) => setstore_id(value)}
                  />
                </div>``
              </div>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-end gap-x-6">
            <ButtonComp title='Create Category'/>
          </div>
        </form>
      </CardComp>
    </div>
  )
}

export default AddProductCategory
