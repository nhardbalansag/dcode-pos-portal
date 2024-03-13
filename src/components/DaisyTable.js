import React from 'react'

import {
    InputComp,
    ButtonComp
} from './_index'

const headersData = ["", "category", "product", "price", "store"]

const rowData = [
    [
        1, "coffee", "coffee 1", 150, "store 1"
    ], 
    [
        2, "coffee", "coffee 2", 150, "store 2"
    ]
]

export default function DaisyTable({children, headers = headersData, dataRow = rowData, enableButton = false}) {
  return (
    <div className="px-2 overflow-x-auto">
        <div className='flex flex-row items-end'>
            <InputComp label='search'/>
            <ButtonComp className='ml-3 btn-primary' title='search'/>
        </div>
        <table className="table table-zebra">
            {/* head */}
            <thead>
                <tr>
                    {headers.map((item, index) =>
                        <th key={index} className='text-center capitalize'>{item}</th>
                    )}
                    {enableButton ? <th className='text-center '>Actions</th> : <></>}
                </tr>
            </thead>
            <tbody>
                {children}
            </tbody>
        </table>
        <div className="join mt-5">
            <button className="join-item btn">«</button>
            <button className="join-item btn">Page 22</button>
            <button className="join-item btn">»</button>
        </div>
    </div>
  )
}
