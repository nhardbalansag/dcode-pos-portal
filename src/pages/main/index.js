import React from 'react'
import { useDispatch } from "react-redux";

import {
  Outlet,
} from "react-router-dom";

import {
  NavigationBar,
  DrawerItemComp,
} from '../../components/_index'

import * as auth from '../../middleware/auth/auth.api'
import * as AuthAction from '../../store/auth/authAction'

const MainIndex = () => {

  const dispatch = useDispatch()

  const LogoutUser = async () =>{
    dispatch(AuthAction.LogoutUser())
  }

  return (
    <div>
      <div>
        <div className="drawer">
          <input id="my-drawer" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            <NavigationBar logout={() => LogoutUser()}/>
            {/* navigation pages */}
            <div className=''>
              <div className='w-11/12 mx-auto'>
                <Outlet />
              </div>
            </div>
          </div> 
          <div className="drawer-side">
            <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
            <ul className="min-h-full p-4 menu w-80 bg-base-200 text-base-content">
              {/* Sidebar content here */}
              <DrawerItemComp route='/' itemTitle='dashboard'/>
              <DrawerItemComp 
              route='/products' 
              itemTitle='products' 
              innerRoutes={
                [
                  {path: '/categories', title: 'categories'},
                  {path: '/products', title: 'products'}
                ]
              }/>
              <DrawerItemComp route='/stores' itemTitle='stores'/>
              <DrawerItemComp route='/crews' itemTitle='crews'/>
              <DrawerItemComp route='/transactions' itemTitle='transactions'/>
              <DrawerItemComp 
              route='/cash' 
              itemTitle='accounting' 
              innerRoutes={
                [
                  {path: '/accounting/expenses', title: 'expenses ledger'},
                  {path: '/accounting/payment', title: 'payment ledger'},
                  {path: '/accounting/cash', title: 'cash ledger'},
                ]
              }/>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainIndex
