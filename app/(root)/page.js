// import Image from 'next/image'
// import styles from './page.module.css'


import { Button, Container, Grid, Typography } from '@mui/material'
import Jumbotron from "./components/Jumbotron"

import Image from 'next/image';

import Carousel from '../components/Carousel';






const mainFeaturedPost = {
  title: 'Logo',
  description: "Hours: 24/7  Mon - Sun",
  image: 'https://source.unsplash.com/random?wallpapers',
  imageText: 'main image description',
  linkText: 'Request FREE Estimate',
};




export default function Home() {
  return (
    // <main className={styles.main}>
    <main style={{padding:'0', margin:'0', overflow:'hidden'}}>




      <Jumbotron post={mainFeaturedPost} />


      <Grid container maxWidth="lg" style={{ backgroundColor: '', margin: "auto", height: '40vh', minHeight: "300px", padding:'20px', margin:'auto' }}>


        <Grid item md={6}  style={{ backgroundColor: '' }}>
          <Typography variant='h5' pb={4} gutterBottom style={{ fontWeight: "600", color: '#40A5FE' }}>
            Mama's Cleaning Service: Your Trusted Cleaning Partner in New Jersey
          </Typography>
          <Typography variant='p' style={{ fontSize: '1.4em', backgroundColor:'', padding:'0' }}>
            Are you seeking reliable and professional cleaning services in the heart of New Jersey? Look no further than Mama's Cleaning Service! With a reputation for excellence and a commitment to customer satisfaction, we deliver cleaning solutions that exceed your expectations.
          </Typography>
        </Grid>




        <Grid item xs={'none'} md={6} style={{ backgroundColor: '', position: 'relative' }}>
          <Image
            src={'/mcs/windeximg.png'}
            fill
            // style={{ objectFit: 'cover' }}
            // style={{ objectFit: 'fill' }}
            style={{ objectFit: 'contain' }}

          />
        </Grid>


      </Grid>






      <Carousel />



      <div style={{ backgroundColor: '', textAlign: 'center', paddingTop:'40px', paddingBottom:'40px'}}>



        <a href="tel:9083706943">
          <Button variant='contained'>Call Now!</Button>
        </a>

      </div>






    </main>
  )
}
