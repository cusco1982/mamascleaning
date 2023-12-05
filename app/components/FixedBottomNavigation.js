'use client'
import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Paper from '@mui/material/Paper';


import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';


import styles from './fixedBottomNav.module.css';


export default function FixedBottomNavigation() {
  const [value, setValue] = React.useState(0);
  const ref = React.useRef(null);



  
  React.useEffect(() => {
    ref.current.ownerDocument.body.scrollTop = 0;

  }, [value]);




  return (
    <Box sx={{ pb: 7 }} ref={ref} className={styles.bottomnav}>


      <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >

          <BottomNavigationAction style={{color:'green'}} href='tel:9083706943' label="Phone" icon={<PhoneIcon />} />
          <BottomNavigationAction style={{color:'red'}} href='mailto:mamascleaningnj1@gmail.com' label="Email" icon={<EmailIcon />} />

        </BottomNavigation>
      </Paper>
    </Box>
  )
};
