import React from 'react'
type TextProps = {
   text: string,
   className: string
}
export default function Text({text,className}:TextProps) {
    return (
        <h1 className={className ? className : 'font-atma'}>
            {text}
        </h1>
    )
}
