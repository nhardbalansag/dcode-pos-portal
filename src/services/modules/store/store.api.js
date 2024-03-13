import axios from 'axios';

const APIV1 = 'https://localhost:7021/api/v1/'

export const CreateStore = async (reqBody, token) => {
    return await axios({ 
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        method: 'POST', 
        url: `${APIV1}Store/CreateStore`, 
        data: reqBody
    });
}

export const GetAllStore = async (token) => {
    return await axios({ 
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        method: 'GET', 
        url: `${APIV1}Store`
    });
}

export const UpdateToDelete = async (reqBody, token) => {
    return await axios({ 
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        method: 'PATCH', 
        url: `${APIV1}Store/UpdateStore`,
        data: reqBody
    });
}

export const UpdateStoreData = async (reqBody, token) => {
    return await axios({ 
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        method: 'PATCH', 
        url: `${APIV1}Store/UpdateStore`,
        data: reqBody
    });
}

export const GrabStore = async (token, id) => {
    return await axios({ 
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        method: 'GET', 
        url: `${APIV1}Store/${id}`
    });
}
