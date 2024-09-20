import React, { useEffect, useState } from 'react'
import {useSelector} from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { Link } from "react-router-dom";

import {
  InputComp,
  SelectComp,
  ButtonComp,
  CardComp,
  PageHeaderTitle,
  AlertMessage,
  DaisyTable
} from '../../../components/_index'

import {
  IconTableList,
  IconShoppingBag
} from '../../../icons/_index'

import {
  IconTrashCan,
  IconEdit
} from '../../../icons/_index'

import * as product from '../../../services/modules/product/product.api'
import * as productCategory from '../../../services/modules/product-category/product-category.api'
import * as store from '../../../services/modules/store/store.api'
import * as statuses from '../../../services/modules/status/status.api'
import * as productDetails from '../../../services/modules/product-details/product.details.api'
import * as units from '../../../services/modules/units/units.api'

const UpdateProduct = () => {

  const headersData = [
    "#", 
    "price",  
    "unit",  
    "product",  
    "store",  
    "status",  
    "date created",  
    "date updated",  
  ]

  let [searchParams] = useSearchParams();
  let param_store = searchParams.get("id");

  const data = useSelector(state => state.AuthReducer);

  const [getproduct_name, setproduct_name] = useState()
  const [getproduct_description, setproduct_description] = useState()
  const [getproduct_category_id, setproduct_category_id] = useState()
  const [getstore_id, setstore_id] = useState()
  const [getresources, setresources] = useState()
  const [getprevresources, setprevresources] = useState()
  const [getStoresList, setStoresList] = useState([])
  const [getProductCategoryList, setProductCategoryList] = useState([])
  const [getStatusData, setStatusData] = useState([])
  const [getStatus, setStatus] = useState()

  // product details state
  const [getProductDetailsID, setProductDetailsID] = useState(null)
  const [getprice, setprice] = useState()
  const [getm_tb_units, setm_tb_units] = useState()
  const [getm_statuses_id, setm_statuses_id] = useState()
  const [getproductDetailsStore_id, setproductDetailsStore_id] = useState()
  const [getProductDetailsRequestStatus, setProductDetailsRequestStatus] = useState(false)
  const [getUnitList, setUnitList] = useState([])
  const [getProductDetailsRequestStatusMessage, setProductDetailsRequestStatusMessage] = useState("unknown")

  // table 
  const [getTableData, setTableData] = useState([])
  const [getRefresh, setRefresh] = useState(false)

  const [getRequestStatus, setRequestStatus] = useState(false)
  const [getRequestStatusMessage, setRequestStatusMessage] = useState("unknown")

  const handleFileChange = (event) => {
      const selectedFile = event.target.files[0];
      if (selectedFile) {
          setresources(selectedFile);
          setRequestStatusMessage(''); // Clear any previous error
      }
  };

  const UpdateProduct = async(event) =>{
      event.preventDefault();

      const requestBody = {
          "product_name": getproduct_name,
          "product_description": getproduct_description,
          "product_category_id": getproduct_category_id,
          "store_id": getstore_id,
          "m_statuses_id": getStatus,
          "resources": getresources,
          "id": param_store,
          "resources_id": getprevresources
      }

      setRequestStatus(true)
      setRequestStatusMessage("Processing your request, please wait...")

      await product.UpdateProduct(requestBody, data.StateToken).then((result) =>{

          GetProduct(param_store)
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

  const GetProduct = async(id) =>{

      const requestBody = {
          "id": id
      }

      setRequestStatus(true)
      setRequestStatusMessage("Processing your request, please wait...")

      await product.GetProduct(data.StateToken, requestBody).then((result) =>{
          setRequestStatus(false)
          if(result.status){
              var res = result.data.data
              
              setproduct_name(res.product_name)
              setproduct_description(res.product_description)
              setproduct_category_id(res.product_category_id)
              setstore_id(res.store_id)
              setStatus(res.m_statuses_id)
              setprevresources(res.resources_id)
          }
      }).catch((err) =>{
          setRequestStatus(true)
          setRequestStatusMessage(err.message)
      })
  }

  const GetAllProductDetails = async() =>{
    setRefresh(true)
    setProductDetailsRequestStatus(true)
    setProductDetailsRequestStatusMessage("Processing your request, please wait...")
    await productDetails.GetAllProductDetails(data.StateToken).then((result) =>{
      setProductDetailsRequestStatus(false)
      setRefresh(false)
      if(result.status){
        setTableData(result.data.data.data)
      }
    }).catch((err) =>{
        setProductDetailsRequestStatus(true)
        setProductDetailsRequestStatusMessage(err.message)
    })
  }

  const GetAllUnit = async() =>{
    setProductDetailsRequestStatus(true)
    setProductDetailsRequestStatusMessage("Processing your request, please wait...")
    await units.GetAllUnit(data.StateToken).then((result) =>{
      setProductDetailsRequestStatus(false)
      setUnitList(result.data.data.data)
    }).catch((err) =>{
      setProductDetailsRequestStatus(true)
      setProductDetailsRequestStatusMessage(err.message)
    })
  }

  const CreateProductDetails = async(event) =>{

    event.preventDefault()

    const requestBody = {
      "price": getprice,
      "product_id": param_store,
      "m_tb_units": getm_tb_units,
      "m_statuses_id": getm_statuses_id,  
      "store_id": getproductDetailsStore_id,
    }

    setProductDetailsRequestStatus(true)
    setProductDetailsRequestStatusMessage("Processing your request, please wait...")

    await productDetails.CreateProductDetails(requestBody, data.StateToken).then((result) =>{
      setProductDetailsRequestStatus(true)
      setProductDetailsRequestStatusMessage("success")
      GetAllProductDetails()
    }).catch((err) =>{
      setProductDetailsRequestStatus(true)
      setProductDetailsRequestStatusMessage(err)
    })
  }

  const UpdateToDelete = async(row) =>{

    const requestBody = {
      "id": row.id
    }

    setProductDetailsRequestStatus(true)
    setProductDetailsRequestStatusMessage("Processing your request, please wait...")

    await productDetails.DeleteProductDetails(requestBody, data.StateToken).then((result) =>{
      setProductDetailsRequestStatus(false)
      GetAllProductDetails()
    }).catch((err) =>{
      setProductDetailsRequestStatus(true)
      setProductDetailsRequestStatusMessage(err.message)
    })
  }

  const GetProductDetails = async(row) =>{

    document.getElementById('my_modal_4').showModal()

    const requestBody = {
        "id": row.id
    }

    setProductDetailsRequestStatus(true)
    setProductDetailsRequestStatusMessage("Processing your request, please wait...")

    await productDetails.GetProductDetails(data.StateToken, requestBody).then((result) =>{
        setProductDetailsRequestStatus(false)
        if(result.status){
            var res = result.data.data
            
            setprice(res.price)
            setm_tb_units(res.m_tb_units)
            setm_statuses_id(res.m_statuses_id)
            setproductDetailsStore_id(res.store_id)
            setProductDetailsID(row.id)

        }
    }).catch((err) =>{
        setProductDetailsRequestStatus(true)
        setProductDetailsRequestStatusMessage(err.message)
    })
  }

  const UpdateProductDetails = async(event) =>{

    event.preventDefault()

    const requestBody = {
      "price": getprice,
      "product_id": param_store,
      "m_tb_units": getm_tb_units,
      "m_statuses_id": getm_statuses_id,  
      "store_id": getproductDetailsStore_id,
      "id": getProductDetailsID
    }

    setProductDetailsRequestStatus(true)
    setProductDetailsRequestStatusMessage("Processing your request, please wait...")

    await productDetails.UpdateProductDetails(requestBody, data.StateToken).then((result) =>{
      GetAllProductDetails()
      setProductDetailsRequestStatus(true)
      setProductDetailsRequestStatusMessage("success")
      setProductDetailsID(null)
    }).catch((err) =>{
      setProductDetailsID(null)
      setProductDetailsRequestStatus(true)
      setProductDetailsRequestStatusMessage(err)
    })
  }

  const submit = (event) =>{
    event.preventDefault()

    if(getProductDetailsID){
      UpdateProductDetails(event)
    }else{
      CreateProductDetails(event)
    }
  }

  useEffect(() =>{
    GetProduct(param_store)
    GetAllStore()
    GetAllProductCategory()
    GetStatusesData()
    GetAllProductDetails()
    GetAllUnit()
  },[])

  return (
    <div>
      <CardComp 
        title={
          <PageHeaderTitle 
          icon={<IconShoppingBag classname='text-black'/> }
          title='Update Product'
          />
        } 
        width='p-8 mb-3 w-full shadow-xl'>
        <div>
          <ButtonComp 
            onPress={()=>{
              setProductDetailsID(null)
              document.getElementById('my_modal_4').showModal()
            }}
            title={<><p className='text-white'>Add product details</p></>} 
            className='bg-[#EE8C21]'
          />
        </div>

        <form onSubmit={(event) => UpdateProduct(event)}>
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
                <div >
                    <SelectComp
                        label='Status'
                        hasOptionContent={true}
                        options={getStatusData}
                        inputValue={getStatus} 
                        onChangeValue={(value) => setStatus(value)}
                    />
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-end gap-x-6">
            <ButtonComp title={<><p className='text-white'>Update product</p></>} />
          </div>
        </form>

        <AlertMessage status={getProductDetailsRequestStatus} showStatus={getProductDetailsRequestStatus} message={getProductDetailsRequestStatusMessage}/>

        <div>
          {
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
                      <th className='font-normal text-center capitalize '>{item_row.price}</th>
                      <th className='font-normal text-center capitalize '>{`${item_row.units_data.unit_title} (${item_row.units_data.unit_code})`}</th>
                      <th className='font-normal text-center capitalize '>{item_row.product_data.product_name}</th>
                      <th className='font-normal text-center capitalize '>{`${item_row.store_data.store_name} - ${item_row.store_data.store_address} - ${item_row.store_data.store_contact_number}`}</th>
                      <th className='font-normal text-center capitalize '>{item_row.statuses_data.status_name}</th>
                      <th className='font-normal text-center capitalize '>{item_row.created_at}</th>
                      <th className='font-normal text-center capitalize '>{item_row.updated_at}</th>

                      <th>
                        <div className='flex flex-row items-center justify-center'>
                          <>
                            <ButtonComp onPress={() => GetProductDetails(item_row)} title={<IconEdit classname='text-white'/>} className='bg-blue-700 '/>
                            <ButtonComp onPress={() => UpdateToDelete(item_row)} title={<IconTrashCan classname='text-white'/>} className='bg-red-700 '/>
                          </>
                        </div>
                      </th> 
                  </tr>
                )
              }
            </DaisyTable>
          }
        </div>
        <dialog id="my_modal_4" className="modal">
          <div className="modal-box">
            <form method="dialog">
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
            </form>
            <div className='my-4'>
              <AlertMessage status={getProductDetailsRequestStatus} showStatus={getProductDetailsRequestStatus} message={getProductDetailsRequestStatusMessage}/>
            </div>
            <h3 className="font-bold text-lg ">{`${getProductDetailsID ? 'Update ' : 'Add'} product details and selection options`}</h3>
            <form onSubmit={(event) => submit(event)} className='flex justify-center'> 
              <div >
                <div className='grid grid-cols-2 gap-2'>
                  <InputComp 
                    label='Product price detail' 
                    inputValue={getprice} 
                    onChangeValue={(event) => setprice(event.target.value)}
                  />
                  <SelectComp
                      label='Product unit to use'
                      hasOptionContent={true}
                      options={getUnitList}
                      inputValue={getm_tb_units} 
                      onChangeValue={(value) => setm_tb_units(value)}
                  />
                  <SelectComp
                    label='Stores that the product is available'
                    hasOptionContent={true}
                    options={getStoresList}
                    inputValue={getproductDetailsStore_id} 
                    onChangeValue={(value) => setproductDetailsStore_id(value)}
                  />
                  <SelectComp
                      label='Status'
                      hasOptionContent={true}
                      options={getStatusData}
                      inputValue={getm_statuses_id} 
                      onChangeValue={(value) => setm_statuses_id(value)}
                  />
                </div>
                <div className="mt-6 flex items-center justify-end">
                  <ButtonComp title={<><p className='text-white'>{`${getProductDetailsID ? 'Update' : 'Add'} option`}</p></>} />
                </div>
              </div>
            </form>
          </div>
        </dialog>
      </CardComp>
    </div>
  )
}

export default UpdateProduct
