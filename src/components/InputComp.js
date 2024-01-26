import React from 'react'

export default function InputComp({isText = true, label = "label"}) {

  return (
    <div>
        <label className="form-control w-full max-w-xs">
            <div className="label">
                <span className="label-text text-dark capitalize">{label}</span>
            </div>
            <input type={isText ? "text" : "password"} placeholder="Type here" className={`input input-bordered w-full max-w-xs`} />
            <div className="label">
                <span className="label-text-alt text-red-500">error handling here</span>
            </div>
        </label>
    </div>
  )
}
