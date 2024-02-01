import React from 'react'

import {
    Outlet,
} from "react-router-dom";

import {
  PageWrapper
} from '../../../components/_index'

const CrewIndex = () => {
  return (
    <PageWrapper heading='crew' caption='Create and manage crew'>
      <Outlet />
    </PageWrapper>
  )
}

export default CrewIndex
