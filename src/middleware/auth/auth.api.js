import axios from 'axios';

const baseUrl = 'http://127.0.0.1:8000/api/'
const APIV1 = 'http://127.0.0.1:8000/api/'

export const LoginUser = async (reqBody) => {
    return await axios({ 
        headers: {
            'Content-Type': 'application/json',
        },
        method: 'POST', 
        url: `${baseUrl}login`, 
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
