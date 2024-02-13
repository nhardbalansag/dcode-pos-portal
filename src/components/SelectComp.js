import React from 'react'

export default function SelectComp({label = 'test', options = ["active", "pending"], inputValue = '', onChangeValue = () => console.log("hello world")}) {
  return (
    <label className="w-full max-w-xs form-control">
        <div className="label">
            <span className="label-text">{label}</span>
        </div>
        <select value={inputValue} onChange={onChangeValue} className="select select-bordered">
            {options.map((item, key) =>
              <option key={key} value={item}>{item}</option>
            )}
        </select>
    </label>
  )
}
