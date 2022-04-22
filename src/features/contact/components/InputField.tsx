import React from 'react'
type InputFieldProps = {
    placeholder: string,
    name: string,
    type: string,
    value: any,
    handleChangeValue: any
}
export default function InputField({ placeholder, name, type,value,handleChangeValue }: InputFieldProps) {
    return (
        <div>
            <input className='border-2 bg-white h-14 w-full focus:border-orange-700 outline-none px-2 text-black'
             placeholder={placeholder}
             type={type}
             name={name} 
             value={value}
             onChange={handleChangeValue}
             required/>
        </div>
    )
}
