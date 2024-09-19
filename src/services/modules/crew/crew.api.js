import axios from 'axios';

const APIV1 = 'http://pos.localtest.me/api/v1/'

export const CreateUser = async (reqBody, token) => {
    return await axios({ 
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        method: 'POST', 
        url: `${APIV1}User/CreateUser`, 
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
        url: `${APIV1}User`
    });
}

export const UpdateToDelete = async (reqBody, token) => {
    return await axios({ 
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        method: 'PATCH', 
        url: `${APIV1}User/UpdateUser`,
        data: reqBody
    });
}

export const UpdateUser = async (reqBody, token) => {
    return await axios({ 
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        method: 'PATCH', 
        url: `${APIV1}User/UpdateUser`,
        data: reqBody
    });
}

export const GrabUser = async (token, id) => {
    return await axios({ 
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        method: 'GET', 
        url: `${APIV1}User/${id}`
    });
}
