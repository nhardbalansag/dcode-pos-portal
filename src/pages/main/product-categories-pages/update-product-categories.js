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
  IconTableList,
  IconShoppingBag
} from '../../../icons/_index'

import * as productCategory from '../../../services/modules/product-category/product-category.api'
import * as store from '../../../services/modules/store/store.api'
import * as statuses from '../../../services/modules/status/status.api'

const UpdateProductCategory = () => {

    let [searchParams] = useSearchParams();
    let param_store = searchParams.get("id");

    const data = useSelector(state => state.AuthReducer);
    
    const [getcategory_title, setcategory_title] = useState()
    const [getcategory_description, setcategory_description] = useState()
    const [getstore_id, setstore_id] = useState()
    const [getresources, setresources] = useState()
    const [getStatus, setStatus] = useState()
    const [getStoresList, setStoresList] = useState([])
    const [getStatusData, setStatusData] = useState([])

    const [getRequestStatus, setRequestStatus] = useState(false)
    const [getRequestStatusMessage, setRequestStatusMessage] = useState("unknown")

    const Update = async(event) =>{

        event.preventDefault();

        const requestBody = {
            "category_title": getcategory_title,
            "category_description": getcategory_description,
            "m_statuses_id": getStatus,
            "id": param_store
        }

        setRequestStatus(true)
        setRequestStatusMessage("Processing your request, please wait...")

        await productCategory.UpdateProductCategory(requestBody, data.StateToken).then((result) =>{
            console.log(result)
            setRequestStatus(true)
            setRequestStatusMessage("success")
        }).catch((err) =>{
            console.log(err)
            setRequestStatus(true)
            setRequestStatusMessage(err.message)
        })
    }
  
    const GetCategory = async(id) =>{

        const requestBody = {
            "id": id
        }

        setRequestStatus(true)
        setRequestStatusMessage("Processing your request, please wait...")

        await productCategory.GetProductCategory(data.StateToken, requestBody).then((result) =>{
            setRequestStatus(false)
            if(result.status){
                var res = result.data.data
                
                setcategory_title(res.category_title)
                setcategory_description(res.category_description)
                setStatus(res.m_statuses_id)
            }
        }).catch((err) =>{
            console.log(err)
            setRequestStatus(true)
            setRequestStatusMessage(err.message)
        })
    }

    const GetStatusesData = async() =>{
        await statuses.GetAllStatuses(data.StateToken).then((result) =>{
            if(result.status){
                var res = result.data.data
                setStatusData(res)
            }
        }).catch((err) =>{
            console.log(err)
            setRequestStatus(true)
            setRequestStatusMessage(err.message)
        })
    }

    useEffect(()=>{
        GetCategory(param_store)
        GetStatusesData()
    },[])

    return (
        <div>
            <CardComp 
            title={<PageHeaderTitle icon={<IconTableList classname='text-black'/> } title='Update Product Category'/>} 
            width='mb-3 w-full shadow-xl'
            >
                <form onSubmit={(event) => Update(event)}>
                    <div className="space-y-12">
                        <AlertMessage status={getRequestStatus} showStatus={getRequestStatus} message={getRequestStatusMessage}/>
                        <div className="border-b border-gray-900/10 pb-12">
                            <div className="mt-10 gap-5 grid grid-cols-2">
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
                        <ButtonComp title='Update Category'/>
                    </div>
                </form>
            </CardComp>
        </div>
    )
}

export default UpdateProductCategory
