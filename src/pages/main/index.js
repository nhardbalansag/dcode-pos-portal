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
            <div>
              <Outlet />
            </div>
          </div> 
          <div className="drawer-side">
            <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
            <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
              {/* Sidebar content here */}
              <DrawerItemComp route='/portal/' itemTitle='dashboard'/>
              <DrawerItemComp route='/portal/products' itemTitle='products'/>
              <DrawerItemComp route='/portal/stores' itemTitle='stores'/>
              <DrawerItemComp route='/portal/crews' itemTitle='crews'/>
              <DrawerItemComp route='/portal/transactions' itemTitle='transactions'/>
              <DrawerItemComp route='/portal/expenses' itemTitle='expenses ledger'/>
              <DrawerItemComp route='/portal/payment' itemTitle='payment ledger'/>
              <DrawerItemComp route='/portal/cash' itemTitle='cash ledger'/>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainIndex
