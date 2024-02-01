import React from 'react'

import {
    Outlet,
} from "react-router-dom";

import {
  PageWrapper
} from '../../../components/_index'

const ProductIndex = () => {
  return (
    <PageWrapper heading='Products' caption='Create and manage products'>
      <Outlet />
    </PageWrapper>
  )
}

export default ProductIndex
