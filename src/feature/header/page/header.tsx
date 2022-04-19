
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';
import Grid from '@mui/material/Grid';
import SwitchDarkMode from '../components/switch_dark_mode'
import { Link } from "react-router-dom";
import SwitchChangeLang from '../components/switch_change_lang'
import { onEnter, onLeave } from '../../../shared/components/animation/withHoverText'
import { FormatMessage } from '../../change_lang/change'


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
    }
];

const header = () => {
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <Container maxWidth="xl" className='pb-32'>
            <AppBar position="fixed" >
                <Toolbar disableGutters >
                    <Box className='pl-6 pr-6 pt-5 b-36 m-0 w-full h-full text-white justify-between items-center bg-main '>
                        <Container maxWidth="xl">
                            <Grid className='flex items-center'>
                                <Grid
                                    className='font-atma font-bold'
                                    sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
                                    onMouseEnter={onEnter} onMouseLeave={onLeave}
                                >
                                    <Link to="/">SmiTH</Link>
                                </Grid>
                                <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                                    <IconButton
                                        size="large"
                                        aria-label="account of current user"
                                        aria-controls="menu-appbar"
                                        aria-haspopup="true"
                                        onClick={handleOpenNavMenu}
                                        color="inherit"
                                    >
                                        <MenuIcon />
                                    </IconButton>
                                    <Menu
                                        id="menu-appbar"
                                        anchorEl={anchorElNav}
                                        anchorOrigin={{
                                            vertical: 'bottom',
                                            horizontal: 'left',
                                        }}
                                        keepMounted
                                        transformOrigin={{
                                            vertical: 'top',
                                            horizontal: 'left',
                                        }}
                                        open={Boolean(anchorElNav)}
                                        onClose={handleCloseNavMenu}
                                        sx={{
                                            display: { xs: 'block', md: 'none' },
                                        }}
                                    >
                                        {pages.map((items) => (
                                            <MenuItem key={items.page} onClick={handleCloseNavMenu}>
                                                <Link to={items.route}>{FormatMessage(items.page)}</Link>
                                            </MenuItem>
                                        ))}
                                    </Menu>
                                </Box>
                                <Box className='flex gap-12 justify-end text-center font-atma font-semibold outline-none' sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                                    {pages.map((items) => (
                                    
                                        <Box
                                            // onClick={handleCloseNavMenu}
                                            key={items.page}
                                            sx={{ my: 2, color: 'white', display: 'block' }}
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
                    </Box>
                </Toolbar>
            </AppBar>
        </Container>
    );
};
export default header;
