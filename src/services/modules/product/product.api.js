import axios from 'axios';

const APIV1 = 'http://pos.localtest.me/api/admin/product/'

export const CreateProduct = async (reqBody, token) => {

    var formdata = new FormData();

    formdata.append("product_name", reqBody.product_name);
    formdata.append("product_description", reqBody.product_description);
    formdata.append("product_category_id", reqBody.product_category_id);
    formdata.append("store_id", reqBody.store_id);
    formdata.append('resources', reqBody.resources);
    formdata.append('resources_id', reqBody.resources_id);

    return await axios({ 
        headers: {
            'Content-Type': 'multipart/form-data',
            'Authorization': `Bearer ${token}`
        },
        method: 'POST', 
        url: `${APIV1}create`, 
        data: formdata
    });
}

export const GetAllProduct = async (token) => {
    return await axios({ 
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        method: 'GET', 
        url: `${APIV1}get-all`
    });
}

export const UpdateToDelete = async (reqBody, token) => {
    return await axios({ 
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        method: 'POST', 
        url: `${APIV1}delete`,
        data: reqBody
    });
}

export const UpdateProduct = async (reqBody, token) => {

    var formdata = new FormData();

    formdata.append("product_name", reqBody.product_name);
    formdata.append("product_description", reqBody.product_description);
    formdata.append("product_category_id", reqBody.product_category_id);
    formdata.append("store_id", reqBody.store_id);
    formdata.append("m_statuses_id", reqBody.m_statuses_id);
    formdata.append('resources', reqBody.resources);

    return await axios({ 
        headers: {
            'Content-Type': 'multipart/form-data',
            'Authorization': `Bearer ${token}`
        },
        method: 'POST', 
        url: `${APIV1}update`,
        data: reqBody
    });
}

export const GetProduct = async (token, reqBody) => {
    return await axios({ 
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        method: 'POST', 
        url: `${APIV1}get-product`,
        data: reqBody
    });
}