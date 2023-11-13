import React from 'react'


import { Button, Box, Container, Grid, Typography, TextField } from '@mui/material'
import Image from 'next/image'

import Carousel from '../../components/Carousel';

import styles from './gallery.module.css';
export default function page() {



  return (
    <Container className={styles.gallery} maxWidth="1">


      <Grid container maxWidth='lg' style={{ margin: 'auto', justifyContent: 'center' }}>


        <Grid className={styles.gallerytitle} item md={12} style={{ backgroundColor: '', textAlign: 'center' }}>
          <Typography variant='h4'>Gallery</Typography>
        </Grid>





        <Carousel />











      </Grid>

















      {/* <div className={styles.gallerybottom}>


        <Grid container maxWidth='xl' style={{ margin: 'auto', backgroundColor: '', height: '40vh', padding: '20px', paddingBottom: "200px", paddingTop: '100px' }}>
          <Grid item md={6} style={{ backgroundColor: '', position: 'relative' }}>
            <Typography style={{ paddingBottom: "40px" }} variant='h4'>Residential</Typography>
            <Typography style={{ paddingBottom: "40px" }} variant='h6'>From your living room to your bedroom, we'll ensure your home is a clean and comfortable haven for you and your family.</Typography>
            <Typography textAlign={'center'}>
              <a style={{ textDecoration: 'none' }} href="tel:9083706943">
                <Button variant='contained' sx={{ padding: '15px' }}>
                  Contact Us
                </Button>
              </a>
            </Typography>
          </Grid>

          <Grid item xs={'none'} md={6} style={{ backgroundColor: '', position: 'relative' }}>
            <Image
              src='https://sudsybucketscleaning.com/wp-content/uploads/2022/05/maid-service-tampa-bay-fl.jpg'
              fill
              position='absolute'
              style={{ objectFit: 'cover' }}
            />
          </Grid>
        </Grid>


        <Grid container maxWidth='xl' style={{ margin: 'auto', backgroundColor: '', height: '40vh', padding: '20px', paddingBottom: "200px", paddingTop: '200px' }}>




          <Grid item xs={'none'} md={6} style={{ backgroundColor: '', position: 'relative' }}>

            <Image
              src='https://steamproinc.com/wp-content/uploads/2018/01/carpet_cleaning_office.png'
              // src='https://www.i-teamglobal.com/-/media/i-team/Public/News/Office.jpg?h=800&w=1600&hash=76A99C40D5CE24E17A84B8266AF22CE3'
              fill
              position='absolute'
              style={{ objectFit: 'cover' }}
            />
          </Grid>

          <Grid item md={6} pl={4} style={{ backgroundColor: '', position: 'relative' }}>
            <Typography style={{ paddingBottom: "40px", }} variant='h4'>Commercial</Typography>
            <Typography style={{ paddingBottom: "40px" }} variant='h6'>Present a clean and inviting business environment to your clients and employees with our thorough commercial cleaning services.</Typography>
            <Typography textAlign={'center'}>
              <a style={{ textDecoration: 'none' }} href="tel:9083706943">
                <Button variant='contained' sx={{ padding: '15px' }}>
                  Contact Us
                </Button>
              </a>
            </Typography>
          </Grid>


        </Grid>


        <Grid container maxWidth='xl' style={{ margin: 'auto', backgroundColor: '', height: '40vh', padding: '20px', paddingBottom: "400px", paddingTop: '200px' }}>

          <Grid item md={6} style={{ backgroundColor: '', position: 'relative' }}>
            <Typography style={{ paddingBottom: "40px" }} variant='h4'>Post-Construction Cleaning</Typography>
            <Typography style={{ paddingBottom: "40px" }} variant='h6'>Present a clean and inviting business environment to your clients and employees with our thorough commercial cleaning services.</Typography>
            <Typography textAlign={'center'}>
              <a style={{ textDecoration: 'none' }} href="tel:9083706943">
                <Button variant='contained' sx={{ padding: '15px' }}>
                  Contact Us
                </Button>
              </a>
            </Typography>
          </Grid>
          <Grid item xs={'none'} md={6} style={{ backgroundColor: '', position: 'relative' }}>

            <Image
              src='https://images.squarespace-cdn.com/content/v1/615b5494a97e17272da04b1c/1640811354741-XG4TD4VX845VWIKY5JHD/Construction+Cleaning.jpg'
              fill
              position='absolute'
              style={{ objectFit: 'cover' }}
            />
          </Grid>
        </Grid>


      </div> */}




    </Container>
  )
};
