import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
// import Link from '@mui/material/Link';

import Image from 'next/image';




export default function Footer() {




    return (
        <Box component="footer" sx={{ bgcolor: '', pt: 2 }}>

            <Container maxWidth="lg" style={{ textAlign: 'center' }}>



                <Image src={'/mcs/mamacslogo1.png'} alt='mamascleaningnj' height={65} width={180} />



                <Typography py={1} style={{color: '#40A5FE'}}>@ Mama's Cleaning NJ 2023</Typography>

            </Container>
        </Box>
    )
};