import React from 'react';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';

import Logo from '../assets/images/Logo.png';

const Navbar = () => (
  <Stack  direction= 'row' justifyContent= 'space-around'>
    <Link to="/">
      <img src={Logo} alt="logo" className='logo'  />
    </Link>
    <Stack direction='row' className='navBarWraper'>
      <Link className='navBarItem' to="/" >Home</Link>
      <a href="#exercises" className='navBarItem'>Exercises</a>
    </Stack>
  </Stack>
);

export default Navbar;