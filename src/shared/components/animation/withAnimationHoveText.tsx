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
            {splitted.map((textSplite) => {
                return (
                    <div key={textSplite} className={noUseEnter ? 'cursor-pointer font-medium text-7xl font-atma pb-6 text-color-custom z-20' : 'z-20 cursor-pointer font-medium text-7xl font-atma pb-6 text-white'} onMouseEnter={onEnter} onMouseLeave={noUseLeave ? onLeave : onUseLeave}>
                        {textSplite}
                    </div>
                )
            })}
        </div>
    )
}
