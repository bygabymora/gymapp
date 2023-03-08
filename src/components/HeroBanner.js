import React from 'react';
import { Box, Stack, Typography } from '@mui/material';

import HeroBannerImage from '../assets/images/banner.png';

const HeroBanner = () => (
  <Box sx={{ mt: { lg: '212px', xs: '70px' }, ml: { sm: '50px' } }} position="relative" p="20px">
    <Typography className='heroBannerTitle' fontFamily='var(--paragraph)' fontWeight='bold' fontSize='3rem'>The Gym <br/> App</Typography>
    <Typography fontFamily='var(--header)' fontWeight='bold' fontSize='4rem' sx={{ fontSize: { lg: '44px', xs: '40px' } }} mb="23px" mt="30px">
      Sweat, Smile <br />
      And Repeat
    </Typography>
    <Typography fontFamily='var(--header)' fontWeight='bold' fontSize='1rem' color='var(--light-blue)'>
      Check out the most effective exercises personalized to you
    </Typography>
    <Stack>
      <a href="#exercises" fontFamily='var(--header)' fontWeight='bold' style={{ marginTop: '45px', textDecoration: 'none', width: '200px', textAlign: 'center', background: '#FF2625', padding: '14px', fontSize: '22px', textTransform: 'none', color: 'white', borderRadius: '4px' }}>Explore Exercises</a>
    </Stack>
    <img src={HeroBannerImage} alt="hero-banner" className="heroBannerImg" />
  </Box>
);

export default HeroBanner;