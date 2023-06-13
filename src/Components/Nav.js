import React from 'react';
import { Stack } from '@mui/material';
import {Button,Box} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import useMediaQuery from '@mui/material/useMediaQuery';
import {useState} from 'react';
import { useTheme } from '@mui/material/styles';
import './styling.css';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';


const Nav = () => {
    const theme = useTheme();
    
    const mobile=useMediaQuery(theme.breakpoints.up('md'));
    
    const [click, setclick] = useState(false);
    const change=()=>{
      setclick(!click);
    }
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
    const BtnStyle={
        paddingTop:'5pxs',
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
      const ToolMenu={
        backgroundColor: '#F0EEED',
        justifyContent:'space-between',
      };
     
  return (
      <AppBar className='MainDiv' style={{boxShadow:'0px',backgroundColor:'transparent',}} elevation={0} position='sticky'>
      <Toolbar sx={ToolMenu}>
        <Box component="div">
          <Typography variant="h4" sx={hanmnaName}>Hamna</Typography>
        </Box>
             
        <Box className={click?'boxRow':'boxNo'}>
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
      </Box>

        <Box component="div" className='menuBtn'>
          <Button sx={{color:'#1D2722',border:'1px solid #ACB4B0',borderRadius:'0.25rem',p:'0.25rem 0.75rem',}} onClick={change}><MenuIcon/></Button>
        </Box>
    </Toolbar>
    </AppBar>

  )
}

export default Nav