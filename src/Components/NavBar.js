import React from 'react';
import {styling} from "./styling.css";
import { Button } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { fontFamily } from '@mui/system';
import Typography from '@mui/material/Typography';
import {Box} from '@mui/system';
import MenuIcon from '@mui/icons-material/Menu';
import useMediaQuery from '@mui/material/useMediaQuery';
import {useState} from 'react';
import { useTheme } from '@mui/material/styles';
import {Stack} from '@mui/material';
const NavBar = () => {
    const theme = useTheme();

    const [click, setclick] = useState(false);
    const change=()=>{
      setclick(!click);
    }
    
    // const matches = useMediaQuery(theme.breakpoints.up('sm'));

  const ToolMenu={
    backgroundColor: '#F0EEED',
    justifyContent:'space-between',
  };

  const HomeBtns={
    display:'flex',
    flexDirection:'column',
  };

  const BtnStyle={
    fontFamily: [
      'Montserrat',
      'sans-serif',
    ].join(','),
    color:'#9B9B9B',
    "&:hover":{
      backgroundColor:'transparent',
      color:'#483732',
    }
  };
  const resumeBtn={
    borderColor:'#7b1fa2',
    fontFamily: [
      'Playfair Display',
      'serif',
    ].join(','),
    backgroundColor:'F0EEED',
    color:'#7b1fa2',
    "&:hover":{
      backgroundColor:'#7b1fa2',
    color:'#F0EEED',
    }
  };
  const hanmnaName={
    color:'#7b1fa2',
    fontFamily: [
      'Great Vibes',
      'cursive',
    ].join(','),

    "&:hover":{
      color:'black',
    }
  };
 const MenuBtn ={
    display:useMediaQuery(theme.breakpoints.up('md'))?'none':'inline',

 };

 

  return (
    <AppBar className='MainDiv' style={{boxShadow:'0px',backgroundColor:'transparent',}} elevation={0} position='sticky'>
      <Toolbar sx={ToolMenu}>
        <Box component="div" className='hamnaDiv'>
          <Typography variant="h4" sx={hanmnaName}>Hamna</Typography>
        </Box>
      <Stack sx={HomeBtns}>
        <Button variant='text' disableTouchRipple sx={BtnStyle}>
          H <span style={{textTransform: 'lowercase',}}>ome</span></Button>
        <Button variant='text' disableTouchRipple sx={BtnStyle}>A <span style={{textTransform: 'lowercase',}}>bout</span></Button>
        <Button variant='text' disableTouchRipple sx={BtnStyle}>W <span style={{textTransform: 'lowercase',}}>hat I do?</span></Button>
        <Button variant='text' disableTouchRipple sx={BtnStyle}>S <span style={{textTransform: 'lowercase',}}>kills</span></Button>
        <Button variant='text' disableTouchRipple sx={BtnStyle}>E <span style={{textTransform: 'lowercase',}}>xperience</span></Button>
        <Button variant='text' disableTouchRipple sx={BtnStyle}>P <span style={{textTransform: 'lowercase',}}>rojects</span></Button>
        <Button variant='text' disableTouchRipple sx={BtnStyle}>P <span style={{textTransform: 'lowercase',}}>ortfolio</span></Button>
        <Button variant='text' disableTouchRipple sx={BtnStyle}>C <span style={{textTransform: 'lowercase',}}>ontact</span></Button>
        <Button variant='outlined' disableTouchRipple sx={resumeBtn}>Resume</Button>
      </Stack>

        <Box component="div" sx={MenuBtn}>
          <Button sx={{color:'#1D2722',border:'1px solid #ACB4B0',borderRadius:'0.25rem',p:'0.25rem 0.75rem',}} onClick={change}><MenuIcon/></Button>
        </Box>


      </Toolbar>
        
    </AppBar>
  )
}

export default NavBar