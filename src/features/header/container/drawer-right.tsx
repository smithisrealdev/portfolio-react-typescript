import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from "react-router-dom";
import { onEnter, onLeave } from '../../../shared/components/animation/withHoverText'
import Links from '@mui/material/Link';
import { FormatMessage } from '../../lang/change'
import ResumePDF from '../../../assets/ResumeApichet.pdf';
import Text from '../../../shared/components/Text'
type Anchor = 'top' | 'left' | 'bottom' | 'right';
const pages = [
  {
    page: 'Home',
    route: ''
  },
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
  },
  {
    page: 'Resume',
    route: 'Resume'
  },
];
export default function DrawerRight() {
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
      (event: React.KeyboardEvent | React.MouseEvent) => {
        if (
          event.type === 'keydown' &&
          ((event as React.KeyboardEvent).key === 'Tab' ||
            (event as React.KeyboardEvent).key === 'Shift')
        ) {
          return;
        }

        setState({ ...state, [anchor]: open });
      };

  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
      className='h-full w-full flex justify-center items-center bg-main text-white'
    >
      <List>
        {pages.map((list, index) => (
          list.page !== "Resume" ? (
            <ListItem button key={list.page}>
              <ListItemText onMouseEnter={onEnter} onMouseLeave={onLeave} primary={
                <Link to={list.route}> <h1 className='font-atma text-2xl font-semibold text-center'>{list.page}</h1></Link>
              } />
            </ListItem>
          ) : <div key={list.page} className='w-full cursor-pointer p-2  bg-resume font-atma text-2xl font-bold text-center border-2 border-red-500'>
            <Links href={ResumePDF} target='_blank' download underline="none">
              <h1 className='text-white'>
                {FormatMessage('main.resume')}
              </h1>
            </Links>
          </div>
        ))}

      </List>
    </Box>
  );

  return (
    <div >
      <React.Fragment>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={toggleDrawer('right', true)}
          color="inherit"
        >
          <MenuIcon />
        </IconButton>
        <Drawer
          anchor='right'
          open={state['right']}
          onClose={toggleDrawer('right', false)}

        >
          {list('right')}
        </Drawer>
      </React.Fragment>
    </div>
  );
}





