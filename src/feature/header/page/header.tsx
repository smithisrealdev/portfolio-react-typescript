import React from 'react'
import SwitchDarkMode from '../components/switch_dark_mode'
import { Link } from "react-router-dom";
import Box from '@mui/material/Box';
export default function header() {
    return (
        <Box className="sticky top-0">
            <nav className='flex pl-10 pr-10 pt-5 m-0 w-full text-white justify-between items-center border-x-inherit bg-black' >
                <div className='font-atma'>
                    <Link to="/">Logo</Link>
                </div>
                <div className='flex w-2/5 justify-between font-semibold font-atma'>
                    {/* <h4>about</h4> */}
                    <Link to="about">About</Link>
                    <Link to="skill">Skill</Link>
                    <Link to="experiance">Experiance</Link>
                    <Link to="education">Education</Link>
                    <Link to="contact">Contact</Link>
                </div>
                <div className='flex'>
                    <SwitchDarkMode />
                    {/* <h4>/Change Language</h4> */}
                </div>
            </nav>
        </Box>
    )
}
