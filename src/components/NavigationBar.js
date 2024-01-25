import React from 'react'

export default function NavigationBar({brandTitle = "DCODE"}) {
  return (
    <div className="navbar bg-base-100">
        <div className="flex-none">
            <label htmlFor="my-drawer" className="btn btn-square btn-ghost drawer-button">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
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
                            <li><a>Logout</a></li>
                        </ul>
                    </details>
                </li>
            </ul>
        </div>
    </div>
  )
}
