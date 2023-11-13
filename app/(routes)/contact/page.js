'use client'
import React, {useState} from 'react'
import { Button, Box, Container, Grid, Typography, TextField } from '@mui/material'
import Image from 'next/image'
import styles from './contact.module.css';





export default function page() {


  const [email, setEmail] = useState(false);






  async function handleSubmit(event) {
    event.preventDefault();

    setEmail(true)

    const formData = new FormData(event.target)

    try {

      const response = await fetch('/api/contact', {
        method: 'post',
        body: formData,
      });

      if (!response.ok) {
        console.log("falling over")
        throw new Error(`response status: ${response.status}`);
      }

      const responseData = await response.json();
      console.log(responseData['message'])
      alert('Message successfully sent');





    } catch (error) {
      console.error(error);
      alert("Error, please try resubmitting the form");
    }

  };








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
            alt='jumboimg'
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
              bgcolor:'red'
            }}
            noValidate
            autoComplete="off"
            onSubmit={handleSubmit}
          >


            <div style={{ display: 'flex' }}>
              <TextField
                required
                // error
                id="fname"
                name="fname"
                label="First Name"
              // defaultValue="Hello World"
              />

              <TextField
                required
                id="lname"
                name="lname"
                label="Last Name"
              />
            </div>



            <div style={{ display: 'flex' }}>
              <TextField
                required
                id="email"
                name="email"
                type='email'
                label="Email"
              />

              <TextField
                required
                id="phone"
                label="Phone"
                name="phone"

              />
            </div>


            <div>
              <TextField
                id="message"
                label="Message"
                name="message"
                multiline
                rows={4}
              // defaultValue="Default Value"
              />
            </div>





            <div className={email ? styles.hiddenClass : styles.sendEmailBtn}>
              <Button type='submit' variant="contained">Send</Button>
            </div>


            <div className={ email ? styles.sendMailMessage : styles.hiddenClass}>
            <Typography>Email sent! Thank you!</Typography>
            </div>





          </Box>







        </Grid>




      </Grid>



      <div style={{ display: '', justifyContent: '', textAlign: 'center', backgroundColor: '', padding: '30px' }}>

        <Typography variant='h4'>Hours of Operation</Typography>
        <Typography variant='body1'>Monday-Sunday</Typography>
        <Typography variant='body1'>24/7</Typography>

      </div>






    </Container>
  )
};
