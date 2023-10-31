'use client'
import * as React from 'react';
import PropTypes from 'prop-types';
import { AppBar, Box, Container, Avatar, Button, Tooltip, Menu, MenuItem, Toolbar, Typography, Drawer, Divider, List, ListItem, ListItemButton, ListItemText } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import AdbIcon from '@mui/icons-material/Adb';

import Image from 'next/image';


const drawerWidth = 240;
const pages = ['home', 'services', 'gallery', 'contact'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function ResponsiveAppBar(props) {

    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };
    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Typography variant="h6" sx={{ my: 2 }}>
                Mama's Cleaning Service
            </Typography>
            <Divider />
            <List>
                {pages.map((item) => (
                    <ListItem key={item} disablePadding>
                        <ListItemButton sx={{ textAlign: 'center' }}>
                            <ListItemText primary={item} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );
    const container = window !== undefined ? () => window().document.body : undefined;




    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };
    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };
    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };



    return (

        <>

            {/* <AppBar position="fixed" style={{ zIndex:'100', backgroundColor: 'rgba(255, 255, 255, 0.5)'}}> */}
            <AppBar position="fixed" style={{ zIndex: '100', backgroundColor: 'rgba(0,0,0,.5)' }}>
                <Container maxWidth="xl">
                    <Toolbar disableGutters>




                        {/* Logo */}
                        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                            <Image
                                src='/mcs/mamacslogo1.png'
                                alt='logo'
                                height={110}
                                width={300}
                                style={{ backgroundColor: "" }}
                            />
                        </Box>




                        {/* Burger */}
                        <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size="large"
                                aria-label="open drawer"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                // onClick={handleOpenNavMenu}
                                onClick={handleDrawerToggle}
                                color="inherit"
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: { xs: 'block', md: 'none' },
                                }}
                            >
                                {pages.map((page) => (
                                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                                        <Typography textAlign="center">{page}</Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>







                        {/* Logo */}
                        <Box sx={{ display: { xs: 'flex', md: 'none' }, flexGrow: 1, mr: 2 }}>
                            <Image
                                src='/mcs/mamacslogo1.png'
                                alt='logo'
                                height={110}
                                width={300}
                                style={{ backgroundColor: "" }}
                            />
                        </Box>




                        {/* Links */}
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                            {pages.map((page) => (



                                <a key={page} href={(page === 'home') ? '/' : `/${page}`} style={{textDecoration:'none'}}>


                                    <Button
                                        key={page}
                                        // onClick={handleCloseNavMenu}
                                        sx={{ my: 2, color: 'white', display: 'block' }}
                                    >
                                        {page}
                                    </Button>



                                </a>



                            ))}
                        </Box>




                        {/* Phone */}
                        <Box sx={{ flexGrow: 0 }}>


                            <Typography
                                variant="h7"
                                noWrap
                                component="a"
                                href="tel:9083706943"
                                sx={{
                                    // mr: 2,
                                    display: { xs: 'none', md: 'flex' },
                                    flexGrow: 1,
                                    fontFamily: 'monospace',
                                    fontWeight: 500,
                                    // letterSpacing: '1rem',
                                    color: 'inherit',
                                    textDecoration: 'none',
                                }}
                            >
                                (908) 370 - 6943
                            </Typography>





                        </Box>







                    </Toolbar>
                </Container>
            </AppBar>


            <nav>
                <Drawer
                    container={container}
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

        </>
    )
};



ResponsiveAppBar.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};


export default ResponsiveAppBar;