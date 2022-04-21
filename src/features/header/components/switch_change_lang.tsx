import React from 'react'
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import i18Next from 'i18next'
export default function switch_change_lang() {
    const [alignment, setAlignment] = React.useState<string>('en');

    const handleChange = (
        event: React.MouseEvent<HTMLElement>,
        newAlignment: string,
    ) => {
        setAlignment(newAlignment);
        i18Next.changeLanguage(newAlignment)
    };
    return (
        <ToggleButtonGroup
            className='border-2 h-10 mr-8'
            color= 'success'
            value={alignment ? alignment : 'en' }
            exclusive
            onChange={handleChange}
        >
            <ToggleButton value="en"><h1 className='text-white'>En</h1></ToggleButton>
            <ToggleButton value="th"><h1 className='text-white'>Th</h1></ToggleButton>
        </ToggleButtonGroup>
    )
}
