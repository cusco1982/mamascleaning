import React from 'react'


import { Button, Box, Container, Grid, Typography, TextField } from '@mui/material'
import Image from 'next/image'

import HomeIcon from '@mui/icons-material/Home';
import BusinessIcon from '@mui/icons-material/Business';
import MapsHomeWorkIcon from '@mui/icons-material/MapsHomeWork';
import AddHomeWorkIcon from '@mui/icons-material/AddHomeWork';
import ConstructionIcon from '@mui/icons-material/Construction';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';


export default function page() {
  return (
    <Container maxWidth="1" style={{ backgroundColor: '', margin: "auto", backgroundColor: '', marginTop: '20vh' }}>









      <Grid container style={{ margin: 'auto', backgroundColor: '' }}>



        <Grid item md={6} style={{ backgroundColor: '', position: 'relative' }}>
          <Image
            src={'/mcs/jumboimg.png'}
            fill
            position='absolute'
            style={{ objectFit: 'contain' }}
          />
        </Grid>


        <Grid item md={6} px={2} style={{ backgroundColor: '', position: 'relative' }}>
          <Typography pb={4} style={{ color: '#40A5FE' }} variant='h4'>Why Choose Mama's Cleaning Service?</Typography>

          <div style={{ paddingBottom: "20px" }}>
            <Typography style={{fontWeight:"550"}} variant='h6'>1. Exceptional Cleaning Quality</Typography>
            <Typography variant='body1'>At Mama's Cleaning Service, we prioritize delivering exceptional cleaning quality to our clients. Our team of experienced and skilled professionals ensures every corner of your space is spotless and sanitized.</Typography>
          </div>


          <div style={{ paddingBottom: "20px" }}>

            <Typography style={{fontWeight:"550"}} variant='h6'>2. Personalized Cleaning Plans</Typography>
            <Typography variant='body1'>We understand that every space is unique, and your cleaning needs may vary. That's why we offer personalized cleaning plans tailored to your specific requirements. Whether it's a one-time deep cleaning or a recurring cleaning schedule, we've got you covered.</Typography>
          </div>





          <div style={{ paddingBottom: "20px" }}>

            <Typography style={{fontWeight:"550"}} variant='h6'>3. Reliable and Punctual</Typography>
            <Typography variant='body1'>Punctuality and reliability are our hallmarks. When you schedule a cleaning with Mama's Cleaning Service, you can trust us to arrive on time and complete the job efficiently, respecting your valuable time.</Typography>
          </div>


        </Grid>
      </Grid>





      <Grid maxWidth={'xl'} container style={{ backgroundColor: '', margin: 'auto', paddingTop: '40px', paddingBottom: '40px' }} justifyContent={'space-around'}>

        <Grid item textAlign={'center'}>
          <HomeIcon sx={{ fontSize: 60, color: '#40A5FE' }} />
          <Typography variant='h6'>Residential</Typography>
        </Grid>

        <Grid item textAlign={'center'}>
          <BusinessIcon sx={{ fontSize: 60, color: '#40A5FE' }} />
          <Typography variant='h6'>Commercial</Typography>
        </Grid>

        <Grid item textAlign={'center'}>
          <MapsHomeWorkIcon sx={{ fontSize: 60, color: '#40A5FE' }} />
          <Typography variant='h6'>AirBNB</Typography>
        </Grid>

        <Grid item textAlign={'center'}>
          <AddHomeWorkIcon sx={{ fontSize: 60, color: '#40A5FE' }} />
          <Typography variant='h6'>Move-In/Move-Out <br /> Cleaning</Typography>
        </Grid>

        <Grid item textAlign={'center'}>
          <ConstructionIcon sx={{ fontSize: 60, color: '#40A5FE' }} />
          <Typography variant='h6'>Post-Construction <br />Cleaning</Typography>
        </Grid>

        <Grid item textAlign={'center'}>
          <CalendarMonthIcon sx={{ fontSize: 60, color: '#40A5FE' }} />
          <Typography variant='h6'>Recurring <br />Services</Typography>
        </Grid>

      </Grid>










      <div style={{ display: '', justifyContent: '', textAlign: 'center', backgroundColor: '', padding: '30px' }}>

        <Typography style={{backgroundColor:""}} gutterBottom variant='h4'>Recurring Services</Typography>

        <Typography style={{backgroundColor:''}} variant='H6'>DAILY | WEEKLY | MONTHLY | ONE TIME CLEANING | CUSTOM CLEANING</Typography>

      </div>






    </Container>
  )
};
