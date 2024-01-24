import React from 'react'

import {
  InputComp,
  ButtonComp,
  CardComp
} from '../../components/_index'

const Login = () => {

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
