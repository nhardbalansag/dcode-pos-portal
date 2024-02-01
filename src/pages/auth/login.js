import React, { useEffect } from 'react'

import {
  InputComp,
  ButtonComp,
  CardComp
} from '../../components/_index'

import * as auth from '../../middleware/auth/auth.api'

const Login = () => {

  const LoginUser = async () =>{

    const requestBody = {
      "username": "nhard",
      "password": "helloworld"
    }

    await auth.LoginUser(requestBody).then((result) =>{
      console.log(result)
    }).catch((err) =>{
      console.log(err)
    })
  }

  useEffect(() =>{
    LoginUser()
  },[]) 

  const _form = () =>{
    return(
      <div>
        <InputComp/>
        <InputComp isText={false}/>
        <ButtonComp title='Login'/>
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
