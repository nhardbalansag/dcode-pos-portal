import axios from 'axios';

const baseUrl = 'http://pos.localtest.me/api/'

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

