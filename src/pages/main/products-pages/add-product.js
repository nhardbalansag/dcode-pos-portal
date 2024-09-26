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

import * as product from '../../../services/modules/product/product.api'
import * as productCategory from '../../../services/modules/product-category/product-category.api'
import * as store from '../../../services/modules/store/store.api'

const AddProduct = () => {

  const data = useSelector(state => state.AuthReducer);

  const [getproduct_name, setproduct_name] = useState()
  const [getproduct_description, setproduct_description] = useState()
  const [getproduct_category_id, setproduct_category_id] = useState()
  const [getstore_id, setstore_id] = useState()
  const [getresources, setresources] = useState()
  const [getStoresList, setStoresList] = useState([])
  const [getProductCategoryList, setProductCategoryList] = useState([])

  const [getRequestStatus, setRequestStatus] = useState(false)
  const [getRequestStatusMessage, setRequestStatusMessage] = useState("unknown")

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      setresources(selectedFile);
      setRequestStatusMessage(''); // Clear any previous error
    }
  };
  
  const CreateProduct = async(event) =>{
    event.preventDefault();

    const requestBody = {
      "product_name": getproduct_name,
      "product_description": getproduct_description,
      "product_category_id": getproduct_category_id,
      "store_id": getstore_id,
      "resources": getresources,
    }

    if (!getresources) {
      setRequestStatusMessage('Please select a file');
      return;
    }

    setRequestStatus(true)
    setRequestStatusMessage("Processing your request, please wait...")

    await product.CreateProduct(requestBody, data.StateToken).then((result) =>{
      setRequestStatus(true)
      setRequestStatusMessage("success")
    }).catch((err) =>{
      setRequestStatus(true)
      setRequestStatusMessage(err.message)
    })
  }

  const GetAllStore = async() =>{
    setRequestStatus(true)
    setRequestStatusMessage("Processing your request, please wait...")
    await store.GetAllStore(data.StateToken).then((result) =>{
      setRequestStatus(false)
      if(result.status){
        setStoresList(result.data.data.data)
      }
    }).catch((err) =>{
      setRequestStatus(true)
      setRequestStatusMessage(err.message)
    })
  }

  const GetAllProductCategory = async() =>{
    setRequestStatus(true)
    setRequestStatusMessage("Processing your request, please wait...")
    await productCategory.GetAllProductCategory(data.StateToken).then((result) =>{
      setRequestStatus(false)
      if(result.status){
        setProductCategoryList(result.data.data.data)
      }
    }).catch((err) =>{
      setRequestStatus(true)
      setRequestStatusMessage(err.message)
    })
  }

  useEffect(() =>{
    GetAllStore()
    GetAllProductCategory()
  },[])

  return (
    <div>
      <CardComp 
        title={
          <PageHeaderTitle 
          icon={<IconShoppingBag classname='text-black'/> }
          title='Create New Product'
          />
        } 
        width='p-8 mb-3 w-full shadow-xl'>
        <form onSubmit={(event) => CreateProduct(event)}>
          <div className="space-y-12">
            <AlertMessage status={getRequestStatus} showStatus={getRequestStatus} message={getRequestStatusMessage}/>
            <div className="border-b border-gray-900/10 pb-12">
              <div className="mt-10 gap-5 grid grid-cols-2">
                <div>
                    <InputComp 
                      label='Product Image Upload' 
                      isFileInput={true}
                      isText={false}
                      inputValue={getresources} 
                      onChangeValue={handleFileChange}
                    />
                </div>
                <div>
                  <InputComp 
                    label='Product Name' 
                    inputValue={getproduct_name} 
                    onChangeValue={(event) => setproduct_name(event.target.value)}
                  />
                </div>
                <div>
                  <InputComp 
                    label='Product Description' 
                    inputValue={getproduct_description} 
                    onChangeValue={(event) => setproduct_description(event.target.value)}
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
                </div>
                <div >
                  <SelectComp
                    label='Product Categories'
                    hasOptionContent={true}
                    options={getProductCategoryList}
                    inputValue={getproduct_category_id} 
                    onChangeValue={(value) => setproduct_category_id(value)}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-end gap-x-6">
            <ButtonComp title='Create Product'/>
          </div>
        </form>
      </CardComp>
    </div>
  )
}

export default AddProduct
