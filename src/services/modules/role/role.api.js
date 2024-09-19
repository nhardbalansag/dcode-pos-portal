import axios from 'axios';

const APIV1 = 'http://pos.localtest.me/api/v1/'

export const CreateRole = async (reqBody, token) => {
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

export const GetAllRole = async (token) => {
    return await axios({ 
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        method: 'GET', 
        url: `${APIV1}Roles/GetAllRoles`
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

export const UpdateRoleData = async (reqBody, token) => {
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

export const GrabRole = async (token, id) => {
    return await axios({ 
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        method: 'GET', 
        url: `${APIV1}Store/${id}`
    });
}
