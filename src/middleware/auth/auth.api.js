import axios from 'axios';

const baseUrl = 'https://localhost:7021/api/'

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
