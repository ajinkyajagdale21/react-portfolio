import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {Link} from 'react-router-dom'

export const Nav=()=>{
    return(
      <> 
         <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" style={{backgroundColor:"#222629"}}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          </Typography>
          <Link className="link" to="/"><Button color="inherit" >Home</Button></Link>
          <Link className="link" to="/projects"><Button color="inherit" >Projects</Button></Link>
          <Link className="link" to="/blogs"><Button color="inherit" >Blogs</Button></Link>
        </Toolbar>
      </AppBar>
    </Box> 
      </>
    )
}