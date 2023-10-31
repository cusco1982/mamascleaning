// import Image from 'next/image'
// import styles from './page.module.css'


import { Container, Grid, Typography } from '@mui/material'
import Jumbotron from "./components/Jumbotron"

import Image from 'next/image';

import MuiCarousel from './components/MuiCarousel';





const mainFeaturedPost = {
  title: 'Logo',
  description:

    "Hours : 9AM - 5PM | Mon-Sun",
  // "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",

  image: 'https://source.unsplash.com/random?wallpapers',
  imageText: 'main image description',
  linkText: 'Request FREE Estimate',
};




export default function Home() {
  return (
    // <main className={styles.main}>
    <main>




      <Jumbotron post={mainFeaturedPost} />


      <Grid container maxWidth="lg" style={{ backgroundColor: '', margin: "auto", height: '40vh', minHeight: "300px" }}>



        <Grid item md={6} style={{ backgroundColor: '' }}>


          <Typography variant='h5' pb={4} gutterBottom style={{ fontWeight: "600", color: '#40A5FE' }}>
            Mama's Cleaning Service: Your Trusted Cleaning Partner in New Jersey
          </Typography>


          <Typography variant='p' style={{ fontSize: '1.4em' }}>

            Are you seeking reliable and professional cleaning services in the heart of New Jersey? Look no further than Mama's Cleaning Service! With a reputation for excellence and a commitment to customer satisfaction, we deliver cleaning solutions that exceed your expectations.

          </Typography>


        </Grid>


        <Grid item md={6} style={{ backgroundColor: '', position: 'relative' }}>
          <Image
            src={'/mcs/windeximg.png'}
            // height={200}
            // width={200}
            layout='fill'
            position='absolute'
            style={{ objectFit: 'contain' }}
          />

        </Grid>



        {/* <MuiCarousel /> */}


      </Grid>







      <br />
      <br />
      <br />
      <br />

      <br />
      <br />
      <br />
      <br />

      <br />
      <br />
      <br />
      <br />




    </main>
  )
}
