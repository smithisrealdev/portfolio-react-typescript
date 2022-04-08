import React from 'react'
import SwitchDarkMode from '../components/switch_dark_mode'
import { Link } from "react-router-dom";
import Box from '@mui/material/Box';
import SwitchChangeLang from '../components/switch_change_lang'
import { onEnter, onLeave } from '../../../shared/components/animation/withHoverText'
import { FormatMessage } from '../../change_lang/change'
export default function header() {

    return (
        <Box className="sticky top-0 z-50">
            <nav className='flex pl-20 pt-5 m-0 w-full h-full text-white justify-between items-center border-x-inherit bg-main' >
                <div className='font-semibold font-atma' onMouseEnter={onEnter} onMouseLeave={onLeave}>
                    <Link to="/">SmiTH</Link>
                </div>
                <div className='flex w-2/5 justify-between font-semibold font-atma'>
                    {/* <h4>about</h4> */}
                    <Box onMouseEnter={onEnter} onMouseLeave={onLeave}>
                        <Link to="about">{FormatMessage('header.about')}</Link>
                    </Box>
                    <Box onMouseEnter={onEnter} onMouseLeave={onLeave}>
                        <Link to="skill">{FormatMessage('header.skill')}</Link>
                    </Box>
                    <Box onMouseEnter={onEnter} onMouseLeave={onLeave}>
                        <Link to="experiance">{FormatMessage('header.experiance')}</Link>
                    </Box>
                    <Box onMouseEnter={onEnter} onMouseLeave={onLeave}>
                        <Link to="education">{FormatMessage('header.education')}</Link>
                    </Box>
                    <Box onMouseEnter={onEnter} onMouseLeave={onLeave}>
                        <Link to="contact">{FormatMessage('header.contact')}</Link>
                    </Box>
                </div>
                <div className='flex w-3/12 items-center justify-center'>
                    <SwitchChangeLang />
                    <SwitchDarkMode />
                    <h1 className='font-atma text-sm'>
                        {FormatMessage('header.version')}
                    </h1>

                </div>
            </nav>
        </Box>
    )
}
