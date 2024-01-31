import React from 'react'

import {
  Outlet,
} from "react-router-dom";

import {
  NavigationBar,
  DrawerItemComp,
} from '../../components/_index'

const MainIndex = () => {
  return (
    <div>
      <div>
        <div className="drawer">
          <input id="my-drawer" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            <NavigationBar/>
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
              <DrawerItemComp route='/portal' itemTitle='dashboard'/>
              <DrawerItemComp route='/portal/products' itemTitle='products'/>
              <DrawerItemComp 
              route='/portal/products' 
              itemTitle='products' 
              innerRoutes={
                [
                  {path: '/portal/categories', title: 'categories'},
                  {path: '/portal/products', title: 'products'}
                ]
              }/>
              <DrawerItemComp route='/portal/stores' itemTitle='stores'/>
              <DrawerItemComp route='/portal/crews' itemTitle='crews'/>
              <DrawerItemComp route='/portal/transactions' itemTitle='transactions'/>
              <DrawerItemComp 
              route='/portal/cash' 
              itemTitle='accounting' 
              innerRoutes={
                [
                  {path: '/portal/accounting/expenses', title: 'expenses ledger'},
                  {path: '/portal/accounting/payment', title: 'payment ledger'},
                  {path: '/portal/accounting/cash', title: 'cash ledger'},
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
