import React from 'react'

export default function SelectComp() {
  return (
    <label className="w-full max-w-xs form-control">
        <div className="label">
            <span className="label-text">Pick the best fantasy franchise</span>
            <span className="label-text-alt">Alt label</span>
        </div>
        <select className="select select-bordered">
            <option disabled selected>Pick one</option>
            <option>Star Wars</option>
            <option>Harry Potter</option>
            <option>Lord of the Rings</option>
            <option>Planet of the Apes</option>
            <option>Star Trek</option>
        </select>
        <div className="label">
            <span className="label-text-alt">Alt label</span>
            <span className="label-text-alt">Alt label</span>
        </div>
    </label>
  )
}
