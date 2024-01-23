import React from 'react'

import {
  Form,
  Link,
  Outlet,
  RouterProvider,
  createBrowserRouter,
  redirect,
  useActionData,
  useFetcher,
  useLocation,
  useNavigation,
  useRouteLoaderData,
} from "react-router-dom";

const MainIndex = () => {
  return (
    <div>
        <p>MAIN INDEX</p>
        <Outlet />
    </div>
  )
}

export default MainIndex
