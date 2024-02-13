import { 
    REDUX_GET_USER_ACCESS_INFORMATION,
    REDUX_LOGOUT_USER
} from "./authAction"

const InitialStates  = {
    StateToken:                  "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJKV1RTZXJ2aWNlQWNjZXNzVG9rZW4iLCJqdGkiOiIzYTkxMWEyNC0wNDYzLTRkZDgtYTBiZi1kNTQ3ZTc4NmVhMTkiLCJpYXQiOjE3MDc4MDg1NTcsIlVzZXJJZCI6IjEiLCJEaXNwbGF5TmFtZSI6ImJlcm5hcmQgYmVybmFyZCIsIlVzZXJOYW1lIjoibmhhcmQiLCJFbWFpbCI6Im5oYXJkYmFsYW5zYWdAZ21haWwuY29tIiwibmJmIjoxNzA3ODA4NTU3LCJleHAiOjE3MDc4MDkxNTcsImlzcyI6IkpXVEF1dGhlbnRpY2F0aW9uU2VydmVyIiwiYXVkIjoiSldUU2VydmljZVBvc3RtYW5DbGllbnQifQ.zQCnc8PdezxvAqDNqS4R9XqKTpDNz4XCWYTWsY6KitGp0YpxPbHjoLVsY3pYoKfqwsJ9ZuAOT2YOlSTOr3DDjw",
    StateUserInformation:        []
}

export default (state = InitialStates, action) =>{
    switch(action.type){
        case REDUX_LOGOUT_USER:
            return{
                ...state,
                StateToken              : action.StateToken
            }
        case REDUX_GET_USER_ACCESS_INFORMATION:
            return{
                ...state,
                StateToken              : action.StateToken,
                StateUserInformation    : action.userInformation
            }
        default :
            return{
                ...state
            }
    }
    return state
}