import React from 'react'

export default function SelectComp({label = 'test', module = null, hasOptionContent = false, options = [], inputValue = '', onChangeValue = () => console.log("hello world")}) {

  const defaultSelect = hasOptionContent ? options : ["active", "pending"]
  
  return (
    <label className="w-full max-w-xs form-control">
        <div className="label"> 
            <span className="label-text">{label}</span>
        </div>
        <select value={inputValue} onChange={onChangeValue} className="select select-bordered">
            {
              defaultSelect.map((item, key) =>
                <option key={key} value={ hasOptionContent ? item.id : item}>
                  { 
                    hasOptionContent 
                    ?
                      item.hasOwnProperty("store_name") 
                      ? item.store_name 
                      : (item.hasOwnProperty("role_title") ? item.role_title : item)
                    : item
                  }
                </option>
              )
            }
        </select>
    </label>
  )
}