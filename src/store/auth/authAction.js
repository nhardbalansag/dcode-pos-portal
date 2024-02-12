export const REDUX_GET_USER_ACCESS_INFORMATION = 'REDUX_GET_USER_ACCESS_INFORMATION';
export const REDUX_LOGOUT_USER = 'REDUX_LOGOUT_USER';

export const LoginUser = (token, userInformation) =>{
    return async (dispatch, getState) =>{
        dispatch({
            type                    :  REDUX_GET_USER_ACCESS_INFORMATION,
            StateToken              :  token,
            StateUserInformation    :  userInformation
        }) 
    }
}

export const LogoutUser = () =>{
    return async (dispatch, getState) =>{
        dispatch({
            type        : REDUX_LOGOUT_USER,
            StateToken  : null
        }) 
    }
}