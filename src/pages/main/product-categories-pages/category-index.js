import React from 'react'

import {
    Outlet,
} from "react-router-dom";

import {
  PageWrapper
} from '../../../components/_index'

const CategoryIndex = () => {
  return (
    <PageWrapper heading='Categories' caption='Create and manage product categories'>
      <Outlet />
    </PageWrapper>
  )
}

export default CategoryIndex
