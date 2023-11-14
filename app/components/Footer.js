import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
// import Link from '@mui/material/Link';


import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
// import WhatsAppIcon from '@mui/icons-material/WhatsApp';
// import LinkedInIcon from '@mui/icons-material/LinkedIn';


import Image from 'next/image';




export default function Footer() {




    return (
        <Box component="footer" sx={{ bgcolor: 'whitesmoke' }}>


            <div style={{ textAlign: 'center', padding: '20px' }}>


                <h2>Follow us on 
                    <br />

                    <a style={{ textDecoration: 'none', color: 'blue' }} target='_blank' href="https://www.instagram.com/mamascleaningnj/">Instagram</a>
                    &nbsp;
                    &
                    &nbsp;

                    <a style={{ textDecoration: 'none', color: 'blue' }} target='_blank'  href='https://www.facebook.com/MamasCleaningServiceNJ'>Facebook</a>


                    !</h2>

                <div>
                    <a href='https://www.instagram.com/mamascleaningnj/' style={{ color: 'black', margin: '5px' }} target='_blank'><InstagramIcon style={{ fontSize: '40px' }} /></a>
                    <a href='https://www.facebook.com/MamasCleaningServiceNJ' style={{ color: 'black', margin: '5px' }} target='_blank'><FacebookIcon style={{ fontSize: '40px' }} /></a>
                </div>

            </div>







            <Container maxWidth="lg" style={{ textAlign: 'center' }}>


<a href="/">

                <Image src={'/mcs/mamacslogo1.png'} alt='mamascleaningnj' height={65} width={180} />
</a>







                <Typography py={1} style={{ color: '#40A5FE' }}>@ Mama's Cleaning NJ 2023</Typography>



            </Container>
        </Box>
    )
};