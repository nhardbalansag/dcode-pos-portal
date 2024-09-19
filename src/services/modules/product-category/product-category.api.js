import axios from 'axios';

const APIV1 = 'http://pos.localtest.me/api/admin/product-category/'

export const CreateProductCategory = async (reqBody, token) => {

    var formdata = new FormData();

    formdata.append("category_title", reqBody.category_title);
    formdata.append("category_description", reqBody.category_description);
    formdata.append("store_id", reqBody.store_id);
    formdata.append('resources', reqBody.resources);

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

export const GetAllProductCategory = async (token) => {
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

export const UpdateProductCategory = async (reqBody, token) => {
    return await axios({ 
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        method: 'POST', 
        url: `${APIV1}update`,
        data: reqBody
    });
}

export const GetProductCategory = async (token, reqBody) => {
    return await axios({ 
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        method: 'POST', 
        url: `${APIV1}get-product-category`,
        data: reqBody
    });
}