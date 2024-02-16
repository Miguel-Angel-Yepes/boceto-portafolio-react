import React from 'react';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import Logo from "./Assets/Logo.png"
import Button from '@mui/material/Button';




function NavigationBar() {
  return (
    <AppBar position="fixed"  style={{ backgroundColor: 'rgba(0, 0, 0)', display: 'flex', flexDirection: 'row', justifyContent: 'space-around', height: '80px', alignItems: 'center' } }>
        <img src={Logo} className='Logo'>
        </img>
        <Button color="inherit">Inicio</Button>
        <Button color="inherit">Contacto</Button>
    </AppBar>
  );
}

export default NavigationBar;