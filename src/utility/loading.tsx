import React, { useState } from 'react'
import Lottie from 'react-lottie';
import animationData from '../assets/editor_loading.json'

export default function Loading() {
    const [isStopped, setIsStopped] = useState(false)
    const [isPaused, setIsPaused] = useState(false)
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };
    return (
        <div className='flex flex-1 h-screen items-center justify-center'>
            <Lottie options={defaultOptions}
                height='40%'
                width='40%'
                isStopped={isStopped}
                isPaused={isPaused} />
        </div>
    )
}
