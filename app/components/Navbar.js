'use client'
import React, { useEffect, useState, useRef } from 'react';

import { AppBar, Box, Container, Button, Menu, MenuItem, Toolbar, Typography, Drawer, Divider, List, ListItem, ListItemButton, ListItemText } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';

import Image from 'next/image';

import styles from './navbar.module.css';

import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

const drawerWidth = 240;
const pages = ['home', 'services', 'gallery', 'contact'];


    function ResponsiveAppBar() {


    const [mobileOpen, setMobileOpen] = React.useState(false);
    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };
    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Typography variant="h6" sx={{ my: 2, fontWeight: '500' }}>
                Mama's Cleaning Service
            </Typography>
            <Divider />
            <List>
                {pages.map((item) => (
                    <ListItem key={item} disablePadding>

                        <a key={item} href={(item === 'home') ? '/' : `/${item}`} style={{ textDecoration: 'none', margin: 'auto', textTransform:'uppercase', color:'black', fontWeight:'700' }}>

                            <ListItemButton sx={{ textAlign: 'center' }}>
                                <ListItemText primary={item} />
                            </ListItemButton>
                        </a>

                    </ListItem>
                ))}
            </List>

            <Divider />



            <Box pt={5}>
                <a href="tel:9083706943" style={{ textDecoration: 'none' }}>
                    <Typography variant="h7">
                        (908) 370-6943
                    </Typography>
                </a>
            </Box>



            <Box pt={5}>
                <Typography variant="h7">
                    Linden, NJ
                </Typography>
                <br />
                <br />
                <Typography variant="h7">
                    Somerville, NJ
                </Typography>
                <br />
                <br />
                <Typography variant="h7">
                    Plainfield, NJ
                </Typography>
                <br />
                <br />
                <Typography variant="h7">
                    and nearby areas
                </Typography>
            </Box>

            <Divider style={{marginTop:'30px', marginBottom:'30px'}} />

            <Box>

                    <a href='https://www.instagram.com/mamascleaningnj/' style={{ color: 'black', margin: '5px' }} target='_blank'><InstagramIcon style={{ fontSize: '30px' }} /></a>
                    <a href='https://www.facebook.com/MamasCleaningServiceNJ' style={{ color: 'black', margin: '5px' }} target='_blank'><FacebookIcon style={{ fontSize: '30px' }} /></a>
            </Box>



        </Box>
    );


// nav scroll
const prevScrollY = useRef(0);
const [active, setActive] = useState(false);
const handleScroll = () => {
    const currentScrollY = window.scrollY;

    prevScrollY.current = currentScrollY;


    if (currentScrollY > 120) {
        setActive(true)
    } else {
        setActive(false)
    }
    
};
useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
}, [active, handleScroll]);






    return (

        <div>

            <AppBar position="fixed" className={active ? styles.mainnavscroll : styles.mainnav}>
                <Container maxWidth="xl">
                    <Toolbar disableGutters>




                        {/* Logo */}
                        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>

                            <a href="/">


                                <Image
                                    src='/mcs/mamacslogo1.png'
                                    alt='logo'
                                    height={110}
                                    width={310}
                                    style={{ backgroundColor: "" }}
                                />
                            </a>

                        </Box>




                        {/* Burger */}
                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, color: active ? 'black' : 'white' }}>
                            <IconButton
                                size="large"
                                aria-label="open drawer"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleDrawerToggle}
                                color="inherit"
                            >
                                <MenuIcon />
                            </IconButton>
                        </Box>







                        {/* Logo small */}
                        <Box sx={{ display: { xs: 'flex', md: 'none' }, flexGrow: 1, mr: 2 }}>
                            <a href="/">


                                <Image
                                    src='/mcs/mamacslogo1.png'
                                    alt='logo'
                                    height={110}
                                    width={300}
                                    style={{ backgroundColor: "" }}
                                />
                            </a>

                        </Box>




                        {/* Links */}
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, bgcolor: '' }} justifyContent={'center'}>
                            {pages.map((page) => (



                                <a key={page} href={(page === 'home') ? '/' : `/${page}`} style={{ textDecoration: 'none', paddingLeft: "10px", paddingRight: '10px' }}>


                                    <Button
                                        key={page}
                                        // onClick={handleCloseNavMenu}
                                        sx={{ my: 2, display: 'block' }}
                                        className={ active ? styles.navlinkscroll : styles.navlinks}
                                    >
                                        {page}
                                    </Button>



                                </a>



                            ))}
                        </Box>




                        {/* Phone */}
                        <Box sx={{ flexGrow: 0, bgcolor: '', display: { xs: 'none', md: 'block' } }}>

                            <Button href="tel:9083706943" variant='contained'>




                                <Typography
                                    variant="h7"
                                    noWrap
                                    component="string"
                                    sx={{
                                        // mr: 2,
                                        display: { xs: 'none', md: 'flex' },
                                        flexGrow: 1,
                                        fontFamily: 'monospace',
                                        fontWeight: 500,
                                        // letterSpacing: '1rem',
                                        color: 'inherit',
                                    }}
                                >
                                    (908) 370-6943
                                </Typography>



                            </Button>




                        </Box>







                    </Toolbar>
                </Container>
            </AppBar>


            <nav>
                <Drawer
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
            </nav>

        </div>
    )
};



export default ResponsiveAppBar;