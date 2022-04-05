import React from 'react'
type TextProps = {
   text: string
}
export default function Text({text}:TextProps) {
    return (
        <h1 className='font-atma'>
            {text}
        </h1>
    )
}
