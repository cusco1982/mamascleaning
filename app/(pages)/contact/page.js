'use client'
import React, { useEffect, useState } from 'react'
import { Button, Box, Container, Grid, Typography, TextField } from '@mui/material'
import Image from 'next/image'
import styles from './contact.module.css';





export default function page() {


  const [email, setEmail] = useState(false);


  useEffect(() => {
    const isNumericInput = (event) => {
      const key = event.keyCode;
      return ((key >= 48 && key <= 57) || // Allow number line
        (key >= 96 && key <= 105) // Allow number pad
      );
    };
    const isModifierKey = (event) => {
      const key = event.keyCode;
      return (event.shiftKey === true || key === 35 || key === 36) || // Allow Shift, Home, End
        (key === 8 || key === 9 || key === 13 || key === 46) || // Allow Backspace, Tab, Enter, Delete
        (key > 36 && key < 41) || // Allow left, up, right, down
        (
          // Allow Ctrl/Command + A,C,V,X,Z
          (event.ctrlKey === true || event.metaKey === true) &&
          (key === 65 || key === 67 || key === 86 || key === 88 || key === 90)
        )
    };
    const enforceFormat = (event) => {
      // Input must be of a valid number format or a modifier key, and not longer than ten digits
      if (!isNumericInput(event) && !isModifierKey(event)) {
        event.preventDefault();
      }
    };
    const formatToPhone = (event) => {
      if (isModifierKey(event)) { return; }
      const input = event.target.value.replace(/\D/g, '').substring(0, 10); // First ten digits of input only
      const areaCode = input.substring(0, 3);
      const middle = input.substring(3, 6);
      const last = input.substring(6, 10);
      if (input.length > 6) { event.target.value = `(${areaCode}) ${middle} - ${last}`; }
      else if (input.length > 3) { event.target.value = `(${areaCode}) ${middle}`; }
      else if (input.length > 0) { event.target.value = `(${areaCode}`; }
    };
    const inputElement = document.getElementById('phone');
    inputElement.addEventListener('keydown', enforceFormat);
    inputElement.addEventListener('keyup', formatToPhone);
  }, [])


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
        // console.log("falling over")
        throw new Error(`response status: ${response.status}`);
      }

      const responseData = await response.json();
      // console.log(responseData['message'])
      // alert('Message successfully sent');



    } catch (error) {
      console.error(error);
      // alert("Error, please try resubmitting the form");
    }
  };



  return (
    <Container maxWidth="1" style={{ backgroundColor: '', margin: "auto", backgroundColor: '', marginTop: '20vh' }}>

      <Grid container maxWidth='lg' style={{ margin: 'auto', backgroundColor: '', padding: '40px' }}>
        <Grid item md={12} style={{ backgroundColor: '', textAlign: 'center' }}>
          <Typography variant='h5' pb={4} gutterBottom style={{ fontWeight: "600", color: '#40A5FE' }}>
            Get in Touch with Mama's Cleaning Service - Your Trusted Cleaning Partner
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
            sizes='(max-width: 768px) 100vw, 33vw'
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



          {/* Form */}
          <div style={{ backgroundColor: '' }}>



            <form
              onSubmit={handleSubmit}
              className={styles.formClass}
            >


              <div style={{ display: 'flex' }}>
                <input
                  required
                  id="fname"
                  name="fname"
                  placeholder='First Name'
                  type='text'
                />
                <input
                  required
                  id="lname"
                  name="lname"
                  placeholder='Last Name'
                  type='text'

                />
              </div>



              <div style={{ display: 'flex' }}>
                <input
                  required
                  id="email"
                  name="email"
                  type='email'
                  placeholder='Email'
                />
                <input
                  required
                  id="phone"
                  name="phone"
                  placeholder='(123) 456 - 7890'
                  type='tel'
                  maxLength={16}
                  pattern="\([0-9]{3}\)? ?[0-9]{3}? ?-? ?[0-9]{4}"
                />
              </div>


              <div style={{ paddingLeft: '10px', paddingRight: '10px' }}>
                <textarea
                  id="message"
                  name="message"
                  placeholder='Message..'
                />
              </div>



              <div className={email ? styles.hiddenClass : styles.sendEmailBtn}>
                <Button type='submit' variant="contained">Send</Button>
              </div>


              <div className={email ? styles.sendMailMessage : styles.hiddenClass}>
                <Typography>Email sent! Thank you!</Typography>
              </div>



            </form>



          </div>




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
