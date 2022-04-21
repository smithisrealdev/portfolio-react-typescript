import React from 'react'
import { onEnter, onLeave, onUseLeave } from './withHoverText'

type TextProps = {
    text: string
    noUseLeave: boolean,
    noUseEnter: boolean
}
export default function withAnimationHoveText({ text, noUseLeave, noUseEnter }: TextProps) {
    var splitted = text.split("|");
    return (
        <div className='flex'>
            {splitted.map((textSplite,index) => {
                return (
                    <div key={index} className={noUseEnter ? 'cursor-pointer font-semibold xl:text-7xl lg:text-5xl md:text-4xl sm:text-4xl font-atma pb-6 sm:pb-2 text-color-custom z-20' : 'z-20 cursor-pointer font-bold md:text-4xl lg:text-5xl xl:text-7xl sm:text-4xl font-atma pb-6 sm:pb-2 text-white'} onMouseEnter={onEnter} onMouseLeave={noUseLeave ? onLeave : onUseLeave}>
                        {textSplite}
                    </div>
                )
            })}
        </div>
    )
}
