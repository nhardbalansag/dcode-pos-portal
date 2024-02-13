import React from 'react'

export default function InputComp({isText = true, label = "label", hasError = false, error = 'error handling here', inputValue = '', onChangeValue = () => console.log("hello world")}) {

  return (
    <div>
        <label className="w-full max-w-xs form-control">
            <div className="label">
                <span className="capitalize label-text text-dark">{label}</span>
            </div>

            <input 
              value={inputValue} 
              onChange={onChangeValue} 
              type={isText ? "text" : "password"} 
              placeholder="Type here" 
              className={`input input-bordered w-full max-w-xs`} 
            />

            {
              hasError 
              && 
                <div className="label">
                  <span className="text-red-500 label-text-alt">{error}</span>
                </div>
            }
            
        </label>
    </div>
  )
}
