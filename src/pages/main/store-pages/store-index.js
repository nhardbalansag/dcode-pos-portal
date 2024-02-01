import React from 'react'

import {
    Outlet,
} from "react-router-dom";

import {
  PageWrapper
} from '../../../components/_index'

const StoreIndex = () => {
  return (
    <PageWrapper heading='Stores' caption='Create and manage stores'>
      <Outlet />
    </PageWrapper>
  )
}

export default StoreIndex
