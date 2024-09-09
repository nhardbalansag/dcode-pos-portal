import axios from 'axios';

const APIV1 = 'http://127.0.0.1:8000/api/admin/statuses/'

export const GetAllStatuses = async (token) => {
    return await axios({ 
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        method: 'GET', 
        url: `${APIV1}get-all`
    });
}
