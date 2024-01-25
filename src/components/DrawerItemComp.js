import React from 'react'

import { Link } from "react-router-dom";

export default function DrawerItemComp({itemTitle = "title 1", route = '/'}) {
  return (
    <li>
        <Link to={route}>
            <p className='capitalize'>
                {itemTitle}
            </p>
        </Link>
    </li>
  )
}
