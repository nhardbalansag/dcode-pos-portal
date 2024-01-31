import React from 'react'

export default function InputComp({isText = true, label = "label"}) {

  return (
    <div>
        <label className="w-full max-w-xs form-control">
            <div className="label">
                <span className="capitalize label-text text-dark">{label}</span>
            </div>
            <input type={isText ? "text" : "password"} placeholder="Type here" className={`input input-bordered w-full max-w-xs`} />
            <div className="label">
                <span className="text-red-500 label-text-alt">error handling here</span>
            </div>
        </label>
    </div>
  )
}
