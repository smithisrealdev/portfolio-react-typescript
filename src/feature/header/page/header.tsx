import React from 'react'
import SwitchDarkMode from '../components/switch_dark_mode'
import { Link } from "react-router-dom";
import Box from '@mui/material/Box';

import { onEnter, onLeave } from '../../../shared/components/animation/withHoverText'
export default function header() {
    return (
        <Box className="sticky top-0 z-50">
            <nav className='flex pl-10 pr-10 pt-5 m-0 w-full text-white justify-between items-center border-x-inherit bg-main' >
                <div className='font-atma'>
                    <Link to="/">Logo</Link>
                </div>
                <div className='flex w-2/5 justify-between font-semibold font-atma'>
                    {/* <h4>about</h4> */}
                    <Box onMouseEnter={onEnter} onMouseLeave={onLeave}>
                        <Link to="about">About</Link>
                    </Box>
                    <Box onMouseEnter={onEnter} onMouseLeave={onLeave}>
                        <Link to="skill">Skill</Link>
                    </Box>
                    <Box onMouseEnter={onEnter} onMouseLeave={onLeave}>
                        <Link to="experiance">Experiance</Link>
                    </Box>
                    <Box onMouseEnter={onEnter} onMouseLeave={onLeave}>
                        <Link to="education">Education</Link>
                    </Box>
                    <Box onMouseEnter={onEnter} onMouseLeave={onLeave}>
                        <Link to="contact">Contact</Link>
                    </Box>
                </div>
                <div className='flex'>
                    <SwitchDarkMode />
                    {/* <h4>/Change Language</h4> */}
                </div>
            </nav>
        </Box>
    )
}
