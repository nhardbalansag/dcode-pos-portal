import React from 'react'

import {
    IconArrowDownUp
} from '../icons/_index'

export default function NavigationBar({brandTitle = "DCODE", logout = () => console.log("hello world")}) {
  return (
    <div className="navbar bg-base-100">
        <div className="flex-none">
            <label htmlFor="my-drawer" className="btn btn-square btn-ghost drawer-button">
                <IconArrowDownUp/>
            </label>
        </div>
        <div className="flex-1">
            <a className="btn btn-ghost text-xl">{brandTitle}</a>
        </div>
        <div className="flex-none">
            <ul className="menu menu-horizontal px-1">
                <li>
                    <details>
                        <summary>
                            Action
                        </summary>
                        <ul className="p-2 bg-base-100 rounded-t-none">
                            <li><a onClick={logout}>Logout</a></li>
                        </ul>
                    </details>
                </li>
            </ul>
        </div>
    </div>
  )
}
