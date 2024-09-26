import React, { useEffect, useState } from 'react'

export default function SelectComp({label = 'test', module = null, hasOptionContent = false, options = [], inputValue = '', onChangeValue = () => console.log("hello world")}) {

  const defaultSelect = hasOptionContent ? options : ["active", "pending"]

  const [inputValueData, setInputValueData] = useState('');

  const onSelectChangeValue = (event) => {
    setInputValueData(event.target.value);
    onChangeValue(event.target.value)
  };

  useEffect(() =>{
    setInputValueData(inputValue);
    onChangeValue(inputValue)
  })
  
  return (
    <label className="w-full max-w-xs form-control">
        <div className="label"> 
            <span className="label-text">{label}</span>
        </div>
        <select value={inputValueData} onChange={onSelectChangeValue} className="select select-bordered">
          <option value={null}>Select an option</option>
            {
              defaultSelect.map((item, key) =>
                <option key={key} value={ hasOptionContent ? item.id : item}>
                  { 
                    hasOptionContent 
                    ?
                      item.hasOwnProperty("store_name") 
                      ? item.store_name 
                      : (
                          item.hasOwnProperty("role_title") 
                          ? item.role_title 
                          : 
                            (
                              item.hasOwnProperty("status_name") 
                              ? item.status_name 
                              : 
                                (
                                  item.hasOwnProperty("category_title") 
                                  ? item.category_title  
                                  : (item.hasOwnProperty("unit_title") ? `${item.unit_title} (${item.unit_code})` : item )
                                )
                            )
                        )
                    : item
                  }
                </option>
              )
            }
        </select>
    </label>
  )
}