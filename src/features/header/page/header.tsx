
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

import Container from '@mui/material/Container';
// import MenuItem from '@mui/material/MenuItem';
import Grid from '@mui/material/Grid';
import SwitchDarkMode from '../components/switch_dark_mode'
import { Link } from "react-router-dom";
// import SwitchChangeLang from '../components/switch_change_lang'
import { onEnter, onLeave } from '../../../shared/components/animation/withHoverText'
import DrawerRight from '../container/drawer-right'


const pages = [
    {
        page: 'Component',
        route: 'Component'
    },
    {
        page: 'Hobby',
        route: 'Hobby'
    },
    {
        page: 'Project',
        route: 'Project'
    },
    {
        page: 'Contact',
        route: 'Contact'
      }
];

const header = () => {
    return (
        <Container maxWidth="xl" className='pb-32'>
            <AppBar position="fixed" >
                <Toolbar disableGutters className='pl-6 pr-6 b-36 m-0 w-full h-full text-white justify-between items-center bg-main' >
                        <Container>
                            <Grid item xs={12} className='flex items-center justify-between  '>
                                <Grid
                                    item xs={12}
                                    className='font-atma font-bold text-xl'
                                    onMouseEnter={onEnter} onMouseLeave={onLeave}
                                >
                                    <Link to="/">SmiTH</Link>
                                </Grid>
                                <Box className='ss:grid sm:grid md:grid xl:hidden lg:hidden'>
                                 
                                    <DrawerRight />
                                </Box>
                               
                                <Box className='gap-12 justify-end text-center font-atma text-xl font-semibold outline-none ss:hidden sm:hidden md:hidden xl:flex lg:flex '>
                                    {pages.map((items) => (
                                    
                                        <Box
                                            // onClick={handleCloseNavMenu}
                                            key={items.page}
                                            className='block '
                                            onMouseEnter={onEnter} onMouseLeave={onLeave}
                                        >
                                            <Link to={items.route}>{items.page}</Link>
                                        </Box>
                                    ))}
                                </Box>
                                {/* <Box sx={{ flexGrow: 0 }}>
                                    <Grid className='flex items-center justify-center'>
                                        <SwitchChangeLang />
                                        <SwitchDarkMode />
                                        <h1 className='font-atma text-sm'>
                                            {FormatMessage('header.version')}
                                        </h1>
                                    </Grid>
                                </Box> */}
                            </Grid>
                        </Container>
                </Toolbar>
            </AppBar>
        </Container>
    );
};
export default header;
