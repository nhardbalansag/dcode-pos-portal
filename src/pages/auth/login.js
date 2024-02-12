import React, { useEffect } from 'react'
import { useDispatch } from "react-redux";

import {
  InputComp,
  ButtonComp,
  CardComp
} from '../../components/_index'

import * as auth from '../../middleware/auth/auth.api'
import * as AuthAction from '../../store/auth/authAction'

const Login = () => {

  const dispatch = useDispatch()

  const LoginUser = async () =>{

    const requestBody = {
      "username": "nhard",
      "password": "helloworld"
    }

    await auth.LoginUser(requestBody).then((result) =>{

      var token = result.data.token
      var userInformation = result.data.data

      dispatch(AuthAction.LoginUser(token, userInformation))
      
    }).catch((err) =>{
      console.log(err)
    })
  }

  const _form = () =>{
    return(
      <div>
        <InputComp/>
        <InputComp isText={false}/>
        <ButtonComp onPress={() => LoginUser()} title='Login'/>
      </div>
    )
  }
  return (
    <div className='flex justify-center h-screen'>
        <div className='flex flex-col justify-center'>
          <CardComp children={_form()} title='Login' titleBadge={'admin'}/>
        </div>
    </div>
  )
}

export default Login
