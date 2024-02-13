import axios from 'axios';

const baseUrl = 'https://localhost:7021/api/'
const APIV1 = 'https://localhost:7021/api/v1/'

export const LoginUser = async (reqBody) => {
    return await axios({ 
        headers: {
            'Content-Type': 'application/json',
        },
        method: 'POST', 
        url: `${baseUrl}token/LoginUser`, 
        data: reqBody
    });
}

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
