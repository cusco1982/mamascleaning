import React from 'react'


import { Button, Box, Container, Grid, Typography, TextField } from '@mui/material'
import Image from 'next/image'

import styles from './contact.module.css';


export default function page() {
  return (
    <Container maxWidth="1" style={{ backgroundColor: '', margin: "auto", backgroundColor: '', marginTop: '20vh' }}>





      <Grid container maxWidth='lg' style={{ margin: 'auto', backgroundColor: '', padding: '40px' }}>



        <Grid item md={12} style={{ backgroundColor: '', textAlign: 'center' }}>
          <Typography variant='h5' pb={4} gutterBottom style={{ fontWeight: "600", color: '#40A5FE' }}>
            Get in Touch with Mama's Cleaning Service - Your Trusted Cleaning Partner
          </Typography>
          <Typography variant='p' style={{ fontSize: '1.4em' }}>
            Let's make your space sparkling clean!
          </Typography>
        </Grid>




      </Grid>







      <Grid container maxWidth='1' style={{ margin: 'auto', backgroundColor: '', height: '50vh', paddingBottom: '500px' }}>



        <Grid item md={6} style={{ backgroundColor: '', position: 'relative' }}>
          <Image
            src={'/mcs/jumboimg.png'}
            fill
            position='absolute'
            style={{ objectFit: 'contain' }}
          />
        </Grid>


        <Grid item xs={12} md={6} style={{ backgroundColor: '', position: 'relative' }}>




          <Box className={styles.info}>

            <Typography><a style={{ textDecoration: 'none' }} href="mailto:mamascleaningnj1@gmail.com">mamascleaningnj1@gmail.com</a></Typography>
            <Typography px={4}>|</Typography>
            <Typography><a style={{ textDecoration: 'none' }} href="tel:9083706943">(908) 370-6943</a></Typography>

          </Box>




          <Box className={styles.infosmall} py={2}>

            <Typography><a style={{ textDecoration: 'none' }} href="mailto:mamascleaningnj1@gmail.com">mamascleaningnj1@gmail.com</a></Typography>
            <Typography><a style={{ textDecoration: 'none' }} href="tel:9083706943">(908) 370-6943</a></Typography>

          </Box>





          <Box
            component="form"
            sx={{
              '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
          >


            <div style={{ display: 'flex' }}>
              <TextField
                required
                id="outlined-required"
                label="First Name"
              // defaultValue="Hello World"
              />

              <TextField
                required
                id="outlined-required"
                label="Last Name"
              />
            </div>



            <div style={{ display: 'flex' }}>
              <TextField
                required
                id="outlined-required"
                label="Email"
              />

              <TextField
                required
                id="outlined-required"
                label="Phone"
              />
            </div>


            <div>
              <TextField
                id="outlined-multiline-static"
                label="Message"
                multiline
                rows={4}
              // defaultValue="Default Value"
              />
            </div>


            <div style={{ textAlign: 'center' }}>
              <Button variant="contained">Send</Button>
            </div>




          </Box>







        </Grid>




      </Grid>



      <div style={{ display: '', justifyContent: '', textAlign: 'center', backgroundColor: '', padding: '30px' }}>

        <Typography mr={4} variant='h4'>Hours of Operation</Typography>
        <Typography mx={4} variant='body1'>Monday - Suday</Typography>
        <Typography variant='body1'>9 AM - 5 PM</Typography>

      </div>






    </Container>
  )
};
