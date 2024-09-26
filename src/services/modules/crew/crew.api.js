import axios from 'axios';

const APIV1 = 'http://pos.localtest.me/api/admin/user-management/'

export const CreateUser = async (reqBody, token) => {
    return await axios({ 
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        method: 'POST', 
        url: `${APIV1}create`, 
        data: reqBody
    });
}

export const GetAllCrew = async (token) => {
    return await axios({ 
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        method: 'GET', 
        url: `${APIV1}get-all`
    });
}

export const GetUsers = async (token, reqBody) => {
    return await axios({ 
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        method: 'POST', 
        url: `${APIV1}get-user`,
        data: reqBody
    });
}

export const UpdateUser = async (reqBody, token) => {
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
