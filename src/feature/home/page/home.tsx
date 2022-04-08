import React from 'react';
import Blog from '../../personal_profile/page/personal_profile'
import About from '../../about_me/page/about'
import Skill from '../../skill/page/skill'
import Box from '@mui/material/Box';
function home() {
  return (
    <Box className='bg-main w-full'>
     {/* <Navbar /> */}
      <Blog />
      <Skill />
      <About />
      
    </Box>
  );
}

export default home;

