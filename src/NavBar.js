import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';


const NavBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{ bgcolor: "#0d021a" }}>
          <Link to="/">HOME</Link>
          <Button color="inherit">LOGIN</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default NavBar;