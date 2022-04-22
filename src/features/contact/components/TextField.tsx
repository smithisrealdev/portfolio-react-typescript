import React from 'react'
type TextFieldProps = {
    placeholder: string,
    name: string,
    type: string,
    value: any,
    handleChangeValue: any
}
export default function TextField({ placeholder, name, type ,value,handleChangeValue}:TextFieldProps) {
    return (
        <div className='mb-5'>
            <textarea className='border-2 bg-white h-48 w-full focus:border-orange-700 outline-none px-2 text-black'  
            placeholder={placeholder}
            value={value}
            name={name} 
            onChange={handleChangeValue}
            required/>
        </div>
    )
}
