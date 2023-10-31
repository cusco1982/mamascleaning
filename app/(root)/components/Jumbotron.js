import * as React from 'react';
import PropTypes from 'prop-types';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import { Button } from '@mui/material'

import Image from 'next/image';

import jumboimg from '../../../public/mcs/jumboimg.png';

function Jumbotron(props) {
  const { post } = props;

  return (


    <Paper
      sx={{
        position: 'relative',
        backgroundColor: 'grey.800',
        color: '#fff',
        mb: 4,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundImage: `url(${jumboimg.src})`,
        // backgroundImage: `url(${post.image})`,
      }}
    >
      {/* Increase the priority of the hero background image */}
      {<img style={{ display: 'none' }} src={post.image} alt={post.imageText} />}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          // backgroundColor: 'rgba(0,0,0,.3)',
        }}
      />
      <Grid container pt={20}>
        <Grid item md={12}>
          <Box
            sx={{
              position: 'relative',
              p: { xs: 3, md: 6 },
              pr: { md: 0 },
              // bgcolor:'red',
              height: '50vh'
            }}
            textAlign={'center'}
          >
            {/* <Typography component="h1" variant="h3" color="inherit" gutterBottom>
                {post.title}
              </Typography> */}


            <Box pb={4}>


              <Image
                src='/mcs/mamacslogo1.png'
                height='240'
                width='680'
                // layout='fill'
                style={{ backgroundColor: 'rgba(255, 255, 255, 0.5)', }}

              />

            </Box>



            <Button variant='container' style={{ backgroundColor: 'blue' }}>


              <Link href="/contact" style={{ textDecoration: 'none', color: 'white', textTransform: 'none', fontSize: "1.2em", padding: '10px' }}>
                {/* {post.linkText} */}
                Request FREE Estimate
              </Link>

            </Button>








            <Typography variant="h5" color="inherit" paragraph pt={4}>
              {post.description}
            </Typography>

          </Box>
        </Grid>
      </Grid>
    </Paper>


  );
}

Jumbotron.propTypes = {
  post: PropTypes.shape({
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    imageText: PropTypes.string.isRequired,
    linkText: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default Jumbotron;
