import React from 'react'


import { Button, Box, Container, Grid, Typography, TextField } from '@mui/material'
import Image from 'next/image'

export default function page() {
  return (
    <Container maxWidth="1" style={{ backgroundColor: '', margin: "auto", backgroundColor: '', marginTop: '20vh' }}>





      <Grid container maxWidth='lg' style={{ margin: 'auto', backgroundColor: '', padding: '40px' }}>



        <Grid item md={12} style={{ backgroundColor: '', textAlign: 'center' }}>
          <Typography variant='h5' pb={4} gutterBottom style={{ fontWeight: "600", color: '#40A5FE' }}>
            Get in Touch with Mama's Cleaning Service - Your Trusted Cleaning Partner
          </Typography>
          <Typography variant='p' style={{ fontSize: '1.4em' }}>
            Welcome to Mama's Cleaning Service! Reach out to us via our dedicated contact page to discuss your cleaning needs, schedule a service, or inquire about our cleaning packages. Our team of dedicated professionals is ready to assist you with any queries you may have. Let's make your space sparkling clean!
          </Typography>
        </Grid>




      </Grid>







      <Grid container maxWidth='1' style={{ margin: 'auto', backgroundColor: '', height: '50vh' }}>



        <Grid item md={6} style={{ backgroundColor: '', position: 'relative' }}>
          <Image
            src={'/mcs/jumboimg.png'}
            // height={200}
            // width={200}
            layout='fill'
            position='absolute'
            style={{ objectFit: 'contain' }}
          />
        </Grid>


        <Grid item md={6} style={{ backgroundColor: '', position: 'relative' }}>




          <div style={{ display: 'flex', padding: '20px' }}>

            <Typography>mamascleaningnj@gmail.com</Typography>
            <Typography px={4}>|</Typography>
            <Typography><a style={{ textDecoration: 'none' }} href="tel:9083706943">(908) 370 - 6943</a></Typography>

          </div>



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
